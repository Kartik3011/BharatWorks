import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import { categoryMap, colorForName, formatINR } from "../../data";
import Avatar from "../avatar/Avatar";
import StarRating from "../starRating/StarRating";
import "./GigCard.scss";

const GigCard = ({ gig }) => {
  const [saved, setSaved] = useState(false);
  const category = categoryMap[gig.category];
  const Icon = (category && FiIcons[category.icon]) || FiIcons.FiGrid;

  return (
    <Link to={`/gig/${gig.id}`} className="gigCard">
      <div className="cover" style={{ background: coverGradient(gig.category) }}>
        {gig.rating >= 4.8 && (
          <span className="topRated">
            <img src="/img/star.png" alt="" width={12} height={12} />
            Top Rated
          </span>
        )}
        <Icon size={40} />
      </div>
      <div className="info">
        <div className="user">
          <Avatar name={gig.seller} size={26} />
          <span>{gig.seller}</span>
        </div>
        <p>{gig.title}</p>
        <StarRating rating={gig.rating} count={gig.reviewsCount} />
      </div>
      <hr />
      <div className="detail">
        <button
          type="button"
          className={saved ? "heart saved" : "heart"}
          onClick={(e) => {
            e.preventDefault();
            setSaved((v) => !v);
          }}
          aria-label={saved ? "Remove from saved" : "Save gig"}
        >
          <img className="heartIcon" src="/img/heart.png" alt="" width={17} height={17} />
        </button>
        <div className="price">
          <span>
            <img className="rawIcon" src="/img/coin.png" alt="" width={11} height={11} /> STARTING AT
          </span>
          <h2>{formatINR(gig.price)}</h2>
        </div>
      </div>
    </Link>
  );
};

function coverGradient(categoryId) {
  const base = colorForName(categoryId);
  return `linear-gradient(135deg, ${base} 0%, #17140f 130%)`;
}

export default GigCard;
