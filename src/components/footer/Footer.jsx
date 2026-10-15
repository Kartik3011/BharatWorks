import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data";
import "./Footer.scss";

const aboutLinks = [
  { label: "About us", to: "/info/about" },
  { label: "Privacy Policy", to: "/info/privacy" },
  { label: "Terms of Service", to: "/info/terms" },
  { label: "Contact Sales", to: "/info/contactSales" },
];

const supportLinks = [
  { label: "Help & Support", to: "/info/help" },
  { label: "Trust & Safety", to: "/info/trust" },
  { label: "Accessibility", to: "/info/accessibility", icon: "/img/accessibility.png" },
  { label: "Selling on BharatWorks", to: "/info/sellingGuide" },
  { label: "Buying on BharatWorks", to: "/info/buyingGuide" },
];

const communityLinks = [
  { label: "Customer Success Stories", to: "/info/stories" },
  { label: "BharatWorks Community Hub", to: "/info/community" },
  { label: "BharatWorks Forum", to: "/info/forum" },
  { label: "BharatWorks Events", to: "/info/events" },
  { label: "Invite a Friend", to: "/info/invite" },
  { label: "Become a Seller", to: "/register" },
];

const SOCIAL_LINKS = [
  { name: "Twitter", src: "/img/twitter.png" },
  { name: "Facebook", src: "/img/facebook.png" },
  { name: "LinkedIn", src: "/img/linkedin.png" },
  { name: "Instagram", src: "/img/instagram.png" },
  { name: "Pinterest", src: "/img/pinterest.png" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            {categories.map((cat) => (
              <Link key={cat.id} to={`/gigs?cat=${cat.id}`}>
                {cat.title}
              </Link>
            ))}
          </div>
          <div className="item">
            <h2>About</h2>
            {aboutLinks.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="item">
            <h2>Support</h2>
            {supportLinks.map((l) => (
              <Link key={l.to} to={l.to} className={l.icon ? "withIcon" : ""}>
                {l.icon && <img className="rawIcon" src={l.icon} alt="" width={13} height={13} />}
                {l.label}
              </Link>
            ))}
          </div>
          <div className="item">
            <h2>Community</h2>
            {communityLinks.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <span>© {new Date().getFullYear()} BharatWorks — demo project, not a live marketplace.</span>
          </div>
          <div className="right">
            <div className="social" aria-label="Social links (demo — not connected)">
              {SOCIAL_LINKS.map((s) => (
                <img key={s.name} src={s.src} alt={s.name} title={s.name} />
              ))}
            </div>
            <div className="lang">
              <img className="rawIcon" src="/img/language.png" alt="" width={14} height={14} />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
