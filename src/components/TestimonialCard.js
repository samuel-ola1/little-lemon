import React from 'react';
import {
    faStar,
    faStarHalfStroke
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles/testimonialcard.css";



const ratingLevels = {1: faStar, 0.5:faStarHalfStroke}

const TestimonialCard = ({customer}) => {
    const {image, fullName, rating, says} = customer;

  return (
    <article className='card testimonial-card'>
        <img src={image} alt={fullName} />
      <h4>{fullName}</h4>
      <span>
        {rating.map((ratingPoint, index) => 
          <FontAwesomeIcon 
            key={index} 
            icon={ratingLevels[ratingPoint]} 
            size="xs" 
          />
        )}
      </span>
      <blockquote><p>"{says}"</p></blockquote>
    </article>
  )
}

export default TestimonialCard