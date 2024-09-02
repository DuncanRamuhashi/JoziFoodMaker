import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { FoodFeatch } from './components/FoodFeatch'


function App() {
  

  return (
    <>
        <Navbar/>
        <Hero/>
        <FoodFeatch/>
    </>
  )
}

export default App
