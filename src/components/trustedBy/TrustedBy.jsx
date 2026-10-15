import React from "react";
import photu from "../../assets/escrow.png";
import photuu from "../../assets/escr.png";
import photuuu from "../../assets/upi.png";
import visa from "../../assets/visa.png";
import "./TrustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Payment partners:</span>
        <img className="payment" src={photu} alt="Escrow-protected payments" />
        <img className="payment" src={photuu} alt="Escrow.com" />
        <img className="payment1" src={photuuu} alt="UPI" />
        <img className="payment" src={visa} alt="Visa and Mastercard" />
        <span className="divider" aria-hidden="true" />
        <span className="guarantee">
          <img className="rawIcon" src="/img/recycle.png" alt="" width={15} height={15} />
          Free revisions on every order
        </span>
      </div>
    </div>
  );
};

export default TrustedBy;
