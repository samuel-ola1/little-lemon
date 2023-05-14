import React from 'react';
import { Link } from 'react-router-dom';
import greekSalad from "./assets/greek-salad.jpg";
import bruschetta from "./assets/bruschetta.svg";
import lemonDessert from "./assets/lemon-dessert.jpg";
import MealCard from './MealCard';
import "./dishes.css";


const meals = [
    {
      name: 'Greek Salad',
      image: greekSalad,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschetta,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessert,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];


const Dishes = () => {
  return (
    <section className="dishes">
      <div className="container">
        <div className="dishes-header">
          <h2 className='title'>This weeks specials</h2>
          <Link to="" className="btn">Online Menu</Link>
        </div>
        <div className="meals-container">
          {
              meals.map((meal) => (
                  <MealCard meal={meal} key={meal.name}/>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Dishes