// Minimal Groq chat-completions proxy. Runs only on the server so the
// GROQ_API_KEY never reaches the browser. Used by both the Vite dev/preview
// server (see vite.config.js) and the production server (server/index.js).

const MAX_HISTORY = 12; // keep requests small & fast
const MAX_MESSAGE_LENGTH = 4000;

const SYSTEM_PROMPT = `You are Saarthi, the friendly virtual assistant for BharatWorks, an Indian
freelance marketplace that connects clients with freelancers and local
professionals (web/app developers, designers, video editors, photographers,
technicians, teachers, digital marketers, and more).

Help visitors:
- find the right category or gig, and point them to the gigs/browse page
- understand how BharatWorks works (posting a job, hiring a freelancer,
  messaging, payment protection)
- with general freelancing questions (writing a good brief, what a fair
  budget looks like, how reviews work)

Keep replies short (2-4 sentences unless asked for more detail), warm, and
in plain English, switching to Hindi/Hinglish if the visitor writes in it.
This is a demo project: there is no real backend, payments, or account
system yet, so if someone asks you to actually place an order, send money,
or access a real account, explain that gently instead of pretending to do it.`;

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1e6) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

export default async function handleChat(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Use POST." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return sendJson(res, 500, {
      error:
        "The chatbot isn't configured yet. Add GROQ_API_KEY to a .env file on the server (see .env.example) and restart.",
    });
  }

  // openai/gpt-oss-120b is on Groq's free developer tier as of writing.
  // Groq renames/retires models periodically — if this starts erroring with
  // "model does not exist", check https://console.groq.com/docs/models and
  // update GROQ_MODEL in .env.
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  const baseUrl = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";

  let body;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    return sendJson(res, 400, { error: err.message });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const history = incoming
    .filter(
      (m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (history.length === 0) {
    return sendJson(res, 400, { error: "No message provided." });
  }

  try {
    const groqRes = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
        temperature: 0.6,
        max_tokens: 500,
      }),
    });

    const data = await groqRes.json().catch(() => null);

    if (!groqRes.ok) {
      const message = data?.error?.message || `Groq API error (${groqRes.status}).`;
      return sendJson(res, 502, { error: message });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return sendJson(res, 502, { error: "Groq returned an empty response." });
    }

    return sendJson(res, 200, { reply });
  } catch (err) {
    return sendJson(res, 502, { error: `Couldn't reach Groq: ${err.message}` });
  }
}
