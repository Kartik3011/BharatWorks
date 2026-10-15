import React from "react";
import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiCode,
  FiEdit3,
  FiFilm,
  FiImage,
  FiMusic,
  FiPenTool,
  FiShoppingBag,
  FiTrendingUp,
} from "react-icons/fi";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/CatCard";
import GigCard from "../../components/gigCard/GigCard";
import { categories } from "../../data";
import { useData } from "../../context/DataContext";
import vid from "../../assets/freelan.mp4";
import testimonialPhoto from "../../manset/mann.png";
import "./Home.scss";

const valueProps = [
  {
    title: "Quality options for every price range",
    body: "Explore high-caliber services offered at set project prices, not by the hour.",
  },
  {
    title: "Excellent outcomes achieved rapidly",
    body: "Connect with the perfect freelancer and start your project in minutes.",
  },
  {
    title: "Reliable payment protection on every transaction",
    body: "Transparent pricing from the start, with funds released only when you're satisfied.",
  },
  {
    title: "Round-the-clock assistance",
    body: "Enjoy high-quality services with set project fees, eliminating hourly charges.",
  },
];

const exploreItems = [
  { label: "Graphics & Design", icon: FiPenTool },
  { label: "Digital Marketing", icon: FiTrendingUp },
  { label: "Writing & Translation", icon: FiEdit3 },
  { label: "Video & Animation", icon: FiFilm },
  { label: "Music & Audio", icon: FiMusic },
  { label: "Programming & Tech", icon: FiCode },
  { label: "Business", icon: FiBriefcase },
  { label: "Lifestyle", icon: FiShoppingBag },
  { label: "Photography", icon: FiImage },
];

function Home() {
  const { gigs } = useData();
  const featuredGigs = [...gigs].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="home">
      <Featured />
      <TrustedBy />

      <div className="section categories">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Browse by category</span>
              <h2>Find the right professional in seconds</h2>
            </div>
            <Link to="/gigs" className="btn btn-outline btn-sm">
              View all gigs
            </Link>
          </div>
          <div className="catGrid">
            {categories.map((cat) => (
              <CatCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </div>

      <div className="featuredGigs">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Handpicked for you</span>
              <h2>Top-rated gigs right now</h2>
            </div>
          </div>
          <div className="gigsRow">
            {featuredGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="container">
          <img src={testimonialPhoto} alt="A BharatWorks client" />
          <blockquote>
            "I posted my first job on BharatWorks and had three strong proposals within a day. The whole
            experience — from browsing gigs to messaging freelancers — just felt effortless."
          </blockquote>
          <span className="name">Rohan Malhotra</span>
          <span className="role">Client, Delhi</span>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A universe of independent professionals within your reach.</h1>
            {valueProps.map((v) => (
              <React.Fragment key={v.title}>
                <div className="title">
                  <span className="check" />
                  {v.title}
                </div>
                <p>{v.body}</p>
              </React.Fragment>
            ))}
          </div>
          <div className="item">
            <video src={vid} controls playsInline />
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            {exploreItems.map(({ label, icon: Icon }) => (
              <div className="item" key={label}>
                <Icon size={30} />
                <div className="line"></div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
