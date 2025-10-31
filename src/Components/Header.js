import React from "react";
import "../Styles/Header.css";
import logo from "../Assets/logo-dccb.jpg";
import banner from "../Assets/headerlogo.jpg";

const Header = () => {
  return (
    <header className="dccb-header">
      <div className="header-container">
        <img src={logo} alt="DCCB Logo" className="dccb-logo" />
        <img src={banner} alt="DCCB Banner" className="dccb-banner" />
      </div>
    </header>
  );
};

export default Header;
