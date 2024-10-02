import React from 'react';
import about from '../assets/Images/aboutBack.png';

const About = () => {
  return (
    <div
      className='w-full bg-no-repeat bg-cover bg-center  h-full'
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className='h-full flex flex-col justify-center items-center space-y-10 md:space-y-20 py-20 md:py-32'>
        <h1 className='text-white text-5xl md:text-7xl font-dancing text-center'>
          About Us
        </h1>
        <div className='px-4 md:px-20 lg:px-72'>
          <h1 className='text-white text-base md:text-lg text-justify'>
            I believe that food is more than just nourishment; it’s an experience to be savored and shared. Whether you're craving a hearty South African classic or something with a contemporary twist, I’m here to make your culinary dreams come true. My dishes are crafted with fresh, locally-sourced ingredients and a sprinkle of creativity.
            <br /><br />
            When I’m not cooking up a storm, you’ll find me exploring local markets, trying out new recipes, or spending quality time with family and friends. I’m excited to be part of your food journey and can’t wait to share my passion with you!
            <br /><br />
            Bon appétit!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
