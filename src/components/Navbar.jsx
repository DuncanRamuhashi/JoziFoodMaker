import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-10 px-10 ${scrolling ? "bg-[#161515]" : "md:bg-transparent"} bg-[#161515]`}>
      <div className="flex flex-row md:flex-row justify-between items-center py-4 px-4">
        <NavLink to="/">
          <h1 className='text-yellow-400 text-5xl font-dancing'>J<span className='text-white'>f</span>M</h1>
        </NavLink>
        <button 
          className="text-[#fff72e] text-3xl md:hidden" 
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav className={`absolute left-0 top-full w-full bg-[#161515] md:relative md:flex md:justify-end md:space-x-5 md:bg-transparent ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <NavLink to="/" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">Home</NavLink>
          <NavLink to="/menu" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">Menu</NavLink>
          <a href="#about" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">About</a>
          <a href="#contact" className="block md:inline text-[#fff72e] text-xl hover:text-white py-2 md:py-0 px-4">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
