import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OptionsPage.css';
import { FaFacebook, FaInstagram, FaPhone, FaLightbulb } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Nav from '../components/Nav';
import Footer from '../components/footer';

const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
     <Nav/>

    
      <div className="options-buttons">
        <button className="options-button" onClick={() => navigate('/charity')}>
          Are you a Charitable association
        </button>
        <button className="options-button" onClick={() => navigate('/donor')}>
          Are you a Donor
        </button>
      </div>
      <Footer/>
     
    </div>
  );
};

export default OptionsPage;
