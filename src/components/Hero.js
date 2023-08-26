import React from 'react';
import { Link } from 'react-router-dom';
import restaurant from "./assets/restaurantfood.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container grid">
            <div className="hero-details">
              <h1 className='title'>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quaerat natus, iste aperiam perspiciatis eius facere magnam optio, iure libero accusamus. Quisquam, ipsa itaque optio porro ea exercitationem quas debitis!</p>
              <Link to="/reservation" className="btn btn-primary">Reserve a table</Link>
            </div>

              <img src={restaurant} alt='Resturant' className="hero-image"/>
        </div>
    </section>
  )
}

export default Hero