import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="services-section">
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="services-title">Services</h1>
        <p className="services-description">
          The loan portfolio of DCCB covers Crop Loans, Medium Term Loans and Long Term Loans for Agricultural purposes. Substantial support is being extended to the Government-sponsored District Rural Development Agency projects through IRDP Loans and also to Cooperative Sugar Factories, Spinning Mills, Weavers Societies, Employees Cooperative Credit Societies and other Societies. Current Account with cheque book facility is offered by the Bank to its corporate and business clients. Clean and secured overdraft facility is also provided on the Current Account.
          <br /><br />
          DCCB is also extending finance to many Apex Cooperative institutions in the State like APCO, MARKFED, GCC etc. DCCB provides all types of banking facilities to its customers through attractive deposit schemes as also various types of loans for its urban clientele through its own branch network.
        </p>

        <motion.div
          className="services-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Loan Applications</h2>
          <ul>
            <li>Two Wheeler Application</li>
            <li>Car Loan Application</li>
            <li>Education Loan Application</li>
            <li>Housing Loan Application</li>
            <li>REML Application</li>
            <li>SME Application</li>
          </ul>

          <h2>Internet Banking</h2>
          <ul>
            <li>Internet Banking User Manual</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
