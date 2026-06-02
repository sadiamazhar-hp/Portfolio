import React, { useEffect, useRef } from 'react';
import { fadeInAndScale, slideInFromLeft, fadeInAnimation } from '../animation.jsx';
import Typewriter from './Typewriter.jsx';

const About = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const words = ['Welcome To My Portfolio', 'Im Full-Stack Developer'];

  useEffect(() => {
    fadeInAndScale(boxRef.current);
    slideInFromLeft(textRef.current);
    fadeInAnimation(imgRef.current);
  }, []);

  return (
    <section id="aboutus">
      <div className="aboutus-bg-container">
        <div className="aboutus-bg"></div>
      </div>
      <div className="aboutus-content">
        <img
          ref={imgRef}
          className="aboutus-image"
          src="./images/girlimage.png"
          alt="Sadia Mazhar"
        />
        <div className="aboutus-text">
          <h2 ref={textRef} id="titlename">SADIA MAZHAR</h2>
          <p className="title1">
            <Typewriter words={words} />
          </p>
          <a href="./images/sadiaresume.pdf" download>
            <button ref={boxRef} id="resume">RESUME</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
