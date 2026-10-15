import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { categoryMap, formatINR, reviewSeed } from "../../data";
import Avatar from "../../components/avatar/Avatar";
import StarRating from "../../components/starRating/StarRating";
import GigCard from "../../components/gigCard/GigCard";
import "./Gig.scss";

function Gig() {
  const { id } = useParams();
  const { getGig, gigs, startConversation } = useData();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [votes, setVotes] = useState({});

  const gig = getGig(id);

  if (!gig) {
    return (
      <div className="gig">
        <div className="container notFoundBox">
          <h1>Gig not found</h1>
          <p>This gig may have been removed by its owner.</p>
          <Link to="/gigs" className="btn btn-gold">
            Browse other gigs
          </Link>
        </div>
      </div>
    );
  }

  const category = categoryMap[gig.category];
  const Icon = (category && FiIcons[category.icon]) || FiIcons.FiGrid;
  const related = gigs.filter((g) => g.category === gig.category && g.id !== gig.id).slice(0, 3);

  const contactSeller = () => {
    if (!currentUser) {
      navigate(`/login?next=/gig/${gig.id}`);
      return;
    }
    const convoId = startConversation(gig.seller);
    navigate(`/message/${convoId}`);
  };

  const vote = (reviewId, type) => {
    setVotes((prev) => {
      const current = prev[reviewId]?.voted || null;
      const next = current === type ? null : type;
      return { ...prev, [reviewId]: { voted: next } };
    });
  };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            <Link to="/">Home</Link> / <Link to={`/gigs?cat=${gig.category}`}>{category?.title}</Link>
          </span>
          <h1>{gig.title}</h1>
          <div className="user">
            <Avatar name={gig.seller} size={32} />
            <span>{gig.seller}</span>
            <StarRating rating={gig.rating} count={gig.reviewsCount} />
          </div>

          <div className="cover" style={{ background: `linear-gradient(135deg, #2a2419, ${category ? "#c8962c" : "#666"})` }}>
            <Icon size={64} />
          </div>

          <h2>About This Gig</h2>
          <p>{gig.description}</p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <Avatar name={gig.seller} size={80} />
              <div className="info">
                <span>{gig.seller}</span>
                <StarRating rating={gig.rating} count={gig.reviewsCount} />
                <button className="btn btn-outline btn-sm" onClick={contactSeller}>
                  Contact Me
                </button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">
                    <FiMapPin size={13} /> {gig.city}
                  </span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div>
                <div className="item">
                  <span className="title">Delivery time</span>
                  <span className="desc">{gig.deliveryDays} day(s)</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, Hindi</span>
                </div>
              </div>
              <hr />
              <p>
                I'm {gig.seller.split(" ")[0]}, based in {gig.city}. I focus on {category?.title.toLowerCase()}{" "}
                work and pride myself on clear communication from brief to delivery.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            {reviewSeed.map((r) => {
              const baseUp = Math.round(r.rating * 2);
              const voted = votes[r.id]?.voted || null;
              const up = baseUp + (voted === "up" ? 1 : 0);
              const down = voted === "down" ? 1 : 0;
              return (
                <React.Fragment key={r.id}>
                  <div className="item">
                    <div className="user">
                      <Avatar name={r.name} size={44} />
                      <div className="info">
                        <span>{r.name}</span>
                        <div className="country">
                          <FiMapPin size={13} />
                          <span>{r.location}</span>
                        </div>
                      </div>
                    </div>
                    <StarRating rating={r.rating} />
                    <p>{r.text}</p>
                    <div className="helpful">
                      <span>Was this helpful?</span>
                      <button
                        type="button"
                        className={voted === "up" ? "voteBtn active" : "voteBtn"}
                        onClick={() => vote(r.id, "up")}
                      >
                        <img className="rawIcon" src="/img/like.png" alt="" width={14} height={14} />
                        {up}
                      </button>
                      <button
                        type="button"
                        className={voted === "down" ? "voteBtn active" : "voteBtn"}
                        onClick={() => vote(r.id, "down")}
                      >
                        <img className="rawIcon" src="/img/dislike.png" alt="" width={14} height={14} />
                        {down}
                      </button>
                    </div>
                  </div>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>Starting price</h3>
            <h2>{formatINR(gig.price)}</h2>
          </div>
          <p>{gig.title}</p>
          <div className="details">
            <div className="item">
              <img className="rawIcon" src="/img/clock.png" alt="" width={16} height={16} />
              <span>{gig.deliveryDays}-day delivery</span>
            </div>
          </div>
          <div className="features">
            {gig.features?.map((f) => (
              <div className="item" key={f}>
                <img src="/img/greencheck.png" alt="" width={14} height={14} />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-gold btn-block" onClick={contactSeller}>
            Continue
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related">
          <div className="container">
            <h2>More in {category?.title}</h2>
            <div className="row">
              {related.map((g) => (
                <GigCard key={g.id} gig={g} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
