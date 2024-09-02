import React from 'react';
import background from '../assets/background.jpg';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      className="flex flex-col justify-center items-center w-full h-[700px] bg-black bg-cover bg-center" 
      style={{ backgroundImage: `url(${background})` }}
    >
   
      <Navbar />
      
    
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg">We are glad to have you here. Explore and enjoy!</p>
      </div>
    </div>
  )
}

export default Hero
