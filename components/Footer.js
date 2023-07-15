import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 footer">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4"
          >
            <AiFillFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4"
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            href="example@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4"
          >
            <FiMail size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <AiFillTwitterSquare size={24} />
          </a>
        </div>
        <hr className="border-gray-700 my-4" />
        <h1 className="text-white text-center text-3xl mb-2 font-bold ">ROAM CRAZE</h1>
        <p className="text-white text-center">© 2023 RoamCraze. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
