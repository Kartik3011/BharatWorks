import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photu from "../../manset/man1.png";
import "./Featured.scss";

const trending = [
  { label: "Marketing", q: "marketing" },
  { label: "SEO", q: "seo" },
  { label: "Technician", q: "technician" },
  { label: "Web Development", q: "web development" },
];

function Featured() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const runSearch = (e) => {
    e.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    navigate(`/gigs${params}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Explore excellent <span>फ्रीलांस</span> options to elevate your business.
          </h1>
          <form className="search" onSubmit={runSearch}>
            <div className="searchInput">
              <img className="rawIcon" src="/img/search.png" alt="" width={16} height={16} />
              <input
                type="text"
                placeholder='Try "Interior Designing"'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="popular">
            <span>Trending:</span>
            {trending.map((t) => (
              <button key={t.q} type="button" onClick={() => navigate(`/gigs?q=${encodeURIComponent(t.q)}`)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="right">
          <img className="photu" src={photu} alt="A BharatWorks freelancer" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
