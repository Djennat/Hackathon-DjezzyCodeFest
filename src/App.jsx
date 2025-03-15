import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostsPage from './pages/PostsPage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetails from './pages/PostDetails';
import PaymentPage from './pages/PaymentPage';
import DonorPage from './pages/DonorPage';
import CharityPage from './pages/CharityPage';
import OptionsPage from './pages/OptionsPage'; // Import de la nouvelle page des options

const App = () => {
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([...posts, post]); // Ajouter un nouveau post
  };

  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<PostsPage posts={posts} />} />
        <Route path="/create" element={<CreatePostPage addNewPost={addNewPost} />} />
        <Route path="/post/:id" element={<PostDetails posts={posts} />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/options" element={<OptionsPage />} /> {/* Nouvelle route */}
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/charity" element={<CharityPage />} />
      </Routes>
    </Router>
  );
};

export default App;
