import React from "react";
import { Link, useParams } from "react-router-dom";
import { infoPages } from "../../data";
import "./InfoPage.scss";

function InfoPage() {
  const { slug } = useParams();
  const page = infoPages[slug];

  if (!page) {
    return (
      <div className="infoPage">
        <div className="container notFoundBox">
          <h1>Page not found</h1>
          <Link to="/" className="btn btn-gold">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="infoPage">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/">Home</Link> / {page.title}
        </span>
        <h1>{page.title}</h1>
        {page.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export default InfoPage;
