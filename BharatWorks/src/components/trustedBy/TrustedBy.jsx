import React from "react";
import "./TrustedBy.scss";
import photu from "../../assets/escrow.png";
import photuu from "../../assets/escr.png";
import photuuu from "../../assets/upi.png";


const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Payment Partner:</span>
       
     <img className="payment" src={photu} alt="" />
     <img className="payment" src={photuu} alt="" />
     <img className="payment1" src={photuuu} alt="" />
   
      </div>
    </div>
  );
};

export default TrustedBy;
