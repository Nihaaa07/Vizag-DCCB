import React from "react";
import "./Notifications.css";

const notifications = [
  {
    id: 1,
    title:
      "Sealed quotations are invited for Quotations from Information System Audit firms to conduct IS Audit for the AP State Cooperative Bank & 13 District Cooperative Central Banks and its Data Centre & Data Recovery and Cyber Security Audit for 9 DCCBs (Out of 13 DCCBs)",
    description:
      "It is to inform that APCOB is currently seeking proposals from reputable Information System Audit firms to conduct a comprehensive IS Audit for the AP State Cooperative Bank, 13 District Cooperative Central Banks and its Data Centre & Data Recovery as well as Cyber Security Audit for 9 DCCBs (out of 13 DCCBs). In this connection, we request you to furnish the quotations for conducting above mentioned Audits for FY 2023-24.",
    link: "/pdfs/Notification1.pdf",
  },
  {
    id: 2,
    title:
      "Request for calling Quotations from Information System Audit firms to conduct IS Audit for the AP State Cooperative Bank & 13 District Cooperative Central Banks and its Data Centre & Disaster Recovery Centre and Cyber Security Audit for 9 DCCBs",
    description:
      "Selection of Vendor for Information System Auditors to conduct IS Audit for the AP State Cooperative Bank, 13 District Cooperative Central Banks and its Data Centre & Data Recovery as well as Cyber Security Audit for 9 DCCBs out of 13 DCCBs mentioned for IS Audit.",
    link: "/pdfs/Notification2.pdf",
  },
  {
    id: 3,
    title:
      "Request for calling Quotations from Manpower and Security Agencies for supply of Skilled and Security Staff in our Bank",
    link: "/pdfs/Notification3.pdf",
  },
  {
    id: 4,
    title:
      "Applications are invited from eligible candidates for the post of Chief Technology Officer",
    link: "/pdfs/Notification4.pdf",
  },
  {
    id: 5,
    title:
      'Sealed quotations are called from eligible Firms/Company for providing the AMC to UPS Batteries for "The District Cooperative Central Bank Ltd., Visakhapatnam" (including Head office and Branches)',
    link: "/pdfs/Notification5.docx",
  },
  {
    id: 6,
    title:
      "Common Selection of Chief Executive Officers (CEOs) of the DCCBs in the state of Andhra Pradesh under Fit & Proper criteria for the Panel year 2024",
    link: "/pdfs/Notification6.pdf",
    extraLink: "/pdfs/Application6.pdf",
  },
  {
    id: 7,
    title:
      'Calling for Quotation for supply and installation of 12V 65 AH UPS Batteries with buyback of Old UPS Batteries for "The District Cooperative Central Bank Ltd., Visakhapatnam" (including Head office and Branches)',
    link: "/pdfs/Notification7.docx",
  },
  {
    id: 8,
    title:
      "Applications are invited for engagement of Cooperative Interns for a period of One Year in The Andhra Pradesh State Cooperative Bank Ltd., (APCOB), Vijayawada and 13 District Cooperative Central Banks (DCCBs) in the State of Andhra Pradesh.",
    description:
      "Mail to ceo_vsp@apcob.org for further contact. Last date for submission of applications is 5th August 2024.",
    link: "/pdfs/Notification8.pdf",
  },
  {
    id: 9,
    title:
      'Sealed Quotations are invited for supply and installation of Desktop Systems for "The District Cooperative Central Bank Ltd., Visakhapatnam" (including Head office and Branches)',
    description:
      "Mail to ceo_vsp@apcob.org for further contact. Last date of receiving the Quotations is 28.10.2024 at 5:00 PM.",
    link: "/pdfs/Notification9.docx",
  },
  {
    id: 10,
    title:
      "Request for Quotations from Information System Audit firms to conduct IS Audit and Cyber Security Audit for the AP State Cooperative Bank & 13 District Cooperative Central Banks and its Data Centre & Data Recovery",
    link: "/pdfs/Notification10.pdf",
  },
  {
    id: 11,
    title: "Tender Notice for Solar Power Panel installation - Reg.",
    link: "/pdfs/Notification11.pdf",
  },
  {
    id: 12,
    title: "Renewal of Bankers Indemnity policy for the year 2025-26",
    link: "/pdfs/Notification12.pdf",
  },
  {
    id: 13,
    title:
      "Quotations calling for UPS Batteries – Suppliers are invited to submit competitive proposals.",
    link: "/pdfs/Notification13.pdf",
  },
  {
    id: 14,
    title:
      "Quotations calling for AMC of UPS Batteries for DCCB Visakhapatnam – Head Office & Branches.",
    link: "/pdfs/Notification14.pdf",
  },
  {
    id: 15,
    title:
      "Quotations calling for supply and installation of desktop systems – Sealed quotations invited.",
    link: "/pdfs/Notification15.pdf",
  },
  {
    id: 16,
    title:
      "Quotations calling for supply of Laptops, Desktops, and Printers – Submit sealed quotations.",
    link: "/pdfs/Notification16.docx",
  },
  {
    id: 17,
    title:
      "Quotation Calling for Manpower Supply – The District Central Co-operative Bank Ltd.",
    link: "/pdfs/Notification17.pdf",
  },
  {
    id: 18,
    title: "Inviting applications for appointing Panel Contractors.",
    link: "/pdfs/Notification18.pdf",
  },
];

const Notifications = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">📢 Notifications</h1>

      <div className="timeline">
        {notifications.map((note, index) => (
          <div key={note.id} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>
                <span className="serial-number">{index + 1}.</span> {note.title}
              </h3>
              {note.description && <p>{note.description}</p>}
              <div className="btn-group">
                <a
                  href={note.link}
                  className="timeline-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here to View
                </a>
                {note.extraLink && (
                  <a
                    href={note.extraLink}
                    className="timeline-btn secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Application Form
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 💠 DEAF Accounts Section */}
      <div className="deaf-section">
        <h2>💰 DEAF-Accounts</h2>
        <p>
          <a
            href="/pdfs/DEAF_list.pdf"
            className="deaf-link"
            target="_blank"
            rel="noreferrer"
          >
            Click Here to view the DEA Fund Account details upto August 2025
          </a>
        </p>
      </div>
    </div>
  );
};

export default Notifications;
