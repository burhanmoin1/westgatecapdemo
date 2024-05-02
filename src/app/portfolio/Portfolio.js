'use client';
import React, { useEffect } from 'react';
import './Portfolio.css';
import Link from 'next/link';
import Frontenac from '../images/Frontenac.jpg';
import CasgrainImage from '../images/Casgrain.jpg';
import Fullum from '../images/Fullum.jpg';
import Sherbrooke from '../images/Sherbrooke.jpg';
import StJacques from '../images/StJacques.jpg';
import Sherbrooketwo from '../images/Sherbrooketwo.jpg';
import Sherbrookethree from '../images/Sherbrookethree.jpg';
import Sherbrookefour from '../images/Sherbrookefour.jpg';
import MarieAnne from '../images/Marieanne.jpg';
import Dandurand from '../images/Dandurand.jpg';
import Hochelaga8578 from '../images/Hochelaga.jpg';
import Hochelaga3657 from '../images/Hochelagatwo.jpg';
import VillImage from '../images/vill.jpg'; 

const PortfolioItem = ({ image, name, description }) => {
  const cleanedName = name.replace(/[\d-]/g, '').trim();

  let link;

  if (name === '2290 SHERBROOKE') {
    link = (
      <a href="sherbrookeone">
          <img
            src={image}
            alt={name}
            className="portfolio-image"
          />
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    );
    } else if (name === '2308 SHERBROOKE') {
      link = (
        <a href="sherbrooketwo">
            <img
              src={image}
              alt={name}
              className="portfolio-image"
            />
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      );
    } else if (name === '2306 SHERBROOKE') {
      link = (
        <a href="sherbrookethree">
            <img
              src={image}
              alt={name}
              className="portfolio-image"
            />
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      );
    } else if (name === '2314 SHERBROOKE') {
      link = (
        <a href="sherbrookefour">
            <img
              src={image}
              alt={name}
              className="portfolio-image"
            />
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      );
  } else {
    link = (
      <Link href={`/property/${cleanedName.replace(/\s+/g, '-').toLowerCase()}`}>
          <img
            src={image}
            alt={name}
            className="portfolio-image"
          />
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    );
  }

  return <div className="portfolio-item">{link}</div>;
};

const Portfolio = () => {
  const portfolioData = [
    { id: 2, image: Frontenac.src, name: '2087 - 2093 Frontenac', description: 'Apartment - Montreal' },
    { id: 6, image: MarieAnne.src, name: '2189 - 2199 Marie-Anne', description: 'Apartment - Montreal'},
    { id: 5, image: Sherbrooke.src, name: '2290 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 4, image: Fullum.src, name: '2300 - 2551 Fullum', description: 'Apartment - Montreal' },
    { id: 10, image: Sherbrookefour.src, name: '2306 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 10, image: Sherbrooketwo.src, name: '2308 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 10, image: Sherbrookethree.src, name: '2314 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 7, image: Dandurand.src, name: '2700 - 2710 Dandurand', description: 'Apartment - Montreal'},
    { id: 3, image: VillImage.src, name: '294 Villienueve Quest', description: 'Apartment - Montreal' },
    { id: 8, image: Hochelaga3657.src, name: '3657 - 3667 De Chambly', description: 'Apartment - Montreal'},
    { id: 10, image: StJacques.src, name: '7388 St Jacques', description: 'Apartment - Montreal'},
    { id: 1, image: CasgrainImage.src, name: '7530 - 7538 Casgrain', description: 'Apartment - Montreal' },
    { id: 8, image: Hochelaga8578.src, name: '8578 - 8590 Baldwin', description: 'Apartment - Montreal'},
    
  ];

  return (
    <div className="portfolio">
      <h1 className='portfolioheading'>PORTFOLIO</h1>
      <p className='portfoliopara'>OUR LATEST ACQUISITIONS</p>
      <hr className="portfolioline" />
      <div className="portfolio-items">
        {portfolioData.map(item => (
          <PortfolioItem
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

  
  export default Portfolio;