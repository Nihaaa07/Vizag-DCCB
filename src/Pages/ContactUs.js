import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactUs.css";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const branchEmails = [
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

  const officers = [
    { name: "President/Chairperson", email: "president.vsp@vizagdccb.org.in" },
    { name: "Chief Executive Officer", email: "ceo.vsp@vizagdccb.org.in" },
    { name: "General Manager - 1", email: "gm.vsp@vizagdccb.org.in" },
    { name: "General Manager - 2", email: "gm2_vsp@vizagdccb.org.in" },
    { name: "DGM (Banking & IT)", email: "dgmbkg&it@vizagdccb.org.in" },
    { name: "DGM (Development & Premises)", email: "dgmdev&prem@vizagdccb.org.in" },
    { name: "DGM (Loans & Advances)", email: "dgmln&adv@vizagdccb.org.in" },
    { name: "AGM (Banking & IT)", email: "agmbkg&it@vizagdccb.org.in" },
    { name: "AGM (Development & Premises)", email: "agmdev&prem@vizagdccb.org.in" },
    { name: "AGM (Establishment & Vigilance)", email: "agmestt&vigl@vizagdccb.org.in" },
    { name: "AGM (Loans & RMC)", email: "agmln&rmc@vizagdccb.org.in" },
    { name: "Chief Manager (IT)", email: "cmit@vizagdccb.org.in" },
    { name: "Chief Manager (Loans and Advances)", email: "cmln&adv@vizagdccb.org.in" },
    { name: "Chief Manager (Recovery Monitoring Cell)", email: "cmrmc@vizagdccb.org.in" },
    { name: "Chief Manager (Establishment & Vigilance)", email: "cmestt&vigl@vizagdccb.org.in" },
    { name: "Establishment Section", email: "sec_estt@vizagdccb.org.in" },
    { name: "Development Section", email: "sec_dev@vizagdccb.org.in" },
    { name: "DoS Section", email: "sec_dos@vizagdccb.org.in" },
    { name: "Reconciliation Section", email: "sec_recon@vizagdccb.org.in" },
    { name: "Banking Section", email: "sec_bkg@vizagdccb.org.in" },
    { name: "Clearing Section", email: "sec_clg@vizagdccb.org.in" },
    { name: "IT Section", email: "sec_it@vizagdccb.org.in" },
    { name: "Loans Section", email: "sec_loans@vizagdccb.org.in" },
    { name: "Recovery & Monitoring Section", email: "sec_rmc@vizagdccb.org.in" },
  ];

  return (
    <section className="contact-section">
      {/* 🌟 Overlay Card */}
      <div className="contact-overlay-card">
        <h1 className="contact-title">Contact Us</h1>

        {/* 🔘 Tabs */}
        <div className="contact-tabs">
          <button
            onClick={() => toggleTab("branches")}
            className={activeTab === "branches" ? "active" : ""}
          >
            Email IDs — Branches
          </button>
          <button
            onClick={() => toggleTab("officers")}
            className={activeTab === "officers" ? "active" : ""}
          >
            Email IDs — Officers & Depts
          </button>
          <button
            onClick={() => toggleTab("grievances")}
            className={activeTab === "grievances" ? "active" : ""}
          >
            Grievances / Queries
          </button>
        </div>

        {/* 🧩 Dynamic Sections First */}
        <AnimatePresence>
          {activeTab === "branches" && (
            <motion.div
              key="branches"
              className="contact-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {branchEmails.map((item, i) => (
                <div className="contact-card" key={i}>
                  <h3>{item.branch}</h3>
                  <p>{item.email}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "officers" && (
            <motion.div
              key="officers"
              className="contact-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {officers.map((off, i) => (
                <div className="contact-card" key={i}>
                  <h3>{off.name}</h3>
                  <p>{off.email}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "grievances" && (
            <motion.div
              key="grievances"
              className="grievances-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="contact-grid">
                <div className="contact-card">
                  <h3>Nodal Officer / Grievance Redressal</h3>
                  <p>
                    Sri M. Srinivasa Rao, AGM (Banking)
                    <br />
                    📞 9177762144
                  </p>
                </div>
                <div className="contact-card">
                  <h3>Appellant Officer</h3>
                  <p>
                    Sri L. Appala Raju, DGM (Banking)
                    <br />
                    📞 7331108715
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🏢 Main Contact Info — shown below */}
        <div className="main-contact">
          <div className="map-container">
            <iframe
              title="dccb-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6039854168587!2d83.30361647467104!3d17.430051783458075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39432e4c9b36fb%3A0x5e308ffb8991d73b!2sThe%20Vizag%20District%20Cooperative%20Central%20Bank%20Ltd!5e0!3m2!1sen!2sin!4v1730363756539!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-info">
            <p>
              <strong>Address:</strong> The Vizag District Cooperative Central Bank Ltd., D.No.
              47-3-27/3, Dwarakanagar, Visakhapatnam - 530016
            </p>
            <p>
              <strong>Email:</strong> info@vizagdccb.org.in
            </p>
            <p>
              <strong>Call:</strong> 0891-2744203 / 2744204
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
