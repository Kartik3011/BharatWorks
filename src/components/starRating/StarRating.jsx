import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "./StarRating.scss";

function StarRating({ rating = 0, count, size = 14 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span className="starRating">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f${i}`} size={size} />
      ))}
      {hasHalf && <FaStarHalfAlt size={size} />}
      {Array.from({ length: Math.max(empty, 0) }).map((_, i) => (
        <FaRegStar key={`e${i}`} size={size} />
      ))}
      <span className="value">{rating.toFixed(1)}</span>
      {count != null && <span className="count">({count})</span>}
    </span>
  );
}

export default StarRating;
