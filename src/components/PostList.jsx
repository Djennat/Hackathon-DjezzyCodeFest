import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <p>Aucun post pour le moment.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            {post.image && <img src={post.image} alt="Post" style={{ width: '150px', height: '150px' }} />}
            <h2>{post.title}</h2>
            <p><strong>Auteur :</strong> {post.author}</p>
            <p><strong>Description :</strong> {post.description}</p>
            <p><strong>Tags :</strong> {post.tags}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
