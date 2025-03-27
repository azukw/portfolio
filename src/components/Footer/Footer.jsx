import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <a href="mailto:sami.ssaoud@gmail.com"><h3>
            Vous aimez mes travaux ? <br />
            sami.ssaoud<span>@</span>gmail.com
          </h3></a>

          <p className="secondary">
          Si vous avez un projet, ou si vous souhaitez simplement discuter, 
          n'hésitez pas à me contacter.
          </p>

          <Link to="mailto:sami.ssaoud@gmail.com" className="btn">
            M'envoyer un mail
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Accueil</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/works" className="footer-nav-item">
            <span>Projets</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>à Propos</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Sami</h1>
          <h1>Saoud</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Sami Saoud</p>
          <p className="primary sm">2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
