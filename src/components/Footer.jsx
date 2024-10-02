import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div className='flex flex-col bg-yellow-400 h-auto items-center justify-center text-white py-8'>
      <div className='text-center'>
        <p className='text-sm md:text-base'>6037 South BLVD CHARLOTTE, KZN 0746195664</p>
      </div>
      <div className='flex flex-wrap justify-center md:space-x-20 space-x-4 mt-4 font-bold uppercase'>
        <div>
          <a href='/' className='hover:underline'>HOME</a>
        </div>
        <div>
        <Link to="/menu" className="block md:inline text-white hover:underline">Menu</Link>
        </div>
        <div>
          <a href='#about' className='hover:underline'>About</a>
        </div>
        <div>
          <a href='#contact' className='hover:underline'>Contact</a>
        </div>
      </div>
      <div className='flex flex-wrap justify-center space-x-4 mt-4 text-[10px] md:text-sm'>
        <div>
          <p>pizzeria</p>
        </div>
        <div>
          <p>All rights reserved</p>
        </div>
        <div>
          <p>Design by Elizabeth, Samuel, and Duncan</p>
        </div>
      </div>
    </div>
  );
};
