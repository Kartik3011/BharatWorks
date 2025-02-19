import React from "react"
import "./Login.scss"
import text from "../../assets/logoo.png";

function Login() {
  return (
    
    <div className="wrapper">
      <div className="container main">
        <div className="row">
       
          <div className="col-md-6 side-image">
          <img className="img" src={text} alt="Logo"/>
          </div>

         
          <div className="col-md-6 right">
            <div className="input-box">

              <header>Log In</header>

           
              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  id="email"
                  required
                  autoComplete="off"
                />
                <label htmlFor="email">Enter your UserName</label>
              </div>

            
              <div className="input-field">
                <input
                  type="password"
                  className="input"
                  id="pass"
                  required
                />
                <label htmlFor="pass">Password</label>
              </div>

         
              <div className="input-field">
                <input type="submit" className="submit btn btn-primary" value="Sign In" />
              </div>

           
              <div className="signin">
                <span>
                  Don't have an account? <a href="#">Register here</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Login