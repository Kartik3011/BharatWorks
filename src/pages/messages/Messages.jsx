import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `New notification`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Tarun</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Sarthak</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}
              </Link>
            </td>
            <td>2 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Ayush</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Shubham</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Utkarsh</td>
            <td>{message.substring(0, 100)}</td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
