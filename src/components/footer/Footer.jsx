import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Digital Marketing & SEO</span>
            <span>Video Editing</span>
            <span>Photography</span>
            <span>Technician</span>
            <span>Teaching</span>
            <span>Travel Planning & Booking</span>
            <span>Home Improvement & Interior Design</span>
            <span>Business</span>
           
            <span>IT Services</span>
            
          </div>
          <div className="item">
            <h2>About</h2>
        
           
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
           
           
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on BharaWorks</span>
            <span>Buying on BharatWorks</span>
          </div>
         <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>BharatWorks Community hub</span>
            <span>BharatWorks Forum</span>
            <span>BharatWorks Events</span>
            
          
           
           
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            
          </div> 
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
          
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
            
              <img src="/img/linkedin.png" alt="" />
            
            
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
             
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
