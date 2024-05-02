'use client';
import React, {useEffect} from 'react';
import AboutUs from '../images/Building4.jpg';
import './AboutUsFull.css';

const AboutUsFull = () => {
    return (
      <div className="about-us-full-container">
        <img src={AboutUs.src} alt="About Us" className="about-us-full-image" />
        <div className="about-us-full-details">
          <h2 className='about-us-full-heading'>About Us</h2>
          <p>
          Westgate Capital is a leading real estate firm specializing in the acquisition and management of prime properties across strategic locations in Canada. With a primary focus on key markets such as Montreal, and Quebec City.<br></br>

        <br></br>Driven by strategic acquisitions and disposals, Westgate Capital is swiftly emerging as a frontrunner in the real estate sector in Quebec. Our massive portfolio grows daily and is encompassing diverse range of properties currently excluded to apartment complexes currently. All meticulously curated to offer safe and high-quality living environments for our tenants.<br></br>

        <br></br>Considering it is just the beginning for us as a realtor, our company has evolved into a dynamic entity boasting a large team. Westgate Capital remains steadfast in its growth and commitment to maintaining the standard as a trusted and dependable landlord, unwaveringly dedicated to providing secure and superior housing solutions for our valued tenants.
          </p>
        </div>
      </div>
    );
  }
  
  export default AboutUsFull;
