import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; // Assuming you're using this icon
import './ServicesCard.css'; // Import the CSS file for ServicesCard

const ServicesCard = ({ item, index }) => {
  const { name, desc } = item;

  return (
    <div className='services-card'>
      <h2 className='services-card-title'>{name}</h2>
      <p className='services-card-desc'>{desc}</p>
    
      <div className='services-card-footer'>
        <Link to="/doctors" className="icon-link">
          <div className="circle-icon">
            <BsArrowRight className="arrow-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
