import React, { useState } from "react";
import "./LoanSchemes.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const loanCategories = [
  {
    title: "Crop & Agricultural Loans",
    items: [
      "Crop Loans (ST-SAO)",
      "Cash Credit Loans to Farmers - DCCB to PACS",
      "Cash Credit Loans to Farmers - PACS to Farmers",
      "ST-Others PACS",
      "ST-Others Individuals",
    ],
  },
  {
    title: "Gold Loans",
    items: [
      "Other Gold Loans - Upto Rs.2.00 Lakhs",
      "Other Gold Loans - Above Rs.2.00 Lakhs",
      "Express Gold Loans upto Rs.2.00 Lakhs",
      "Gold Loan Cash Credit Indls",
      "Cash Credit to Societies Gold Loans",
    ],
  },
  {
    title: "Long Term & Housing Loans",
    items: [
      "LT Loans Direct (Ultimate Borrower)",
      "LT Loans DCCB to PACS",
      "Housing Loans to Individuals (Construction/Purchase)",
      "House Site Loans to Individuals",
      "Real Estate Mortgage Loans (Rural)",
      "Real Estate Mortgage Loans (Urban)",
    ],
  },
  {
    title: "Business & Personal Loans",
    items: [
      "Personal Loans - Salary Account (Our Bank)",
      "Personal Loans - Salary Account (Other Bank)",
      "Swayam Krushi Loans (Small Business People)",
      "Cash Credit Indls",
      "PM Swanidhi",
      "SME Loans",
      "Custom Hiring Centre (CHC)",
    ],
  },
  {
    title: "Self Help & Joint Liability Groups",
    items: [
      "Loans to Self Help Groups upto Rs.3.00 Lakhs",
      "Loans to Self Help Groups above Rs.3.00 Lakhs",
      "Loans to Joint Liability Groups (Agriculture)",
      "Loans to Joint Liability Groups (Non Agriculture)",
    ],
  },
  {
    title: "Special Schemes",
    items: [
      "Fish Andhra Scheme",
      "Fish Andhra Scheme (Repeat)",
    ],
  },
];

const LoanSchemes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="loan-section">
      <motion.h1
        className="loan-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Loan Schemes
      </motion.h1>

      <motion.p
        className="loan-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore our wide range of agricultural, gold, personal, and business loan options designed to meet the diverse needs of individuals and societies.
      </motion.p>

      <div className="loan-cards">
        {loanCategories.map((category, index) => (
          <motion.div
            key={index}
            className="loan-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="loan-header" onClick={() => toggleIndex(index)}>
              <h3>{category.title}</h3>
              <ChevronDown
                className={`loan-icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.ul
                  className="loan-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoanSchemes;
