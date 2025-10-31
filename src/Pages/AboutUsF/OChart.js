import React from "react";
import "./OChart.css";
import { motion } from "framer-motion";

const OChart = () => {
  return (
    <div className="ochart-section">
      <div className="ochart-bg"></div>

      <motion.h1
        className="ochart-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Organisation Chart
      </motion.h1>

      <motion.div
        className="chart-container glass-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="chart-box ceo">Chief Executive Officer</div>

        <div className="chart-row">
          <div className="chart-box gm">General Manager-1</div>
          <div className="chart-box gm">General Manager-2</div>
        </div>

        <div className="chart-row">
          <div className="chart-box dgm">Deputy General Manager (Loans)</div>
          <div className="chart-box dgm">Deputy General Manager (Development)</div>
          <div className="chart-box dgm">Deputy General Manager (Banking & IT)</div>
        </div>
      </motion.div>
    </div>
  );
};

export default OChart;
