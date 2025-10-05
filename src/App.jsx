import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <section className='relative bg-[var(--color-primary)] text-[var(--color-secondary)] font-roboto'>
      <div className='fixed w-full z-50 bg-[var(--color-primary)] border-b-1 border-[var(--color-secondary)]'>
        <Navbar />
      </div>
      <Home />
      <About />
      <Contact />
      <Analytics />
    </section>
  )
}

export default App