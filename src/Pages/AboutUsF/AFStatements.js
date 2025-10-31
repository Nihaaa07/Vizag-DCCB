import React from "react";
import "./AFStatements.css";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const AFStatements = () => {
  return (
    <div className="fin-section">
      <div className="fin-bg"></div>

      <motion.h1
        className="fin-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Audited Financial Statements as on 31.03.2025
      </motion.h1>

      <motion.div
        className="fin-card"
        whileHover={{ scale: 1.05 }}
      >
        <FaFilePdf className="fin-icon" />
        <p className="fin-desc">
          Click the button below to view the Audit Report and Financials for the Year 2024–25.
        </p>
        <a
          href="/pdfs/Audit_Report_2024-25.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fin-btn"
        >
          Click Here
        </a>
      </motion.div>
    </div>
  );
};

export default AFStatements;
