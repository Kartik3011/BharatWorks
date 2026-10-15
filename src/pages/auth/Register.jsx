import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import photu from "../../assets/tech.png";
import { useAuth } from "../../context/AuthContext";
import "./Auth.scss";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("Fill in every field to create your account.");
      return;
    }
    login(username.trim(), isSeller);
    navigate("/");
  };

  return (
    <div className="authWrapper">
      <div className="authMain">
        <div className="side-image">
          <img className="photo" src={photu} alt="A BharatWorks technician at work" />
        </div>

        <div className="authRight">
          <form className="input-box" onSubmit={submit}>
            <header>Create Account</header>
            <p className="demoNote">
              Demo project — this creates a local account only, stored in your browser.
            </p>

            {error && <div className="form-error">{error}</div>}

            <div className="input-field">
              <input
                type="text"
                className="input"
                id="regUsername"
                required
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="regUsername">Username</label>
            </div>

            <div className="input-field">
              <input
                type="email"
                className="input"
                id="regEmail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="regEmail">Email</label>
            </div>

            <div className="input-field">
              <input
                type="password"
                className="input"
                id="regPass"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="regPass">Password</label>
            </div>

            <div className="roleToggle">
              <button
                type="button"
                className={!isSeller ? "roleBtn active" : "roleBtn"}
                onClick={() => setIsSeller(false)}
              >
                I want to hire
              </button>
              <button
                type="button"
                className={isSeller ? "roleBtn active" : "roleBtn"}
                onClick={() => setIsSeller(true)}
              >
                I want to offer services
              </button>
            </div>

            <div className="input-field">
              <input type="submit" className="submit btn btn-primary" value="Create Account" />
            </div>

            <div className="signin">
              <span>
                Already have an account? <Link to="/login">Sign in</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
