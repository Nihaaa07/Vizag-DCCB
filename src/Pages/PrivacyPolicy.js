import React from "react";
import "./PrivacyPolicy.css";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>
      </div>

      <motion.div
        className="privacy-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p>
          <strong>The District Cooperative Central Bank Ltd., Visakhapatnam Mobile Banking Privacy Policy:</strong>
        </p>

        <p>
          During using this website or availing the products and services vide the online application forms and questionnaires, The District Cooperative Central Bank Ltd., Visakhapatnam may become privacy to the personal information of its Customers, including information that is of a confidential nature.
        </p>

        <p>
          The District Cooperative Central Bank Ltd., Visakhapatnam is strongly committed to protecting the privacy of its Customers and has taken all reasonable measures to protect the confidentiality of the Customer information and its transmission through the world-wide web and it shall not be held liable in any manner for disclosure of the confidential information in accordance with this Privacy Commitment or in terms of the agreements, if any, with the Customers or by reasons beyond its control.
        </p>

        <p>
          The Bank endeavours to safeguard and ensure the security of the information provided by the Customer. It uses 256-bit encryption, the maximum level permitted in India. The Customer is advised to maintain password confidentiality and create complex passwords using a combination of letters, numbers, and special characters. 
        </p>

        <p>
          The Bank undertakes not to disclose the information provided by the Customers to any person, unless such action is necessary to:  
          (a) Conform to legal requirements,  
          (b) Protect and defend the Bank’s rights or property,  
          (c) Enforce product or service terms, or  
          (d) Protect the interests of the Bank, its members, or others.
        </p>

        <p>
          The Customer authorizes the Bank to exchange or share information with financial institutions, credit bureaus, or regulatory authorities as required by law or for verification and risk management purposes.
        </p>

        <p>
          The Bank assumes no responsibility for mistakes, omissions, or inaccuracies in the website content. It reserves the right to modify or correct any part of the content at any time. No portion of this website may be displayed or printed without prior written approval.
        </p>

        <p>
          The Bank limits the collection and use of Customer information to what is necessary to deliver better services. It may use and share the information for service provision, notifications, or communication with the Customers.
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
