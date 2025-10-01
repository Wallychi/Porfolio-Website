import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <section className='relative bg-[var(--color-primary)] text-[var(--color-secondary)]'>
      <div className='fixed w-full z-50 bg-[var(--color-primary)] border-b-1 border-[var(--color-secondary)]'>
        <Navbar />
      </div>
      <Home />
      <About />
      <Contact />
    </section>
  )
}

export default App