import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PaymentPage.css';
import visaImg from "../assets/images/visa.png";
import mastercardImg from "../assets/images/mastercard.png";

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleSubmit = () => {
    if (!selectedPayment) {
      alert('Veuillez sélectionner une méthode de paiement.');
      return;
    }
    navigate('/options');
  };

  return (
    <div className="payment-container">
      
      <header className="app-header">
  <h1 className="app-title">
    <span className="highlight">N</span>our
  </h1>
</header>

<hr className="header-line" /> {/* Ligne placée en dehors du header */}
      
      <div className="payment-box centered">
        <h2>Checkout</h2>
        <div className="payment-input-group">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="payment-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="payment-input" required />
            </div>
          </div>
          <div className="input-group full-width">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" className="payment-input" required />
          </div>
        </div>


        <h3 className='notre_h3'>Payment Methods</h3>

        <div className="payment-methods">
          
          <div className="payment-method-icons">
            <label>
              <input
                type="radio"
                name="payment"
                value="visa"
                onChange={() => handlePaymentSelection('visa')}
              />
              <img src={visaImg} alt="Visa" className="payment-icon" />
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="mastercard"
                onChange={() => handlePaymentSelection('mastercard')}
              />
              <img src={mastercardImg} alt="Mastercard" className="payment-icon" />
            </label>
          </div>
        </div>

        <button className="payment-button" onClick={handleSubmit}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
