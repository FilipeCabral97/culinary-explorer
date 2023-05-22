import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="github-container">
          <Link to={""} className="github">
            <span className="github-date">@2023</span>
            <span className="github-handler">filipecabral97</span>
          </Link>
        </div>
        <div>
          <div className="logo-container">
            <h1 className="footer-logo">Culinary</h1>
            <h1 className="footer-logo logo-down">Explorer</h1>
          </div>
        </div>
        <div className="social-media-container">
          <Link to={""}>F</Link>
          <Link to={""}>I</Link>
          <Link to={""}>LI</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
