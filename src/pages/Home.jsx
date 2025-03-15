import React from 'react';
import '../styles/home.css';  
import Nav from '../components/Nav'; 
import Hero from '../components/hero';
import DonationCategories from "../components/DonationCategories";
import About from "../components/About"; 
import Footer from '../components/footer';
import Cause from "../components/Cause";

const Home = () => {
  return (
    <>
      <Nav />  
      <Hero />
      <Cause /> 
      <DonationCategories />
      <About />  
      <Footer />
    </>
  );
};

export default Home;
