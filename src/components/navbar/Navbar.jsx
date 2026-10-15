import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

// External Streamlit app (not part of this site's router), so it's a plain
// <a> with target="_blank" rather than a React Router <Link>.
const RECOMMENDER_URL = "https://recommendation-system-8h8gpgyfvdjvem3xqsarfi.streamlit.app/";
import logo from "../../assets/logoo.png";
import { categories } from "../../data";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../avatar/Avatar";
import "./Navbar.scss";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const profileRef = useRef(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const solid = scrolled || pathname !== "/" || mobileOpen;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={solid ? "navbar active" : "navbar"}>
      <div className="container bar">
        <div className="left">
          <button
            className="hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
          <Link className="link" to="/">
            <img className="logoImg" src={logo} alt="BharatWorks" />
          </Link>
        </div>

        <nav className="links desktopOnly">
          <Link className="link" to="/gigs">
            Browse Jobs
          </Link>
          <Link className="link" to="/info/about">
            About us
          </Link>
          <a className="link" href={RECOMMENDER_URL} target="_blank" rel="noopener noreferrer">
            Recommendations <FiExternalLink size={13} />
          </a>
          {!currentUser?.isSeller && (
            <Link className="link" to="/register">
              Become a Seller
            </Link>
          )}
        </nav>

        <div className="right">
          {currentUser && (
            <Link className="iconLink desktopOnly" to="/messages" aria-label="Messages">
              <img className="rawIcon" src="/img/message.png" alt="" width={20} height={20} />
            </Link>
          )}
          {currentUser?.isSeller && (
            <Link className="btn btn-gold btn-sm desktopOnly" to="/add">
              Post a Job
            </Link>
          )}
          {currentUser ? (
            <div className="user" ref={profileRef}>
              <button className="userTrigger" onClick={() => setProfileOpen((v) => !v)}>
                <Avatar name={currentUser.username} size={32} />
                <span className="desktopOnly">{currentUser.username}</span>
                <img className="rawIcon desktopOnly" src="/img/down.png" alt="" width={11} height={11} />
              </button>
              {profileOpen && (
                <div className="options">
                  <span className="roleBadge">{currentUser.isSeller ? "Freelancer" : "Client"}</span>
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        My Jobs
                      </Link>
                      <Link className="link" to="/add">
                        Post a Job
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <button className="link logoutBtn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link className="link desktopOnly" to="/login">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button className="btn btn-outline btn-sm">Join</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {solid && (
        <>
          <hr />
          <div className="container menu desktopOnly">
            {categories.map((cat) => (
              <Link className="link menuLink" to={`/gigs?cat=${cat.id}`} key={cat.id}>
                {cat.title}
              </Link>
            ))}
          </div>
          <hr className="desktopOnly" />
        </>
      )}

      {mobileOpen && (
        <div className="mobileMenu">
          <Link className="link" to="/gigs">
            Browse Jobs
          </Link>
          <Link className="link" to="/info/about">
            About us
          </Link>
          <a className="link" href={RECOMMENDER_URL} target="_blank" rel="noopener noreferrer">
            Recommendations <FiExternalLink size={13} />
          </a>
          {currentUser ? (
            <>
              <Link className="link" to="/messages">
                Messages
              </Link>
              <Link className="link" to="/orders">
                Orders
              </Link>
              {currentUser.isSeller && (
                <>
                  <Link className="link" to="/mygigs">
                    My Jobs
                  </Link>
                  <Link className="link" to="/add">
                    Post a Job
                  </Link>
                </>
              )}
              <button className="link logoutBtn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                Sign in
              </Link>
              <Link className="link" to="/register">
                Join
              </Link>
            </>
          )}
          <span className="mobileSectionTitle">Categories</span>
          {categories.map((cat) => (
            <Link className="link" to={`/gigs?cat=${cat.id}`} key={cat.id}>
              {cat.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
