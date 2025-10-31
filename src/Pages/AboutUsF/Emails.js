import React from "react";
import "./Emails.css";
import { motion } from "framer-motion";
import emailBg from "../../Assets/building.jpg";

const emails = [
  { branch: "Central Office", email: "ceo_vsp@apcob.org" },
  { branch: "Ankapalli", email: "br_akp@vizagdccb.org.in" },
  { branch: "Bheemili", email: "br_bml@vizagdccb.org.in" },
  { branch: "Chodavaram", email: "br_cdm@vizagdccb.org.in" },
  { branch: "Devarapalli", email: "br_devrp@vizagdccb.org.in" },
  { branch: "Dwarakanagar", email: "br_dwk@vizagdccb.org.in" },
  { branch: "Gajuwaka", email: "br_gwk@vizagdccb.org.in" },
  { branch: "Gandhiplace", email: "br_gdp@vizagdccb.org.in" },
  { branch: "Gopalapatnam", email: "br_gpt@vizagdccb.org.in" },
  { branch: "K Kotapadu", email: "br_kkp@vizagdccb.org.in" },
  { branch: "Kancharapalem", email: "br_kcp@vizagdccb.org.in" },
  { branch: "Kotaurtla", email: "br_kut@vizagdccb.org.in" },
  { branch: "MVP Colony", email: "br_mvp@vizagdccb.org.in" },
  { branch: "Madhurawada", email: "br_mwd@vizagdccb.org.in" },
  { branch: "Madugula", email: "br_mdl@vizagdccb.org.in" },
  { branch: "Maharani Peta", email: "br_mrpt@vizagdccb.org.in" },
  { branch: "Marripalem", email: "br_mrpm@vizagdccb.org.in" },
  { branch: "Narsipatnam", email: "br_nrpm@vizagdccb.org.in" },
  { branch: "Paderu", email: "br_pdr@vizagdccb.org.in" },
  { branch: "Payakarapeta", email: "br_prp@vizagdccb.org.in" },
  { branch: "Pendurthy", email: "br_pnd@vizagdccb.org.in" },
  { branch: "Railway New Colony", email: "br_rnc@vizagdccb.org.in" },
  { branch: "Ravikamatham", email: "br_rvkm@vizagdccb.org.in" },
  { branch: "Seethammadhara", email: "br_sdr@vizagdccb.org.in" },
  { branch: "Sriharipuram", email: "br_srprm@vizagdccb.org.in" },
  { branch: "Steel City", email: "br_stc@vizagdccb.org.in" },
  { branch: "Visakhapatnam", email: "br_vspmain@vizagdccb.org.in" },
  { branch: "Visalakshinagar", email: "br_vln@vizagdccb.org.in" },
  { branch: "Adduroad", email: "br_adr@vizagdccb.org.in" },
  { branch: "Yellamanchili", email: "br_ylm@vizagdccb.org.in" },
  { branch: "Atchutapuram", email: "br_atc@vizagdccb.org.in" },
  { branch: "Padmanabham", email: "br_pdm@vizagdccb.org.in" },
];

const Emails = () => {
  return (
    <section
      className="emails-section"
      style={{ backgroundImage: `url(${emailBg})` }}
      id="emails"
    >
      <div className="emails-overlay">
        <div className="emails-content">
          <motion.h2
            className="emails-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            BRANCH EMAIL IDs
          </motion.h2>

          <div className="emails-grid">
            {emails.map((item, index) => (
              <motion.div
                className="emails-card"
                key={index}
                whileHover={{ scale: 1.03 }}
              >
                <h3>
                  {index + 1}. {item.branch}
                </h3>
                <p>{item.email}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emails;