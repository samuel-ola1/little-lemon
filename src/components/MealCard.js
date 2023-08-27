import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import "./styles/mealcard.css";


const Meal = ({meal}) => {
   const { name, price, description, image } = meal

  return (
    <article className='card meal-card'>
        <div className="meal-card-image">
            <img src={image} alt={name} />
        </div>
        <div className="meal-card-header">
            <h4 className='title'>{name}</h4>
            <span>{price}</span>
        </div>
        <div className="meal-card-footer">
            <p>{description}</p>
            <Link>Order a delivery <FontAwesomeIcon icon={faMotorcycle} /> </Link>
        </div>
    </article>
  )
}

export default Meal