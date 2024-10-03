import React from 'react';
import './Hero.css';
import logo from '../../../assets/hero/heroImage.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Akanksha</h1>
        <p>I'm a second year engineering student with an avid interest in frontend web development. Enjoy this resume! </p>
        <button className="contact-button">Contact Me</button>
      </div>
      <div className="hero-image">
        <img src={logo} alt="Ada Character" />
      </div>
    </section>
  );
};

export default Hero;
