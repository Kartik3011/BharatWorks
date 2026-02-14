import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/loginlogo.png";
function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

 const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };
  <div className="logo">

</div>
  
  return (
  
    <div className="login">
    <form onSubmit={handleSubmit}>
    
    <img src={logo} alt="hi" />
      <h1 >Login</h1>
      <label htmlFor="box">Username</label>
      <input
        name="username"
        type="text"
        placeholder="Enter your name here "
         onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit">Sign in </button>
      {error && error}
      <div className="forgot">
        <span>Don't have an account? <a href="http://localhost:5173/register">Register here</a></span>
        
        </div>
      
      </form>
     
      </div>
  );
}

export default Login