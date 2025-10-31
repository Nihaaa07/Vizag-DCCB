import React from "react";
import "../Styles/About.css";
import building from "../Assets/building.jpg";

const About = () => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${building})` }}
      id="about"
    >
      <div className="about-overlay">
        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>
          <h3 className="about-subtitle">
            Vizag District Co-operative Central Bank Ltd
          </h3>

          <p className="about-text">
            Vizag District Cooperative Central Bank Ltd provides a wide range of
            financial services including savings accounts, current accounts,
            deposits, safe deposit lockers, personal loans, home loans, car
            loans, two-wheeler loans, educational loans, debit cards, prepaid
            cards, forex, premier banking, and more.
          </p>

          <p className="about-text">
            The Bank extends its services to the agricultural sector by
            providing Crop Loans and Investment Credit such as Dairy, Sheep,
            Minor Irrigation, Tractors, Poultry, and Horticulture to farmers
            through PACS and directly from branches. Additionally, various
            customized loan products are available for farmer members through
            PACS and directly from bank branches under the ST Others scheme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
