import React from "react";
import "../Styles/CSAwareness.css";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaGift,
  FaUserLock,
  FaCreditCard,
  FaLink,
} from "react-icons/fa";

const CSAwareness = () => {
  const tips = [
    {
      icon: <FaShieldAlt />,
      text: "Do not share your bank account login ID, password, PIN or OTP with anyone.",
    },
    {
      icon: <FaMobileAlt />,
      text: "Do not download any unknown app on your phone/device.",
    },
    {
      icon: <FaGift />,
      text: "Never respond to messages offering/promising prize money, government aid and KYC updation.",
    },
    {
      icon: <FaCreditCard />,
      text: "Do not take help from strangers at the ATM. Always cover the ATM keypad while keying in the PIN.",
    },
    {
      icon: <FaUserLock />,
      text: "Do not give your ATM card to anyone for withdrawal of cash. Never write the PIN on your card.",
    },
    {
      icon: <FaLink />,
      text: "Always verify the authenticity of links before clicking — avoid logging in through links received via SMS, email, or social media.",
    },
  ];

  return (
    <section className="csawareness-section">
      <div className="csawareness-overlay"></div>
      <div className="csawareness-container">
        <h2 className="csawareness-title">Cyber Security Awareness</h2>

        <div className="csawareness-grid">
          {tips.map((tip, index) => (
            <div key={index} className="csawareness-tip">
              <div className="tip-icon">{tip.icon}</div>
              <p className="tip-text">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSAwareness;
