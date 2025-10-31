import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/TopBar.css";

const TopBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/notifications");
  };

  return (
    <div className="topbar" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="scrolling-text">
        Inviting applications for appointing Panel Contractors
      </div>
    </div>
  );
};

export default TopBar;
