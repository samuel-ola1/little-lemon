import React from 'react';
import Dishes from '../components/Dishes';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <Dishes />
      <Testimonials />
    </main>
  )
}

export default Home