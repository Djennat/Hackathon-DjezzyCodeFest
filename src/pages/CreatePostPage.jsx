import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreatePostPage.css'; // Fichier CSS externe
import Nav from '../components/nav';
import Footer from '../components/footer';

const CreatePostPage = ({ addNewPost }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    author: '',
    title: '',
    description: '',
    typeModel: '',
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

    if (!formData.title || !formData.description || !formData.typeModel) {
      setError('Tous les champs doivent être remplis.');
      return;
    }

    const newPost = { ...formData, id: Date.now() };
    addNewPost(newPost);
    navigate('/');
  };

  return (
    <div>
      <Nav />
      <div className="container-creat">
        <div className="form-box-creat">
          <h2>create donation Cause</h2>
          {error && <p className="error-text-creat">{error}</p>}
          <form onSubmit={handleSubmit} className="form-creat">
            <input type="text" name="author" placeholder="Case Title" value={formData.author} onChange={handleChange} className="input-creat" />
            <input type="text" name="title" placeholder="Category" value={formData.title} onChange={handleChange} className="input-creat" />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="input-creat" />
            <input type="text" name="typeModel" placeholder="Donation Goal" value={formData.typeModel} onChange={handleChange} className="input-creat" />
            
            <label className="upload-label-creat">Upload Image</label>
            <div className="image-upload-box-creat">
              <input type="file" accept="image/*" onChange={handleImageChange} className="file-input-creat" />
              {formData.image ? (
                <img src={formData.image} alt="Preview" className="image-preview-creat" />
              ) : (
                <span className="upload-icon-creat">+</span>
              )}
            </div>

            <button type="submit" className="submit-btn-creat">Créer</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePostPage;
