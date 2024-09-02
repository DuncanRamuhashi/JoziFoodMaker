import React from 'react';
import Logo from '../assets/newLogo.png';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-[#161515] bg-transparent z-10 px-10"> 
      <div className="flex justify-between py-10 px-4">
        <a href="">
          <img src={Logo} className="h-[150px]" alt="Logo" />
        </a>
        <nav className="space-x-5 py-8">
          <a href="" className="text-[#fff72e] text-xl hover:text-white">Home</a>
          <a href="" className="text-[#fff72e] text-xl hover:text-white">Menu</a>
          <a href="" className="text-[#fff72e] text-xl hover:text-white">About</a>
          <a href="" className="text-[#fff72e] text-xl hover:text-white">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
