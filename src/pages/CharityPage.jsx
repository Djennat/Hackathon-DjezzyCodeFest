import React, { useState } from 'react';

const CharityPage = () => {
  const [formData, setFormData] = useState({
    associationName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Connexion réussie pour l'association : ${formData.associationName}`);
    // Ajoutez ici la logique pour vérifier les informations d'identification
  };

  return (
    <div>
      <h1>Connexion pour les Associations Caritatives</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nom de l'Association :
            <input
              type="text"
              name="associationName"
              value={formData.associationName}
              onChange={handleChange}
              placeholder="Entrez le nom de l'association"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email :
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Mot de passe :
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              required
            />
          </label>
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default CharityPage;
