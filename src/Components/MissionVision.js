import React from "react";
import "../Styles/MissionVision.css";

const MissionVision = () => {
  return (
    <section className="missionvision-section" id="missionvision">
      <div className="missionvision-title">
        <h2>Our Vision & Mission</h2>
      </div>

      <div className="missionvision-container">
        {/* Vision Circle */}
        <div className="circle-card vision">
          <div className="circle-border"></div>
          <div className="circle-content">
            <h3>Vision</h3>
            <p>
              To emerge as the best Cooperative Enterprise in the State,
              working on sound business and cooperative principles for
              sustainable and equitable growth of member Cooperative Credit
              Institutions and in fostering rural prosperity.
            </p>
          </div>
        </div>

        {/* Mission Circle */}
        <div className="circle-card mission">
          <div className="circle-border"></div>
          <div className="circle-content">
            <h3>Mission</h3>
            <p>
              Offering best quality and customer friendly banking services with
              State-of-the-Art Banking Technology; Building a dynamic workforce
              for Cooperative Credit Structure through recruiting, training and
              deploying qualified tech-savvy employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
