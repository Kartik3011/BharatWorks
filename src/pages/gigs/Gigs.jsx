import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiSliders } from "react-icons/fi";
import GigCard from "../../components/gigCard/GigCard";
import { categories, categoryMap } from "../../data";
import { useData } from "../../context/DataContext";
import "./Gigs.scss";

const SORTS = {
  recommended: { label: "Recommended", fn: (a, b) => b.rating - a.rating },
  priceAsc: { label: "Price: Low to High", fn: (a, b) => a.price - b.price },
  priceDesc: { label: "Price: High to Low", fn: (a, b) => b.price - a.price },
  reviews: { label: "Most Reviewed", fn: (a, b) => b.reviewsCount - a.reviewsCount },
};

function Gigs() {
  const { gigs } = useData();
  const [params, setParams] = useSearchParams();
  const [sortOpen, setSortOpen] = useState(false);
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  const [priceRange, setPriceRange] = useState({ min: null, max: null });

  const q = params.get("q") || "";
  const cat = params.get("cat") || "";
  const sortKey = params.get("sort") in SORTS ? params.get("sort") : "recommended";

  const setCat = (id) => {
    const next = new URLSearchParams(params);
    if (id) next.set("cat", id);
    else next.delete("cat");
    setParams(next);
  };

  const setSort = (key) => {
    const next = new URLSearchParams(params);
    next.set("sort", key);
    setParams(next);
    setSortOpen(false);
  };

  const applyBudget = () => {
    setPriceRange({
      min: minInput ? Number(minInput) : null,
      max: maxInput ? Number(maxInput) : null,
    });
  };

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return gigs
      .filter((g) => (cat ? g.category === cat : true))
      .filter((g) =>
        term
          ? g.title.toLowerCase().includes(term) ||
            g.seller.toLowerCase().includes(term) ||
            categoryMap[g.category]?.title.toLowerCase().includes(term)
          : true
      )
      .filter((g) => (priceRange.min != null ? g.price >= priceRange.min : true))
      .filter((g) => (priceRange.max != null ? g.price <= priceRange.max : true))
      .sort(SORTS[sortKey].fn);
  }, [gigs, q, cat, priceRange, sortKey]);

  const clearAll = () => {
    setParams({});
    setMinInput("");
    setMaxInput("");
    setPriceRange({ min: null, max: null });
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/">Home</Link> / Gigs
        </span>
        <h1>{cat ? categoryMap[cat]?.title : "Developers, Designers & More"}</h1>
        <p>
          {q ? (
            <>
              Showing results for <strong>&ldquo;{q}&rdquo;</strong>
            </>
          ) : (
            "Explore the boundaries of art and technology with BharatWorks"
          )}
        </p>

        <div className="catChips">
          <button className={!cat ? "chip active" : "chip"} onClick={() => setCat("")}>
            All
          </button>
          {categories.map((c) => (
            <button key={c.id} className={cat === c.id ? "chip active" : "chip"} onClick={() => setCat(c.id)}>
              {c.title}
            </button>
          ))}
        </div>

        <div className="menu">
          <div className="left">
            <FiSliders />
            <span>Budget</span>
            <input
              type="number"
              placeholder="Min ₹"
              value={minInput}
              onChange={(e) => setMinInput(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max ₹"
              value={maxInput}
              onChange={(e) => setMaxInput(e.target.value)}
            />
            <button onClick={applyBudget}>Apply</button>
            {(priceRange.min != null || priceRange.max != null || cat || q) && (
              <button className="clear" onClick={clearAll}>
                Clear filters
              </button>
            )}
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType" onClick={() => setSortOpen((v) => !v)}>
              {SORTS[sortKey].label}
              <img className="rawIcon" src="/img/down.png" alt="" width={11} height={11} />
            </span>
            {sortOpen && (
              <div className="rightMenu">
                {Object.entries(SORTS).map(([key, s]) => (
                  <span key={key} onClick={() => setSort(key)}>
                    {s.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="cards">
            {filtered.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No gigs match your filters</h3>
            <p>Try a different category or widen your budget range.</p>
            <button className="btn btn-gold" onClick={clearAll}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gigs;
