import React from "react";
import "./DCCBBranches.css";
import { motion } from "framer-motion";
import branchBg from "../../Assets/building.jpg";

const branches = [
  { branch: "Central Office", address: "Head Office, Door No: 58-14-57/2, YSR Sahakara Bhavan, Marripalem, VUDA Layout, Near PF Office, Visakhapatnam - 530009" },
  { branch: "Anakapalli", address: "Main Road, Anakapalli - 531001" },
  { branch: "Bheemili", address: "Bheemili, Visakhapatnam - 531163" },
  { branch: "Chodavaram", address: "Chodavaram - 531036" },
  { branch: "Devarapalli", address: "Devarapalli - 531030" },
  { branch: "Dwarakanagar", address: "Dwarakanagar, Visakhapatnam - 530016" },
  { branch: "Gajuwaka", address: "Gajuwaka, Visakhapatnam - 530026" },
  { branch: "Gandhiplace", address: "Gandhiplace, Visakhapatnam - 530020" },
  { branch: "Gopalapatnam", address: "Gopalapatnam, Visakhapatnam - 530027" },
  { branch: "K Kotapadu", address: "K Kotapadu - 531022" },
  { branch: "Kancharapalem", address: "Kancharapalem, Visakhapatnam - 530008" },
  { branch: "Kotaurtla", address: "Kotaurtla - 531085" },
  { branch: "MVP Colony", address: "MVP Colony, Visakhapatnam - 530017" },
  { branch: "Madhurawada", address: "Madhurawada, Visakhapatnam - 530041" },
  { branch: "Madugula", address: "Madugula - 531027" },
  { branch: "Maharani Peta", address: "Maharani Peta, Visakhapatnam - 530002" },
  { branch: "Marripalem", address: "Marripalem, Visakhapatnam - 530018" },
  { branch: "Narsipatnam", address: "Narsipatnam - 531116" },
  { branch: "Paderu", address: "Paderu - 531024" },
  { branch: "Payakarapeta", address: "Payakarapeta - 531126" },
  { branch: "Pendurthy", address: "Pendurthy, Visakhapatnam - 531173" },
  { branch: "Railway New Colony", address: "Railway New Colony, Visakhapatnam - 530016" },
  { branch: "Ravikamatham", address: "Ravikamatham - 531027" },
  { branch: "Seethammadhara", address: "Seethammadhara, Visakhapatnam - 530013" },
  { branch: "Sriharipuram", address: "Sriharipuram, Visakhapatnam - 530011" },
  { branch: "Steel City", address: "Steel City, Visakhapatnam - 530032" },
  { branch: "Visakhapatnam", address: "Visakhapatnam Main Branch - 530001" },
  { branch: "Visalakshinagar", address: "Visalakshinagar, Visakhapatnam - 530043" },
  { branch: "Adduroad", address: "Adduroad - 531030" },
  { branch: "Yellamanchili", address: "Yellamanchili - 531055" },
  { branch: "Atchutapuram", address: "Atchutapuram - 531011" },
  { branch: "Padmanabham", address: "Padmanabham - 531219" },
];

const DCCBBranches = () => {
  return (
    <section
      className="branches-section"
      style={{ backgroundImage: `url(${branchBg})` }}
      id="branches"
    >
      <div className="branches-overlay">
        <div className="branches-content">
          <motion.h2
            className="branches-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            DCCB BRANCH ADDRESSES
          </motion.h2>

          <div className="branches-grid">
            {branches.map((item, index) => (
              <motion.div
                className="branches-card"
                key={index}
                whileHover={{ scale: 1.03 }}
              >
                <h3>
                  {index + 1}. {item.branch}
                </h3>
                <p>{item.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DCCBBranches;
