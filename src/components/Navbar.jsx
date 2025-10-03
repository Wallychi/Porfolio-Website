import { BriefcaseBusiness, Contact, House, Menu, Moon, PanelsTopLeft, Sun } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
  // const [toogle, setToogle] = useState(true)
  const [menuState, setMenuState] = useState(false)
  return (
    <section className='flex w-full px-5 py-3 items-center justify-between text-[var(--color-tertiary)]'>
      <div className='text-xl font-bold'>ADEJARE WALIYULLAHI</div>
      <div className='flex items-center gap-2'>
        <Menu onClick={()=>{setMenuState(!menuState)}} className='flex lg:hidden' size={30} strokeWidth={2.5} />
        {menuState ? <div className='flex italic absolute top-15 right-0 flex-col w-full text-2xl gap-3 h-screen items-center justify-center bg-[var(--color-primary)] text-[var(--color-secondary)]'>
          <a href='#home' onClick={()=>{setMenuState(false)}}><nav className='flex gap-3 items-center'><House strokeWidth={2.5} /> HOME</nav></a>
          <a href='#about' onClick={()=>{setMenuState(false)}}><nav className='flex gap-3 items-center'><PanelsTopLeft strokeWidth={2.5} /> ABOUT</nav></a>
          <a href='#project' onClick={()=>{setMenuState(false)}}><nav className='flex gap-3 items-center'><BriefcaseBusiness strokeWidth={2.5} /> PROJECTS</nav></a>
          <a href='#contact' onClick={()=>{setMenuState(false)}}><nav className='flex gap-3 items-center'><Contact strokeWidth={2.5} /> CONTACT</nav></a>
        </div>
          : ""}
        {/* <div className='border-1 border-[var(--color-tertiary)] rounded-full p-1'>
          {toogle ? <Sun onClick={() => {
            setToogle(false); document.documentElement.style.setProperty(
              "--color-primary",
              "white"
            );
            document.documentElement.style.setProperty(
              "--color-secondary",
              "black"
            );
          }} size={25} strokeWidth={2.5} /> : <Moon onClick={() => {
            setToogle(!toogle); document.documentElement.style.setProperty(
              "--color-primary",
              "black"
            );
            document.documentElement.style.setProperty(
              "--color-secondary",
              "white"
            );
          }} size={25} strokeWidth={2.5} />}
        </div> */}
      </div>
    </section>
  )
}

export default Navbar