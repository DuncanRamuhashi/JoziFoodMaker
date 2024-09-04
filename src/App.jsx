import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { FoodFeatch } from './components/FoodFeatch'
import About from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  

  return (
    <>
      <Navbar />
      <section id='home'>
        <Hero />

      </section>
      <section id='menu'>
        <FoodFeatch />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
