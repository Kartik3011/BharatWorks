import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../assets/logoo.png";
import { useAuth } from "../../context/AuthContext";
import "./Auth.scss";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Enter a username and password to continue.");
      return;
    }
    login(username.trim(), isSeller);
    navigate(params.get("next") || "/");
  };

  return (
    <div className="authWrapper">
      <div className="authMain">
        <div className="side-image logoPanel">
          <span className="glow" aria-hidden="true" />
          <img className="brandLogo" src={logo} alt="BharatWorks" />
          <p className="tagline">India's trusted marketplace for freelancers &amp; local professionals</p>
        </div>

        <div className="authRight">
          <form className="input-box" onSubmit={submit}>
            <header>Log In</header>
            <p className="demoNote">
              Demo project — any username/password signs you in. No real account is created.
            </p>

            {error && <div className="form-error">{error}</div>}

            <div className="input-field">
              <input
                type="text"
                className="input"
                id="username"
                required
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="username">Username</label>
            </div>

            <div className="input-field">
              <input
                type="password"
                className="input"
                id="pass"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="pass">Password</label>
            </div>

            <div className="roleToggle">
              <button
                type="button"
                className={!isSeller ? "roleBtn active" : "roleBtn"}
                onClick={() => setIsSeller(false)}
              >
                I'm hiring
              </button>
              <button
                type="button"
                className={isSeller ? "roleBtn active" : "roleBtn"}
                onClick={() => setIsSeller(true)}
              >
                I'm freelancing
              </button>
            </div>

            <div className="input-field">
              <input type="submit" className="submit btn btn-primary" value="Sign In" />
            </div>

            <div className="signin">
              <span>
                Don't have an account? <Link to="/register">Register here</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
