import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Post non trouvé.</p>;
  }

  return (
    <div>
      <h1>Détails du Post</h1>
      <img
        src={post.image || 'https://via.placeholder.com/150'}
        alt="Post"
        style={{ width: '150px', height: '150px' }}
      />
      <h2>{post.title}</h2>
      <p><strong>Description :</strong> {post.description}</p>
      <p><strong>Type Modèle :</strong> {post.typeModel}</p>
      <p><strong>Prix :</strong> {post.price}€</p>
      <p><strong>Quantité :</strong> {post.quantity}</p>
      <p><strong>Auteur :</strong> {post.author}</p>
      <button onClick={() => navigate('/payment')}>Faire un don</button>
    </div>
  );
};

export default PostDetails;
