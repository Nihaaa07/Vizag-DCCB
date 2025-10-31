import React, { useState } from "react";
import "./OnlinePayments.css";
import { motion } from "framer-motion";

const OnlinePayments = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const ifscCodes = [
    { branch: "Central Office", code: "APBL0003001" },
    { branch: "Ankapalli", code: "APBL0003002" },
    { branch: "Bheemili", code: "APBL0003003" },
    { branch: "Chodavaram", code: "APBL0003004" },
    { branch: "Devarapalli", code: "APBL0003005" },
    { branch: "Dwarakanagar", code: "APBL0003006" },
    { branch: "Gajuwaka", code: "APBL0003007" },
    { branch: "Gandhiplace", code: "APBL0003008" },
    { branch: "Gopalapatnam", code: "APBL0003009" },
    { branch: "K Kotapadu", code: "APBL0003010" },
    { branch: "Kancharapalem", code: "APBL0003011" },
    { branch: "Kotaurtla", code: "APBL0003012" },
    { branch: "MVP Colony", code: "APBL0003013" },
    { branch: "Madhurawada", code: "APBL0003014" },
    { branch: "Madugula", code: "APBL0003015" },
    { branch: "Maharani Peta", code: "APBL0003016" },
    { branch: "Marripalem", code: "APBL0003017" },
    { branch: "Narsipatnam", code: "APBL0003018" },
    { branch: "Paderu", code: "APBL0003019" },
    { branch: "Payakarapeta", code: "APBL0003020" },
    { branch: "Pendurthy", code: "APBL0003021" },
    { branch: "Railway New Colony", code: "APBL0003022" },
    { branch: "Ravikamatham", code: "APBL0003023" },
    { branch: "Seethammadhara", code: "APBL0003024" },
    { branch: "Sriharipuram", code: "APBL0003025" },
    { branch: "Steel City", code: "APBL0003026" },
    { branch: "Visakhapatnam", code: "APBL0003027" },
    { branch: "Visalakshinagar", code: "APBL0003028" },
    { branch: "Yellamanchali", code: "APBL0003029" },
    { branch: "Adduroad", code: "APBL0003030" },
    { branch: "Atchutapuram", code: "APBL0003031" },
  ];

  return (
    <section className="online-section">
      <motion.h1
        className="online-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Online Payments
      </motion.h1>

      <motion.p
        className="online-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The Bank offers convenient Online Payment services to all customers via “Walk-in Customer” and “Mobile Banking App” facilities.
      </motion.p>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "mobile" ? "active" : ""}`}
          onClick={() => setActiveTab("mobile")}
        >
          Mobile Banking
        </button>
        <button
          className={`tab ${activeTab === "rtgs" ? "active" : ""}`}
          onClick={() => setActiveTab("rtgs")}
        >
          RTGS / NEFT Services
        </button>
      </div>

      <motion.div
        key={activeTab}
        className="tab-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "mobile" ? (
          <>
            <h2>Mobile Banking</h2>
            <p>
              DCCB offers Mobile Banking services allowing customers to conduct financial transactions remotely using smartphones or tablets. Available 24/7, it includes:
            </p>
            <ul>
              <li>Balance Enquiry</li>
              <li>Mini Statement (Last 5 Transactions)</li>
              <li>IMPS Fund Transfer</li>
              <li>NEFT / Inter Bank Transfers</li>
              <li>Self & Intra Fund Transfers</li>
              <li>Transaction Search</li>
              <li>PIN Change (M-PIN / T-PIN)</li>
            </ul>
            <p>Customers can download the Mobile App from Google Play Store or iOS App Store.</p>
          </>
        ) : (
          <>
            <h2>RTGS / NEFT Services</h2>
            <p>
              DCCB provides RTGS / NEFT services from all its branches and Head Office for online transfer of funds to any bank connected to RBI-RTGS/NEFT.
            </p>
            <p>
              <b>RTGS Timing:</b> 24×7 (effective from 14/12/2020)<br />
              <b>NEFT Timing:</b> 24×7
            </p>

            <p className="complaint-text">
              <strong>For any Complaints/Grievances</strong> related to RTGS/NEFT - Contact Customer Facilitation Center of RTGS/NEFT.
            </p>

            <h3>IFSC Codes of Branches - District Co-operative Bank Ltd:</h3>

            <div className="ifsc-table-container">
              <table className="ifsc-table">
                <thead>
                  <tr>
                    <th>Branch Name</th>
                    <th>IFSC Code</th>
                  </tr>
                </thead>
                <tbody>
                  {ifscCodes.map((item, index) => (
                    <tr key={index}>
                      <td>{item.branch}</td>
                      <td>{item.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default OnlinePayments;
