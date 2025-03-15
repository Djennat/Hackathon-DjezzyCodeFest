import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <header className="app-header">
      <h1 className="app-name">
        <u><span className="highlight">N</span>our</u>
      </h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </nav>
    
      <button className="sign-up-button" onClick={() => navigate('/options')}>
        Sign Up
      </button>
    </header>
  );
}

export default Nav;
