import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/NavBar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 992) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const handleResourceLinkClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveDropdown(null);

    if (location.pathname === "/") {
      const section = document.getElementById("resource-links-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#resource-links-section";
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item" onClick={handleLinkClick}>
            HOME
          </Link>

          {/* 🔹 ABOUT US DROPDOWN */}
          <div className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}>
            <Link
              to="/about-us"
              className="nav-item"
              onClick={() => {
                handleLinkClick();
                toggleDropdown("about");
              }}
            >
              ABOUT US ▾
            </Link>
            <div className="dropdown-menu">
              <Link to="/about/mission-vision" onClick={toggleMobile}>
                DCCB Mission and Vision
              </Link>
              <Link to="/about/board-of-management" onClick={toggleMobile}>
                Board of Management
              </Link>
              <Link to="/about/org-chart" onClick={toggleMobile}>
                Organization Chart
              </Link>
              <Link to="/about/emails" onClick={toggleMobile}>
                Email IDs of DCCB Branches
              </Link>
              <Link to="/about/addresses" onClick={toggleMobile}>
                Addresses of Branches
              </Link>
              <Link to="/about/financial-statements" onClick={toggleMobile}>
                Audited Financial Statements
              </Link>
            </div>
          </div>

          {/* 💼 SERVICES DROPDOWN (UPDATED) */}
          <div className={`dropdown ${activeDropdown === "services" ? "active" : ""}`}>
            <Link
              to="/services"
              className="nav-item"
              onClick={() => {
                handleLinkClick();
                toggleDropdown("services");
              }}
            >
              SERVICES ▾
            </Link>
            <div className="dropdown-menu">
              <Link to="/services/deposit-schemes" onClick={toggleMobile}>
                Deposit Schemes
              </Link>
              <Link to="/services/loan-schemes" onClick={toggleMobile}>
                Loan Schemes
              </Link>
              <Link to="/services/online-payments" onClick={toggleMobile}>
                Online Payments
              </Link>
              <Link to="/services/other-services" onClick={toggleMobile}>
                Other Services
              </Link>
            </div>
          </div>

          {/* 🌐 NETWORK DROPDOWN */}
          <div className={`dropdown ${activeDropdown === "network" ? "active" : ""}`}>
            <span className="nav-item" onClick={() => toggleDropdown("network")}>
              NETWORK ▾
            </span>
            <div className="dropdown-menu">
              <Link to="/network/dccb-branches" onClick={toggleMobile}>
                DCCB Branches
              </Link>
              <Link to="/network/pacs" onClick={toggleMobile}>
                PACS
              </Link>
            </div>
          </div>

          <Link to="/notifications" className="nav-item" onClick={toggleMobile}>
            NOTIFICATIONS
          </Link>

          <Link to="/tenders" className="nav-item" onClick={toggleMobile}>
            TENDERS
          </Link>

          <Link to="/digital" className="nav-item" onClick={toggleMobile}>
            DIGITAL
          </Link>

          <Link to="/gallery" className="nav-item" onClick={toggleMobile}>
            GALLERY
          </Link>

          {/* 📘 RESOURCE LINKS DROPDOWN */}
          <div className={`dropdown ${activeDropdown === "resources" ? "active" : ""}`}>
            <span
              className="nav-item"
              onClick={(e) => {
                handleResourceLinkClick(e);
                toggleDropdown("resources");
              }}
            >
              RESOURCE LINKS ▾
            </span>
            <div className="dropdown-menu">
              <a href="https://www.rbi.org.in/home.aspx" target="_blank" rel="noreferrer">
                Reserve Bank of India
              </a>
              <a href="https://www.nabard.org/EngDefault.aspx" target="_blank" rel="noreferrer">
                NABARD
              </a>
              <a href="https://apcob.bank.in/" target="_blank" rel="noreferrer">
                APCOB
              </a>
              <Link to="/resource-links/careers" onClick={toggleMobile}>
                Careers
              </Link>
            </div>
          </div>

          <Link to="/contact-us" className="nav-item" onClick={handleLinkClick}>
            CONTACT US
          </Link>
        </div>

        {/* 🍔 HAMBURGER ICON */}
        <div className="hamburger" onClick={toggleMobile}>
          <span className={mobileOpen ? "bar open" : "bar"}></span>
          <span className={mobileOpen ? "bar open" : "bar"}></span>
          <span className={mobileOpen ? "bar open" : "bar"}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
