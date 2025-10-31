import React from "react";
import "./DCCBMndV.css";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaHandsHelping } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DCCBMndV = () => {
  return (
    <section className="split-section" aria-label="Vision and Mission">
      <div className="split-wave" />

      <div className="content-wrapper">
        <motion.h1
          className="mv-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Vision & Mission
        </motion.h1>

        <motion.div
          className="cards-stack"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Purpose */}
          <motion.article className="card purpose" variants={cardVariant}>
            <div className="icon-spot purpose-spot">
              <FaHandsHelping />
            </div>
            <div className="card-body">
              <h2>Purpose Statement</h2>
              <p>
                Socio-economic development of the farming community, rural artisans,
                and other weaker sections in the State through District Cooperative Credit Institutions.
              </p>
            </div>
          </motion.article>

          {/* Vision */}
          <motion.article className="card" variants={cardVariant}>
            <div className="icon-spot vision-spot">
              <FaEye />
            </div>
            <div className="card-body">
              <h2>Vision</h2>
              <p>
                To emerge as the best District Cooperative Enterprise in the State, working on sound business and
                cooperative principles for sustainable and equitable growth of member Cooperative Credit Institutions
                and in fostering rural prosperity.
              </p>
            </div>
          </motion.article>

          {/* Mission */}
          <motion.article className="card" variants={cardVariant}>
            <div className="icon-spot mission-spot">
              <FaBullseye />
            </div>
            <div className="card-body">
              <h2>Mission Statement</h2>
              <p className="mission-intro">
                DCCB is committed to promote sustainable and equitable agriculture and rural development through:
              </p>
              <ul className="mission-list">
                <li>
                  Extending timely and adequate credit at affordable cost to Small and Marginal Farmers, Agricultural
                  Labourers, Tenant Farmers, Artisans, Small Entrepreneurs and Other Weaker Sections through established CCS network;
                </li>
                <li>Offering best quality and customer friendly banking services with State-of-the-Art Banking Technology;</li>
                <li>Building a dynamic workforce for Coop. Credit Structure through recruiting, training and deploying qualified tech-savvy employees;</li>
                <li>
                  Ensuring profitability and viability of affiliated credit cooperatives in a sustainable manner with
                  responsible, accountable and member driven Cooperative Principles and Good Governance practices.
                </li>
              </ul>
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          className="tagline"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="tagline-deco" />
          <h3>మీ అభివృద్ధికి మా సహకారం</h3>
          <span className="tagline-deco" />
        </motion.div>
      </div>
    </section>
  );
};

export default DCCBMndV;
