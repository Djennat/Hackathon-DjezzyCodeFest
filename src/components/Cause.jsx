import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import "./Cause.css"; 

const CauseCard = ({ cause }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Load liked state from localStorage on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsLiked(favorites.includes(cause.title));
  }, [cause.title]);

  // Toggle favorite status
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (favorites.includes(cause.title)) {
      favorites = favorites.filter((item) => item !== cause.title);
      setIsLiked(false);
    } else {
      favorites.push(cause.title);
      setIsLiked(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="cause-card">
      {/* Image Section */}
      <div className="image-container">
        <img src={cause.image} alt={cause.title} />
        <div className="progress-bar">
          <span>{cause.progress}%</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="cause-content">
        <h3>{cause.title}</h3>
        <button className="share-button">🔗</button>
      </div>

      {/* Cause Info */}
      <div className="cause-info">
        <div>
          <p>Remaining amount</p>
          <span>{cause.remainingAmount} DA</span>
        </div>
        <div>
          <p>Collected</p>
          <span>{cause.collected} DA</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        <button className="donate-button">Donate now</button>
        <button className="like-button" onClick={toggleFavorite}>
          {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default CauseCard;
