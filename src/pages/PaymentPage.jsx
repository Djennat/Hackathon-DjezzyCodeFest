import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [showBox, setShowBox] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setShowBox(false);
    navigate(option === 'Donneur' ? '/donor' : '/charity');
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1>Options de Paiement</h1>
      <p>Choisissez votre méthode de paiement :</p>
      <button onClick={() => setShowBox(true)} style={{ marginTop: '20px' }}>
        Payer
      </button>

      {showBox && (
        <>
          {/* Fond sombre */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          ></div>

          {/* Boîte de sélection */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              border: '1px solid black',
              padding: '20px',
              zIndex: 1000,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
            }}
          >
            <h3>Vous êtes :</h3>
            <button onClick={() => handleOptionSelect('Donneur')} style={{ marginRight: '10px' }}>
              Donneur
            </button>
            <button onClick={() => handleOptionSelect('Association caritative')}>
              Association caritative
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
