import React from "react";
import {Link} from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../assets/css/Footer.css"; // Import the separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p className="mb-0">
        <Link to="/" className="text"><b>&copy; 2025 Farmazy</b></Link> | 
        <a href="/Faq" className="footer-link">FAQ</a> | 
        <a href="/terms" className="footer-link">Terms and Conditions</a> |
        <a href="/contact" className="footer-link">Contact Us</a>
        <div className="social-icons">
          <FaFacebook className="icon fb" />
          <FaInstagram className="icon ig" />
          <FaTwitter className="icon fb" />
          <FaWhatsapp className="icon wa" />
        </div>
      </p>
      
    </footer>
  );
};

export default Footer;
