'use client';
import React from 'react';
import AboutUs from './images/Building4.jpg';
import './AboutUsComponent.css';
import Link from 'next/link';
import Image from 'next/image';


const AboutUsComponent = () => {
    return (
      <div className="about-us-container">
        <Image src={AboutUs.src} alt="About Us"  width={600} height={600} className="about-us-image" />
        <div className="about-us-details">
          <h2 className='about-us-heading'>About Us</h2>
          <p>
            Westgate Capital is a leading real estate company with a commitment to providing outstanding service and value to buyers and sellers.
            We are known for developing quality working relationships with our clientele; relationships based on respect, integrity, and trust.
          </p>
          <Link href="/about-us" className="learn-more-container">
        <button className="learn-more-button">
        Learn More &#8594;
        </button>
      </Link>
        </div>
      </div>
    );
  }
  
  export default AboutUsComponent;
