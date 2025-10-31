import React from "react";
import "./Careers.css";
import careersImg from "../../Assets/careers.webp";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <section className="careers-section">
      <div className="careers-overlay"></div>

      <img src={careersImg} alt="Careers at DCCB" className="careers-bg" />

      <motion.div
        className="careers-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="careers-title">Join Our Team at DCCB</h1>
        <p className="careers-subtext">
          Build your future with innovation, integrity, and excellence.
        </p>
      </motion.div>
    </section>
  );
};

export default Careers;
