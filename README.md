# BharatWorks

A freelance-marketplace demo built with React 18, Vite, and React Router. Gigs,
orders, and messages are local demo data (persisted to your browser's
localStorage) — there's no real backend or payment processing.

## Getting started

```bash
npm install
cp .env.example .env   # then add your Groq API key
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## The chatbot (Saarthi)

The floating chat widget in the bottom-right corner is powered by
[Groq](https://console.groq.com/). To enable it:

1. Create an API key at https://console.groq.com/keys
2. Put it in `.env` (copy `.env.example` first):
   ```
   GROQ_API_KEY=gsk_your_key_here
   GROQ_MODEL=openai/gpt-oss-120b
   ```
3. Restart `npm run dev`.

The key is read server-side only (see `server/chat.js`) — it's never sent to
the browser. If it's missing, the chat widget will show a friendly setup
message instead of crashing.

**If you see "the model does not exist or you do not have access to it":**
Groq renames/retires models periodically. Check
https://console.groq.com/docs/models for the current list and update
`GROQ_MODEL` in `.env`.

## Building for production

```bash
npm run build   # outputs to dist/
npm start       # serves dist/ + the /api/chat endpoint on PORT (default 3000)
```

`npm start` reads `.env` itself, so make sure it's present alongside
`package.json` on whatever machine you deploy to.

## What's demo-only

This project has no server-side database. The following are simulated in the
browser via `localStorage` (see `src/context/DataContext.jsx`):

- **Accounts** — signing in/up just stores a name + role locally; any
  username/password works.
- **Gigs** — seeded from `src/data.js`; gigs you add via "Post a Job" are
  saved locally and show up in "My Jobs" and the Gigs listing.
- **Orders** — a fixed seed list joined against gig data.
- **Messages** — seeded conversations, plus a canned auto-reply when you send
  a message, just for a bit of realism.

Wire these up to a real API whenever you're ready to take this past the demo
stage.

## Project structure

```
server/          Groq proxy + production static server
src/
  components/    Navbar, Footer, GigCard, ChatWidget, etc.
  context/       AuthContext (demo auth) and DataContext (gigs/orders/messages)
  pages/         One folder per route
  data.js        Categories, seed gigs, footer/info copy
  styles/        Shared SCSS variables and global styles
```
