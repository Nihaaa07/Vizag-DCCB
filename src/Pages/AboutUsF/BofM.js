import React from "react";
import "./BofM.css";
import { motion } from "framer-motion";

// ✅ Import images directly from src folder
import SriKonaTataRao from "../../Assets/AboutUs/SriKonaTataRao.jpeg";
import DVSVerma from "../../Assets/AboutUs/2.jpg";

const members = [
  { 
    name: "Sri Kona Tata Rao", 
    designation: "President", 
    image: SriKonaTataRao  // ✅ using imported variable
  },
  { 
    name: "Sri D.V.S. Verma", 
    designation: "Chief Executive Officer (CEO)", 
    image: DVSVerma  // ✅ using imported variable
  },
];

const BOfM = () => {
  return (
    <div className="board-section">
      <div className="board-bg"></div>

      <motion.h1
        className="board-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Board of Management
      </motion.h1>

      <div className="board-grid">
        {members.map((m, index) => (
          <motion.div
            key={index}
            className="board-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={m.image} alt={m.name} />
            <h2>{m.name}</h2>
            <p>{m.designation}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BOfM;
