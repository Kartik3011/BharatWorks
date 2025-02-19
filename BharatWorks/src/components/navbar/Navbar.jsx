import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"; 
import text from "../../assets/logoo.png";
import proff from "../../assets/prof.png";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

   useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []); 

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Profile",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text"></span>
          </Link>
          <span className="dot"></span> 
          <Link className="link" to="/">
           <img className="logo"
                src={text}
                alt=""
              /></Link>
        </div>
        <div className="links">
          <span>Look for Jobs</span> 
          <span>About us</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src={proff}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Jobs in my Area
                    </Link>
                    <Link className="link" to="/add">
                    View my Application
                    </Link>
                  </>
                )}
                
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (        //helps in dissapearing navbar categories menu
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
            Digital Marketing & SEO
            </Link>
            <Link className="link menuLink" to="/">
            Video Editing
            </Link>
            <Link className="link menuLink" to="/">
              Photography
            </Link>
            <Link className="link menuLink" to="/">
              Technician
            </Link>
            <Link className="link menuLink" to="/">
              Teaching
            </Link>
            <Link className="link menuLink" to="/">
            Travel Planning & Booking
            </Link>
            <Link className="link menuLink" to="/">
            Home Improvement & Interior Design
            </Link>
            <Link className="link menuLink" to="/">
            Business
            </Link>
            <Link className="link menuLink" to="/">
            IT Services
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
