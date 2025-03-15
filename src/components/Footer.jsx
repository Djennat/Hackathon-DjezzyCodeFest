import React from 'react';
import { FaFacebook, FaInstagram, FaLightbulb, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './footer.css';

function Footer() {  
  return (
    <footer className="app-footer">
      <div className="footer-section">
        <h3>Nour</h3>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <div className="footer-subtitle">
          <MdLocationOn className="icon" /> Alger
        </div>
        <div className="footer-subtitle">
          <FaPhone className="icon" /> +213 123 456 789
        </div>
        <div className="footer-subtitle">
          <FaLightbulb className="icon" /> nour@gmail.com
        </div>
      </div>
      <div className="footer-section">
        <h3>Our Sections</h3>
        <div className="footer-subtitle">Home</div>
        <div className="footer-subtitle">Categories</div>
        <div className="footer-subtitle">About</div>
      </div>
    </footer>
  );
}

export default Footer;  
