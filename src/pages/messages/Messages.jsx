import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";
import { useData } from "../../context/DataContext";
import prof from "../../assets/prof.png";
import "./Messages.scss";

function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function Messages() {
  const { conversations } = useData();
  const sorted = [...conversations].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="messages">
      <div className="container">
        <div className="page-heading">
          <h1>Messages</h1>
          <p>Conversations with freelancers and clients.</p>
        </div>

        {sorted.length === 0 ? (
          <div className="empty-state">
            <img src={prof} alt="" width={56} />
            <h3>No conversations yet</h3>
            <p>Message a seller from any gig page to start one.</p>
          </div>
        ) : (
          <div className="list card">
            {sorted.map((c) => {
              const last = c.messages[c.messages.length - 1];
              return (
                <Link to={`/message/${c.id}`} className="row" key={c.id}>
                  <Avatar name={c.withName} size={44} />
                  <div className="info">
                    <span className="name">{c.withName}</span>
                    <span className="preview">{last?.text}</span>
                  </div>
                  <span className="time">{timeAgo(c.updatedAt)}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;
