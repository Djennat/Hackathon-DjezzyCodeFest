import React from 'react';
import { Link } from 'react-router-dom';

const PostsPage = ({ posts }) => {
  return (
    <div>
      <h1>Liste des Posts</h1>
      {posts.length === 0 ? (
        <p>Aucun post pour le moment.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            {post.image && <img src={post.image} alt="Post" style={{ width: '150px', height: '150px' }} />}
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/post/${post.id}`}>
              <button>Voir les détails</button>
            </Link>
          </div>
        ))
      )}
      <Link to="/create">
        <button>Créer un nouveau post</button>
      </Link>
    </div>
  );
};

export default PostsPage;
