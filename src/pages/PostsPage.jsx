import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaFacebook, FaInstagram, FaPhone, FaLightbulb } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import '../styles/PostPage.css';
import Footer from '../components/footer';
import Nav from '../components/Nav';
const PostsPage = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleShare = (postId) => {
    const postUrl = `https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/post/${postId}`;
    window.open(postUrl, '_blank'); // Ouvre LinkedIn dans un nouvel onglet
  };

  // Filtrer les posts en fonction de la recherche
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
     <Nav/>

      {/* Contenu principal */}
      <div className="post-container">
        <h1>Donation Cause</h1>

        {/* Barre de recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">🔍</button>
        </div>

        {/* Bouton "Créer un nouveau post" */}
        <Link to="/create">
          <button className="create-post-button">+ Ajouter une cause</button>
        </Link>

        {filteredPosts.length === 0 ? (
          <p>Aucun post trouvé.</p>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="image-container">
                  {post.image && <img src={post.image} alt="Post" className="post-image" />}
                  <span className="author-name">{post.author}</span>
                </div>
                <div className="post-info">
                  <h2 className="h">
                    {post.title}
                    <FaShareAlt className="icon-share" onClick={() => handleShare(post.id)} />
                  </h2>
                  <p className="post-price">Prix: {post.price}€</p>
                </div>
                <div className="button-container">
                  <Link to={`/post/${post.id}`}>
                    <button className="post-button">Voir les détails</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    <Footer/>
    </div>
  );
};

export default PostsPage;
