import React from 'react'
import Logo from '../assets/Jozi2.jpg'
const Navbar = () => {
  return (
    <div className='w-full  bg-black justify-between'> 
    <div className='flex  justify-around  py-10 '>
        <a href=''>
        <img src={Logo} className='h-[150px]'/>
        </a>
    
     <div className=''>

      </div>
         <nav className='space-x-5 py-8'>
          <a href='' className='text-[#fff72e] text-xl hover:text-white '>Home</a>
          <a  href='' className='text-[#fff72e] text-xl hover:text-white '>Menu</a>
          <a href='' className='text-[#fff72e] text-xl hover:text-white '>About</a>
          <a href='' className='text-[#fff72e] text-xl hover:text-white'>Contact</a>

          </nav> 


        </div>
  </div>
  )
}

export default Navbar