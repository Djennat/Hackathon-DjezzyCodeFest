import React from 'react';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaFacebook, FaInstagram, FaPhone, FaLightbulb } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import '../styles/PostPage.css';

const PostsPage = ({ posts }) => {
  const handleShare = (postId) => {
    const postUrl = `https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/post/${postId}`;
    window.open(postUrl, '_blank'); // Ouvre LinkedIn dans un nouvel onglet
  };

  return (
    <div className="post-container">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-name">
          <span className="highlight">N</span>our
        </h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/">Categories</a>
          <a href="/">About</a>
        </nav>
        <button className="sign-up-button">Sign Up</button>
      </header>
      <hr />

      {/* Contenu principal */}
      <h1>Liste des Posts</h1>
      {posts.length === 0 ? (
        <p>Aucun post pour le moment.</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
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
      <Link to="/create">
        <button className="create-post-button">Créer un nouveau post</button>
      </Link>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-section">
          <h3>Nour</h3>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <div className="footer-subtitle">
            <MdLocationOn className="icon" /> Alger
          </div>
          <div className="footer-subtitle">
            <FaPhone className="icon" /> +213 123 456 789
          </div>
          <div className="footer-subtitle">
            <FaLightbulb className="icon" /> Light
          </div>
        </div>
        <div className="footer-section">
          <h3>Our Sections</h3>
          <div className="footer-subtitle">Home</div>
          <div className="footer-subtitle">Categories</div>
          <div className="footer-subtitle">About</div>
        </div>
      </footer>
    </div>
  );
};

export default PostsPage;
