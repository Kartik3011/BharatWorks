import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./RequireAuth.scss";

function Gate({ title, message, cta, to }) {
  return (
    <div className="requireAuth">
      <div className="container">
        <div className="box">
          <h2>{title}</h2>
          <p>{message}</p>
          <Link to={to} className="btn btn-gold">
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

function RequireAuth({ children, sellerOnly = false }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return (
      <Gate
        title="Sign in to continue"
        message="You'll need a BharatWorks account to view this page."
        cta="Sign in"
        to={`/login?next=${encodeURIComponent(location.pathname)}`}
      />
    );
  }

  if (sellerOnly && !currentUser.isSeller) {
    return (
      <Gate
        title="Switch to a freelancer account"
        message="This page is for freelancers offering services. You can switch roles any time from your profile menu."
        cta="Update my account"
        to="/register"
      />
    );
  }

  return children;
}

export default RequireAuth;
