import React from "react";
import "./Featured.scss";
import photu from "../../manset/man1.png";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
           

          <h1>Explore excellent 
          
          
<span> फ्रीलांस </span> 

options to elevate your business.
            
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Interior Designing"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Trending:</span>
            <button>Marketing</button>
            <button>SEO</button>
            <button>Technician</button>
            <button>AI Recommendations</button>
          </div>
        </div>
        <div className="right">
          <img class="photu" src={photu} alt="12" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
