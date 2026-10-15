import React, { createContext, useCallback, useContext, useMemo } from "react";
import { seedGigs } from "../data";
import { useLocalStorage } from "../lib/useLocalStorage";

// Everything here is local-only demo state (backed by localStorage) — there
// is no server. It exists so "Post a job", "Delete", and "Send message"
// feel real instead of being dead buttons.
const DataContext = createContext(null);

const seedOrders = [
  { id: "o1", gigId: "g1", counterparty: "Maria Anders", role: "buyer" },
  { id: "o2", gigId: "g6", counterparty: "Francisco Chang", role: "buyer" },
  { id: "o3", gigId: "g4", counterparty: "Roland Mendel", role: "buyer" },
];

const seedConversations = [
  {
    id: "c1",
    withName: "Tarun Singhal",
    updatedAt: "2026-09-21T10:00:00.000Z",
    messages: [
      { from: "them", text: "Hi! How are you?" },
      {
        from: "me",
        text: "Doing well, thanks! I wanted to ask about the web dev course — does it cover deployment too?",
      },
      { from: "them", text: "Yes, we cover deploying to Vercel and a basic Node/Express API in week 6." },
    ],
  },
  {
    id: "c2",
    withName: "Sarthak",
    updatedAt: "2026-09-21T08:30:00.000Z",
    messages: [{ from: "them", text: "Sent over the first draft — let me know what you think!" }],
  },
  {
    id: "c3",
    withName: "Ayush",
    updatedAt: "2026-09-20T18:00:00.000Z",
    messages: [{ from: "them", text: "Thanks for the quick turnaround on this." }],
  },
];

const AUTO_REPLIES = [
  "Thanks for the message — I'll take a look and get back to you shortly!",
  "Got it, appreciate the detail. Let me check and reply soon.",
  "Sounds good, I'll follow up with next steps shortly.",
];

export function DataProvider({ children }) {
  const [customGigs, setCustomGigs] = useLocalStorage("bw_custom_gigs", []);
  const [deletedSeedIds, setDeletedSeedIds] = useLocalStorage("bw_deleted_seed_gigs", []);
  const [conversations, setConversations] = useLocalStorage("bw_conversations", seedConversations);
  const [orders] = useLocalStorage("bw_orders", seedOrders);

  const gigs = useMemo(
    () => [...customGigs, ...seedGigs.filter((g) => !deletedSeedIds.includes(g.id))],
    [customGigs, deletedSeedIds]
  );

  const getGig = useCallback((id) => gigs.find((g) => g.id === id), [gigs]);

  const addGig = useCallback(
    (gig) => {
      const newGig = {
        ...gig,
        id: `custom-${Date.now()}`,
        rating: 5,
        reviewsCount: 0,
      };
      setCustomGigs((prev) => [newGig, ...prev]);
      return newGig;
    },
    [setCustomGigs]
  );

  const removeGig = useCallback(
    (id) => {
      if (id.startsWith("custom-")) {
        setCustomGigs((prev) => prev.filter((g) => g.id !== id));
      } else {
        setDeletedSeedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
      }
    },
    [setCustomGigs, setDeletedSeedIds]
  );

  const sendMessage = useCallback(
    (conversationId, text) => {
      const now = new Date().toISOString();
      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? { ...c, updatedAt: now, messages: [...c.messages, { from: "me", text }] }
            : c
        )
      );

      window.setTimeout(() => {
        const reply = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
        setConversations((prev) =>
          prev.map((c) =>
            c.id === conversationId
              ? {
                  ...c,
                  updatedAt: new Date().toISOString(),
                  messages: [...c.messages, { from: "them", text: reply }],
                }
              : c
          )
        );
      }, 1400);
    },
    [setConversations]
  );

  const startConversation = useCallback(
    (withName) => {
      const existing = conversations.find((c) => c.withName === withName);
      if (existing) return existing.id;

      const id = `c-${Date.now()}`;
      setConversations((prev) => [
        {
          id,
          withName,
          updatedAt: new Date().toISOString(),
          messages: [{ from: "them", text: `Hi! Thanks for reaching out about my gig — how can I help?` }],
        },
        ...prev,
      ]);
      return id;
    },
    [conversations, setConversations]
  );

  const value = useMemo(
    () => ({
      gigs,
      getGig,
      addGig,
      removeGig,
      orders,
      conversations,
      sendMessage,
      startConversation,
    }),
    [gigs, getGig, addGig, removeGig, orders, conversations, sendMessage, startConversation]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within a DataProvider");
  return ctx;
}
