'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2 className='contact-heading'>Get In Touch</h2>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
          1396,
          Sainte-Catherine,
          Montreal
          </a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          <a href="mailto:info@example.com">info@gestionimmobilieremontreal.com</a>
        </div>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>
        <button className="learn-more-button">
        Submit Message &#8594;
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
