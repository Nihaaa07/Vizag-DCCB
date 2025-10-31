import React from "react";
import "./OtherServices.css";
import { motion } from "framer-motion";

const OtherServices = () => {
  return (
    <div className="other-section">
      <div className="other-bg"></div>

      <motion.h1
        className="other-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Other Services
      </motion.h1>
    </div>
  );
};

export default OtherServices;
