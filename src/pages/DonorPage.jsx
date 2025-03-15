import React, { useState } from 'react';
import { FaUser, FaHome, FaPhone, FaUserAlt, FaLock } from 'react-icons/fa';
import '../styles/DonorPage.css';

const DonorPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci pour votre inscription, ${formData.firstName}!`);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="app-header">
        <h1>
          <span className="highlight">N</span>our
        </h1>
        <hr />
      </header>

      {/* Formulaire */}
      <div className="form-box">
        <h2>Donor Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Input pour le prénom */}
          <div className="input-container">
            <FaUserAlt className="input-icon left" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input pour le nom */}
          <div className="input-container">
            <FaUser className="input-icon left" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input pour l'adresse */}
          <div className="input-container">
            <FaHome className="input-icon left" />
            <input
              type="text"
              name="address"
              placeholder="Home Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input pour le numéro de téléphone */}
          <div className="input-container">
            <FaPhone className="input-icon right" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input pour le mot de passe */}
          <div className="input-container">
            <FaLock className="input-icon left" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default DonorPage;
