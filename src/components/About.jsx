import React from "react";
import "./About.css";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineFlag } from "react-icons/md";


const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Nour is a donation platform connecting donors with those in need, bringing light and hope through support in food, education, housing, and medical care.
      </p>
      <div className="about-details">
        <div className="about-card">
          <MdOutlineFlag className="about-icon" />
          <h3>Our Goal</h3>
          <p>We strive for a world where everyone has basic necessities. Nour ensures donations reach those in need efficiently and transparently.</p>
        </div>
        <div className="about-card">
          <FaLightbulb className="about-icon" />
          <h3>Our Vision</h3>
          <p>We unite donors and those in need to foster kindness and support, aiming to expand our impact each year.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
