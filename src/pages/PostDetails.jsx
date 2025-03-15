import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PostDetails.css';

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Post non trouvé.</p>;
  }

  return (
    <div className="container">
      <div className="post-details">
        <div className="image-section">
          <img
            src={post.image || 'https://via.placeholder.com/150'}
            alt="Post"
            className="post-image"
          />
        </div>
        <div className="content-section">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-description">{post.description}</p>
          <div className="info-grid">
            <p><strong>Type Modèle :</strong> {post.typeModel}</p>
            <p><strong>Auteur :</strong> {post.author}</p>
          </div>
          <button className="donate-button" onClick={() => navigate('/payment')}>Faire un don</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
