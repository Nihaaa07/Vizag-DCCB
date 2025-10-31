import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="animated-bg"></div>

      <motion.div
        className="aboutus-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="aboutus-title">About Us</h1>

        <div className="aboutus-card glass-card">
          <h2>GST Number:</h2>
          <p>37AACAT0262C1ZW</p>
        </div>

        <div className="aboutus-card glass-card">
          <h2>Functions</h2>
          <p>
            As an Apex Bank, DCCB acts as a balancing center for resources of
            the Cooperatives in the State and also acts as an investment agency
            for DCCBs. It channels funds from RBI/NABARD/Government to farmers
            through DCCBs/PACS, assists in managerial capacity building, and
            promotes technology upgradation and training for sustainable growth
            of Cooperative Credit Structures.
          </p>
        </div>

        <div className="aboutus-card glass-card">
          <h2>Services</h2>
          <p>
            The Bank operates on a Core Banking Solution (CBS) platform since
            2002, offering deposits, retail loans (Gold, Personal, Vehicle,
            Education, Housing, SME, SHG, etc.), remittance services (RTGS,
            NEFT, IMPS, UPI), DBT, and mobile banking. It also provides
            refinance for agricultural and allied activities, institutional
            credit, and round-the-clock ATM and mobile ATM services.
          </p>
        </div>

        <div className="aboutus-card glass-card">
          <h2>Branch Network</h2>
          <p>
            To emerge as the best Cooperative Enterprise in the State, working
            on sound business and cooperative principles for sustainable and
            equitable growth of member Cooperative Credit Institutions and in
            fostering rural prosperity.
          </p>
        </div>

        <div className="aboutus-card glass-card">
          <h2>Mission Statement</h2>
          <p>
            DCCB is committed to promoting sustainable and equitable agriculture
            and rural development through affordable credit, customer-friendly
            services, a dynamic workforce, sound governance, and transparent
            decision-making for securing rural prosperity in Andhra Pradesh.
          </p>
        </div>

        <div className="aboutus-card glass-card">
          <h2>DCCB GST Number:</h2>
          <p>37AACAT0262C1ZW</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
