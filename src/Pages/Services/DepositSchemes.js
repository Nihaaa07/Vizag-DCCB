import React from "react";
import "./DepositSchemes.css";
import { motion } from "framer-motion";

const DepositSchemes = () => {
  return (
    <section className="deposit-section">
      <motion.h1
        className="deposit-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Deposit Schemes
      </motion.h1>

      <motion.p
        className="deposit-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The following Rates of Interest on Term Deposits shall come into force with effect from <b>01.08.2025</b>
      </motion.p>

      <motion.div
        className="deposit-table-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <table className="deposit-table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Period of Deposit</th>
              <th>General</th>
              <th>Senior Citizens</th>
              <th>Other Cooperative Institutions/Banks</th>
              <th>PACS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>15 Days to 45 Days</td><td>4%</td><td>4%</td><td>4%</td><td>4%</td></tr>
            <tr><td>2</td><td>46 Days to 90 Days</td><td>4.75%</td><td>4.75%</td><td>4.75%</td><td>4.75%</td></tr>
            <tr><td>3</td><td>91 Days to 180 Days</td><td>5.50%</td><td>6%</td><td>5.50%</td><td>5.50%</td></tr>
            <tr><td>4</td><td>181 Days to below 1 year</td><td>5.75%</td><td>6.25%</td><td>5.75%</td><td>5.75%</td></tr>
            <tr><td>5</td><td>1 Year Exact</td><td>7.4%</td><td>7.9%</td><td>7.4%</td><td>7.9%</td></tr>
            <tr><td>6</td><td>Above 1 Year</td><td>6.75%</td><td>7.25%</td><td>6.75%</td><td>7.25%</td></tr>
            <tr><td>7</td><td>Special Deposit (1-3 Years)</td><td colSpan="4">7.90% (for retired employees)</td></tr>
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default DepositSchemes;
