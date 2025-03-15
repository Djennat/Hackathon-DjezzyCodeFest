import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ addNewPost }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: '',
    typeModel: '',
    price: '',
    quantity: '',
  });

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

    // Validation des champs
    if (!formData.title || !formData.description || !formData.typeModel || !formData.price || !formData.quantity) {
      alert('Tous les champs doivent être remplis.');
      return;
    }

    addNewPost(formData);
    navigate('/PostsPage'); // Redirection vers la page des posts
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="typeModel"
        placeholder="Type Modèle"
        value={formData.typeModel}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="number"
        name="price"
        placeholder="Prix"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="number"
        name="quantity"
        placeholder="Quantité"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Créer le Post</button>
    </form>
  );
};

export default CreatePost;
