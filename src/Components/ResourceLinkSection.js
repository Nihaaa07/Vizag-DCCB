import React from "react";
import "../Styles/ResourceLinkSection.css";
import DICGC from "../Assets/DICGC.png";
import QR from "../Assets/QR.png";

const ResourceLinksSection = () => {
  const resources = [
    { name: "Reserve Bank Of India", link: "https://www.rbi.org.in/home.aspx" },
    { name: "NABARD", link: "https://www.nabard.org/EngDefault.aspx" },
    { name: "APCOB", link: "https://apcob.bank.in/" },
  ];

  return (
    // ✅ Added id here so navbar can scroll to this section
    <section id="resource-links-section" className="resource-links-section">
      <div className="gradient-overlay"></div>
      <div className="resource-container">
        {/* RESOURCE LINKS */}
        <div className="links-column">
          <h2>Resource Links</h2>
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-button"
            >
              {resource.name}
            </a>
          ))}
        </div>

        {/* DICGC Logo */}
        <div className="dicgc-column">
          <h2>DICGC</h2>
          <img src={DICGC} alt="DICGC Logo" className="dicgc-img" />
        </div>

        {/* QR Code */}
        <div className="qr-column">
          <h2>QR</h2>
          <img src={QR} alt="QR Code" className="qr-img" />
        </div>
      </div>
    </section>
  );
};

export default ResourceLinksSection;
