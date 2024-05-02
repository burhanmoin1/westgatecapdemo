'use client';
import React from 'react';
import './PortfolioContainer.css'; 
import Link from 'next/link';
import Frontenac from './images/Frontenac.jpg';
import CasgrainImage from './images/Casgrain.jpg';
import Fullum from './images/Fullum.jpg';
import { motion } from "framer-motion";

const PortfolioContainer = () => {   

  const servicesData = [
    {
      id: 1,
      image: Frontenac,
      text: '2087 - 2093 Frontenac',
      description: 'Apartment - Montreal',
      className: 'first-service', // Class for the first image
    },
    {
      id: 2,
      image: CasgrainImage,
      text: '7530 - 7538 Casgrain',
      description: 'Apartment - Montreal',
      className: 'second-service', // Class for the second image
    },
    {
      id: 4,
      image: Fullum,
      text: '2300 - 2551 Fullum',
      description: 'Apartment - Montreal',
      className: 'fourth-service', // Class for the third image
      },

  ];
  return (
    <div className="services-container">
      <div className="heading-container">
        <h2 className="main-heading">Portfolio</h2>
        <h2 className="second-heading">Our Latest Acquisitions</h2>
      </div>
      {servicesData.map((service, index) => (
         <Link
         key={service.id}
         href={`/property/${service.text.toLowerCase().replace(/\s+/g, '-').split('-').pop()}`}
         className="service-link"
       >
        <motion.div initial={{y:100}} whileInView={{y:0, scale:1.1}}
              transition={{delay: 0.1, duration: 0.2}} key={service.id} className={`service-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="image-container">
          <motion.img
              src={service.image.src}
              alt={`${service.text.toLowerCase().replace(/\s+/g, '-')}`}
              className={`service-image ${service.className}`}
          />
          </div>
          <div className="text-container">
            <h3 className="service-heading">{service.text}</h3>
            <p className='service-para'>{service.description}</p>
          </div>
        </motion.div>
        </Link>
      ))}
      <Link href="/portfolio" className="explore-more-container">
        <button className="explore-more-button">
        Explore More &#8594;
        </button>
      </Link>
    </div>
  );
};

export default PortfolioContainer;