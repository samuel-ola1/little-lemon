import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';


const Meal = ({meal}) => {
   const { name, price, description, image } = meal

  return (
    <figure className='card'>
        <div>
            <img src={image} alt={name} />
        </div>
        <div>
            <h4 className='title'>{name}</h4>
            <span>{price}</span>
        </div>
        <div>
            <p>{description}</p>
            <p>Order a delivery <FontAwesomeIcon icon={faMotorcycle} /> </p>
        </div>
    </figure>
  )
}

export default Meal