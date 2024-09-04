import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import { Contact } from '../components/Contact'

export const HomePage = () => {
  return (
      <div>
          <Hero isHome={true}/>
          <section id='about'>
              <About />
          </section>
          <section id='contact'>
              <Contact />
          </section>
      </div>
  )
}
