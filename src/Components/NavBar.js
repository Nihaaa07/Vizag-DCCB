import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/NavBar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleMainNavClick = (path, dropdownKey = null) => {
    if (window.innerWidth <= 992) {
      // Toggle dropdown in mobile view
      if (dropdownKey) {
        toggleDropdown(dropdownKey);
      } else {
        navigate(path);
        handleLinkClick();
      }
    } else {
      // On desktop, direct navigation
      navigate(path);
      handleLinkClick();
    }
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
        {/* 🍔 Hamburger icon (right side) */}
        <div className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={toggleMobile}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* 🌐 Navigation Links */}
        <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item" onClick={handleLinkClick}>
            HOME
          </Link>

          {/* 🔹 ABOUT US DROPDOWN */}
          <div className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}>
            <span
              className="nav-item"
              onClick={() => handleMainNavClick("/about-us", "about")}
            >
              ABOUT US ▾
            </span>
            <div className="dropdown-menu">
              <Link to="/about/mission-vision" onClick={handleLinkClick}>
                DCCB Mission and Vision
              </Link>
              <Link to="/about/board-of-management" onClick={handleLinkClick}>
                Board of Management
              </Link>
              <Link to="/about/org-chart" onClick={handleLinkClick}>
                Organization Chart
              </Link>
              <Link to="/about/emails" onClick={handleLinkClick}>
                Email IDs of DCCB Branches
              </Link>
              <Link to="/about/addresses" onClick={handleLinkClick}>
                Addresses of Branches
              </Link>
              <Link to="/about/financial-statements" onClick={handleLinkClick}>
                Audited Financial Statements
              </Link>
            </div>
          </div>

          {/* 💼 SERVICES DROPDOWN */}
          <div className={`dropdown ${activeDropdown === "services" ? "active" : ""}`}>
            <span
              className="nav-item"
              onClick={() => handleMainNavClick("/services", "services")}
            >
              SERVICES ▾
            </span>
            <div className="dropdown-menu">
              <Link to="/services/deposit-schemes" onClick={handleLinkClick}>
                Deposit Schemes
              </Link>
              <Link to="/services/loan-schemes" onClick={handleLinkClick}>
                Loan Schemes
              </Link>
              <Link to="/services/online-payments" onClick={handleLinkClick}>
                Online Payments
              </Link>
              <Link to="/services/other-services" onClick={handleLinkClick}>
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
              <Link to="/network/dccb-branches" onClick={handleLinkClick}>
                DCCB Branches
              </Link>
              <Link to="/network/pacs" onClick={handleLinkClick}>
                PACS
              </Link>
            </div>
          </div>

          <Link to="/notifications" className="nav-item" onClick={handleLinkClick}>
            NOTIFICATIONS
          </Link>

          <Link to="/tenders" className="nav-item" onClick={handleLinkClick}>
            TENDERS
          </Link>

          <Link to="/digital" className="nav-item" onClick={handleLinkClick}>
            DIGITAL
          </Link>

          <Link to="/gallery" className="nav-item" onClick={handleLinkClick}>
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
              <Link to="/resource-links/careers" onClick={handleLinkClick}>
                Careers
              </Link>
            </div>
          </div>

          <Link to="/contact-us" className="nav-item" onClick={handleLinkClick}>
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
