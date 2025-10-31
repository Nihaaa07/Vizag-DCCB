import React, { useState } from "react";
import "./Digital.css";
import { FaMobileAlt, FaKey } from "react-icons/fa";
import greenPinImg from "../Assets/greenpin.png";

const Digital = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <div className="digital-page">
      <h2 className="digital-title">Digital Banking Services</h2>

      <div className="digital-cards">
        {/* M-BANKING CARD */}
        <div
          className={`digital-card ${activeCard === "mbanking" ? "active" : ""}`}
          onClick={() => toggleCard("mbanking")}
        >
          <div className="card-header">
            <FaMobileAlt className="card-icon" />
            <h3>M-Banking</h3>
          </div>
          <p className="card-subtitle">Access your bank from anywhere</p>

          <div
            className={`card-content ${activeCard === "mbanking" ? "show" : ""}`}
          >
            <ul>
              <li>NEFT/RTGS/IMPS transactions (DCCB to other banks)</li>
              <li>DCCB to DCCB fund transfer</li>
              <li>Balance inquiry & Mini statement</li>
              <li>Email statement & Transaction history</li>
              <li>Cheque book request / stop / status</li>
              <li>Upcoming: BBPS, UPI, IMPS</li>
            </ul>
            <button className="download-btn">Download App</button>
            <p className="note">Available on Google Play</p>
          </div>
        </div>

        {/* GREEN PIN CARD */}
        <div
          className={`digital-card ${activeCard === "greenpin" ? "active" : ""}`}
          onClick={() => toggleCard("greenpin")}
        >
          <div className="card-header">
            <FaKey className="card-icon" />
            <h3>Green PIN</h3>
          </div>
          <p className="card-subtitle">Instant ATM PIN generation</p>

          <div
            className={`card-content ${activeCard === "greenpin" ? "show" : ""}`}
          >
            <p>
              DCCB Bank introduces instant Debit Card PIN generation at any DCCB
              ATM — quick, secure, and eco-friendly!
            </p>
            <h4>Steps to Generate Green PIN</h4>
            <img src={greenPinImg} alt="Green PIN process" className="greenpin-img" />
            <p className="note">
              <strong>Note:</strong> Your mobile number must be registered with
              the bank. For issues, contact your home branch or Customer Care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
