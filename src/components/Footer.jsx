import React from 'react'

export const Footer = () => {
  return (
      <div className='flex bg-yellow-400 h-[280px] items-center justify-center flex-col text-white'>
          <div>

              <p> 6037  South BLVD CHARLOTTE, GP 0746195664   </p>

          </div>
          <div className='flex space-x-28 mt-8 font-bold text-white px-6'>
              <div>
                  <p className>HOME</p>
              </div>
              <div>
                  <p>MENU</p>
              </div>
              <div>
                  <p>CATERING MENU</p>
              </div>
              <div>
                  <p>HIRING</p>
              </div>

          </div>


          <div className='flex space-x-7 mt-8 text-[12px] text-white'>
              <div>
                  <p>500degreepizzeria 2016 </p>
              </div>
              <div>
                  <p>All rights reserved</p>
              </div>
              <div>
                  <p>Design  by DSKY </p>
              </div>


          </div>



      </div>
  )
}
