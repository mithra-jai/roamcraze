import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
    <h1 className="footer-title">RoamCraze</h1>
    <p className="footer-quote">“Live with no excuses and travel with no regrets” ~ Oscar Wilde.</p>
    <div className="footer-icons">
    <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 footer-icon"
          >
            <AiFillFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 footer-icon"
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            href="/Contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 footer-icon"
          >
            <FiMail size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 footer-icon"
          >
            <AiFillTwitterSquare size={24} />
          </a>
    </div>
    <hr className="footer-divider"/>
    <p className="footer-copyright">
      &copy; 2023 RoamCraze. All rights reserved.
    </p>
  </footer>
  
  );
};

export default Footer;
