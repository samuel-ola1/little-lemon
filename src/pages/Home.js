import React from 'react';
import Dishes from '../components/Dishes';
import Hero from '../components/Hero';
import History from '../components/History';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <Dishes />
      <Testimonials />
      <History />
    </main>
  )
}

export default Home