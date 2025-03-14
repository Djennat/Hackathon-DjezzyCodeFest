import React, { useState } from 'react';
import { FaBuilding, FaEnvelope, FaPhone } from 'react-icons/fa';

const CharityPage = () => {
  const [formData, setFormData] = useState({
    associationName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Connexion réussie pour l'association : ${formData.associationName}`);
  };

  return (
    <div className="page-container">
      {/* Header avec le nom de l'application */}
      <header className="app-header">
        <h1>
          <span className="highlight">N</span>our
        </h1>
        <hr />
      </header>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="form-box">
        <h1 className="form-title">Associations Sign Up</h1>
        <div className="input-container">
          <FaBuilding className="input-icon left" />
          <input
            type="text"
            name="associationName"
            value={formData.associationName}
            onChange={handleChange}
            placeholder="Association Name"
            required
          />
        </div>
        <div className="input-container">
          <FaEnvelope className="input-icon left" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Association Address"
            required
          />
        </div>
        <div className="input-container">
          <FaPhone className="input-icon left" />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CharityPage;
