import React, { useEffect } from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  // 🟢 Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="services-section">
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="services-title">Our Services</h1>
        <p className="services-description">
          The loan portfolio of DCCB covers Crop Loans, Medium Term Loans, and
          Long Term Loans for Agricultural purposes. Substantial support is being
          extended to Government-sponsored District Rural Development Agency
          projects through IRDP Loans and also to Cooperative Sugar Factories,
          Spinning Mills, Weavers Societies, Employees Cooperative Credit
          Societies, and other Societies.
          <br />
          <br />
          Current Accounts with cheque book facilities are offered by the Bank
          to its corporate and business clients. Clean and secured overdraft
          facilities are also provided on these accounts.
          <br />
          <br />
          DCCB also extends finance to many Apex Cooperative Institutions in the
          State like APCO, MARKFED, and GCC. The Bank provides comprehensive
          banking facilities through attractive deposit schemes and diverse loan
          options for its urban and rural clientele.
        </p>

        <motion.div
          className="services-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="service-section">
            <h2>Loan Applications</h2>
            <ul>
              <li>Two Wheeler Loan Application</li>
              <li>Car Loan Application</li>
              <li>Education Loan Application</li>
              <li>Housing Loan Application</li>
              <li>REML Application</li>
              <li>SME Application</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>Internet Banking</h2>
            <ul>
              <li>Internet Banking User Manual</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
