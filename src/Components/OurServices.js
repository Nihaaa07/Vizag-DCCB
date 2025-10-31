import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/OurServices.css";
import { FaPiggyBank, FaMoneyCheckAlt, FaUniversity, FaExchangeAlt, FaHome, FaEllipsisH } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaPiggyBank className="service-icon blue" />,
      title: "Deposit Schemes",
      description:
        "This facility is available to customers to deposit and withdraw money as per their convenience.",
      path: "/Pages/Services/DepositSchemes",
    },
    {
      icon: <FaMoneyCheckAlt className="service-icon orange" />,
      title: "Loan Schemes",
      description:
        "The Bank offers the attractive loan schemes to individuals who are its customers.",
      path: "/Pages/Services/LoanSchemes",
    },
    {
      icon: <RiShieldCheckFill className="service-icon teal" />,
      title: "DEAF Accounts",
      description:
        "The Reserve Bank of India clarified that banks will have to calculate balances in all accounts falling under the Depositor Education and Awareness Fund (DEAF) Scheme.",
      path: "/Pages/Notifications",
    },
    {
      icon: <FaUniversity className="service-icon yellow" />,
      title: "Branch Locations",
      description:
        "District State Cooperative Bank has 31 branches in Vizag.",
      path: "/Pages/AboutUs/Addresses",
    },
    {
      icon: <FaExchangeAlt className="service-icon red" />,
      title: "RTGS / NEFT Facilities",
      description:
        "Services from all its Branches and HO for online transfer of funds to any Branch of any Bank which were connected to RBI-RTGS / NEFT Services.",
      path: "/Pages/RNFacilities",
    },
    {
      icon: <FaEllipsisH className="service-icon purple" />,
      title: "Other Services",
      description:
        "The Bank arranges transmission of funds of its customers to locations at every nook and corner of the country.",
      path: "/Pages/Services/OtherServices",
    },
  ];

  return (
    <div className="ourservices-section">
      <h2 className="ourservices-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate(service.path)}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
