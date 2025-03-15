import React from "react";
import heroImage from "../assets/images/hero.jpg"; 
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div> 
      <div className="hero-content">
        <h1>
          Be the <span className="highlight">Light</span> <br />
          Change a Life
        </h1>
        <p>
          At Nour, we believe in spreading hope and kindness. <br />
          Your donation brings warmth, shelter, and a brighter future to those in need.
        </p>
        <button className="cta-button">Donate now</button>
      </div>
    </section>
  );
}

export default Hero;
