import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiSend } from "react-icons/fi";
import Avatar from "../../components/avatar/Avatar";
import { useData } from "../../context/DataContext";
import "./Message.scss";

function Message() {
  const { id } = useParams();
  const { conversations, sendMessage } = useData();
  const [text, setText] = useState("");
  const listRef = useRef(null);

  const conversation = conversations.find((c) => c.id === id);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [conversation?.messages.length]);

  if (!conversation) {
    return (
      <div className="message">
        <div className="container notFoundBox">
          <h1>Conversation not found</h1>
          <Link to="/messages" className="btn btn-gold">
            Back to messages
          </Link>
        </div>
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    sendMessage(conversation.id, text.trim());
    setText("");
  };

  return (
    <div className="message">
      <div className="container">
        <Link to="/messages" className="backLink">
          <FiArrowLeft size={14} /> All conversations
        </Link>

        <div className="thread card">
          <div className="threadHeader">
            <Avatar name={conversation.withName} size={38} />
            <span>{conversation.withName}</span>
          </div>

          <div className="threadBody" ref={listRef}>
            {conversation.messages.map((m, i) => (
              <div key={i} className={m.from === "me" ? "bubble me" : "bubble them"}>
                {m.text}
              </div>
            ))}
          </div>

          <form className="composer" onSubmit={submit}>
            <input
              type="text"
              placeholder="Write a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" disabled={!text.trim()} aria-label="Send">
              <FiSend size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Message;
