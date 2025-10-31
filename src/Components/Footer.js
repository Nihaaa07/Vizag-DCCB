import React from "react";
import "../Styles/Footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../Assets/DCCB.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // 🌀 Smooth scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <footer className="footer-glass">
      <div className="footer-container">
        <h2 className="footer-heading">DCCB VISAKHAPATNAM</h2>

        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/network/pacs">Network</Link></li>
              <li><Link to="/resource-links/careers">Careers</Link></li>
              <li><Link to="/notifications">Notifications</Link></li>
              <li><Link to="/about/emails">Email IDs of DCCB Branches</Link></li>
              <li><Link to="/about/addresses">Addresses of Branches</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col contact">
            <h3>Contact Us</h3>
            <p>
              <strong>Location:</strong><br />
              Head Office, Door No: 58-14-57/2, YSR Sahakara Bhavan,<br />
              Marripalem, VUDA Layout, Near PF Office,<br />
              Visakhapatnam – 530009.
            </p>
            <p><strong>Email:</strong> ceo_vsp@apcob.org</p>
            <p><strong>Call:</strong> 0891-2788612 , 9989115500</p>
          </div>

          {/* Info + Logo */}
          <div className="footer-col about">
            <img src={logo} alt="DCCB Logo" className="footer-logo" />
            <p>
              The Bank offers a host of facilities to its clientele. These include,
              Banking facilities under attractive deposit schemes, safe deposit lockers,
              Clean & Secured Overdrafts, Consumer Durable Loans, Vehicle Loans,
              Gold Loans, Housing Loans and a host of other services.
            </p>

            <div className="social-links">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaSkype />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} The Vizag District Co-operative Central Bank Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
