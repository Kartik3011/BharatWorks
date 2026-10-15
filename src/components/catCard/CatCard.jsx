import React from "react";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import "./CatCard.scss";

function CatCard({ category }) {
  const Icon = FiIcons[category.icon] || FiIcons.FiGrid;

  return (
    <Link to={`/gigs?cat=${category.id}`} className="catCard">
      <span className="iconWrap">
        <Icon size={26} />
      </span>
      <span className="title">{category.title}</span>
    </Link>
  );
}

export default CatCard;
