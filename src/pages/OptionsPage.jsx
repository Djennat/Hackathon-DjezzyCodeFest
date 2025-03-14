import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OptionsPage.css';
import { FaFacebook, FaInstagram, FaPhone, FaLightbulb } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Nav from '../components/nav';

const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
     <Nav/>

      {/* Options */}
      <div className="options-buttons">
        <button className="options-button" onClick={() => navigate('/donor')}>
          Are you a Charitable association
        </button>
        <button className="options-button" onClick={() => navigate('/charity')}>
          Are you a Donor
        </button>
      </div>

      {/* Footer */}
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
            <FaLightbulb className="icon" /> Light
          </div>
        </div>
        <div className="footer-section">
          <h3>Our Sections</h3>
          <div className="footer-subtitle">Home</div>
          <div className="footer-subtitle">Categories</div>
          <div className="footer-subtitle">About</div>
        </div>
      </footer>
    </div>
  );
};

export default OptionsPage;
