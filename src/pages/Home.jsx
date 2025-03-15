import React from 'react';
import '../styles/home.css';  
import Nav from '../components/nav'; 
import Footer from '../components/footer';
import Hero from '../components/hero';
import DonationCategories from "../components/DonationCategories";
const Home = () => {
  return (
    <>
      <Nav />  
     <Hero />
     <DonationCategories />
     <Footer />
    </>
  );
};

export default Home;
