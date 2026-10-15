import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import handleChat from "./server/chat.js";

// Serves POST /api/chat during `npm run dev` / `npm run preview`, so the Groq key
// (read from .env) stays on the server and is never bundled into the website.
const chatApi = () => ({
  name: "bharatworks-chat-api",
  configureServer(server) {
    server.middlewares.use("/api/chat", handleChat);
  },
  configurePreviewServer(server) {
    server.middlewares.use("/api/chat", handleChat);
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of ["GROQ_API_KEY", "GROQ_MODEL", "GROQ_BASE_URL"]) {
    if (env[key] && !process.env[key]) process.env[key] = env[key];
  }
  return { plugins: [react(), chatApi()] };
});
