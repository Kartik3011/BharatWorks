import React, { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";
import { sendChatMessage } from "../../lib/chat";
import "./ChatWidget.scss";

const GREETING = {
  role: "assistant",
  content:
    "Namaste! I'm Saarthi, your BharatWorks assistant. Ask me about categories, how hiring works, or how to post a job.",
};

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  const send = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const reply = await sendChatMessage(nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatWidget">
      {open && (
        <div className="panel" role="dialog" aria-label="BharatWorks assistant">
          <div className="header">
            <div>
              <strong>Saarthi</strong>
              <span>BharatWorks Assistant</span>
            </div>
            <button className="closeBtn" onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX size={18} />
            </button>
          </div>

          <div className="messages" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bubble assistant typing" aria-live="polite">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            )}
            {error && <div className="bubble errorBubble">{error}</div>}
          </div>

          <form className="composer" onSubmit={send}>
            <input
              type="text"
              placeholder="Ask Saarthi anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send">
              <FiSend size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        className="fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </button>
    </div>
  );
}

export default ChatWidget;
