import React from 'react';
import customer1 from './assets/customer1.jpg';
import customer2 from './assets/customer2.jpg';
import customer3 from './assets/customer3.jpg';
import customer4 from './assets/customer4.jpg';
import TestimonialCard from './TestimonialCard';


const customers = [
    {
      fullName: 'Maria Sanchez',
      image: customer1,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Antony Clifton',
      image: customer2,
      rating: [1, 1, 1, 1, 1],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Brandon Ming',
        image: customer4,
        rating: [1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Tamika Jackson',
      image: customer3,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];


const Testimonials = () => {



  return (
    <section>
        <div className="container">
            <h2 className='title'>Tales of Culinary Bliss Shared by Our Guests</h2>
            {
                customers.map((customer, index) => (
                    <TestimonialCard customer={customer} key={index}/>
                ))
            }
        </div>


    </section>
  )
}

export default Testimonials