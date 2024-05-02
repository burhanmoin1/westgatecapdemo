'use client';
import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from './images/Casgrain.jpg';
import { motion, useScroll, useTransform } from "framer-motion";
import './FirstComponent.css';

const FirstComponent = () => {
  const ref = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerHeight, setContainerHeight] = useState(700);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start" , "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0,0.7], [1,0])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // Calculate the new height based on scroll position
      const newHeight = 600 - scrollPosition * 0.51; // Adjust the speed by changing the multiplier
      setContainerHeight(newHeight >= 700 ? newHeight : 600); // Ensure the minimum height is 100px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    transform: `translateY(-${scrollPosition * 0.1}px)`, // Adjust the speed by changing the multiplier
    height: `${containerHeight}px`,
    opacity
  };

  const handleButtonClick = () => {
    let scrollAmount = 800;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 500;
    }
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  return (
    <motion.div ref={ref} className="first-container" style={containerStyle}>
      <div className="overlay"></div>
      <div className="content">
        <h1  className='first-heading'>Building The Foundation To Your Dreams</h1>
        <button className="arrow-button" onClick={handleButtonClick}>&#8595;</button>
      </div>
    </motion.div>
  );
};

export default FirstComponent;
