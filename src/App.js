import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import About from './Components/About'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
