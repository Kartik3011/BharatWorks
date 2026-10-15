import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notFound">
      <div className="container">
        <span className="code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn btn-gold">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
