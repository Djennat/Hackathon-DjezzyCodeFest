import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostPage.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          {/* Image principale */}
          <div className="post-header">
            <img src={post.image || '/assets/images/default.png'} alt="Post" className="post-image" />
          </div>

          {/* Contenu du post */}
          <div className="post-content">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">
              {post.description.length > 60 ? post.description.substring(0, 60) + '...' : post.description}
            </p>
            <Link to={`/post/${post.id}`} className="details-button">
              Voir plus de détails
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
