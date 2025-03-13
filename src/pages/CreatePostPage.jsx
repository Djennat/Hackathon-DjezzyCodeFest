import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = ({ addNewPost }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    author: '',
    title: '',
    description: '',
    typeModel: '',
    price: '',
    quantity: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.typeModel || !formData.price || !formData.quantity) {
      setError('Tous les champs doivent être remplis.');
      return;
    }

    const newPost = { ...formData, id: Date.now() }; // Ajout d'un identifiant unique
    addNewPost(newPost);
    navigate('/'); // Redirection vers la page des posts
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <input
        type="text"
        name="author"
        placeholder="Nom de l'auteur"
        value={formData.author}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="typeModel"
        placeholder="Type Modèle"
        value={formData.typeModel}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="price"
        placeholder="Prix"
        value={formData.price}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="quantity"
        placeholder="Quantité"
        value={formData.quantity}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Créer le Post</button>
    </form>
  );
};

export default CreatePostPage;
