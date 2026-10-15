// Talks to the server-side Groq proxy at POST /api/chat (see server/chat.js).
// The Groq API key never lives in the browser.
export async function sendChatMessage(messages) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // fall through — handled below
  }

  if (!res.ok) {
    throw new Error(data?.error || `Something went wrong (${res.status}).`);
  }
  if (!data?.reply) {
    throw new Error("Empty response from the assistant.");
  }
  return data.reply;
}
