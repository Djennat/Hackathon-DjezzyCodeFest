import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../styles/SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Connexion réussie pour : ${formData.firstName}`);
  };

  return (
    <div className="page-container_signin">
      <div className="form-box_signin">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container_signin">
            <FaUser className="input-icon_signin left_signin" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container_signin">
            <FaLock className="input-icon_signin left_signin" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form-button_signin">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;