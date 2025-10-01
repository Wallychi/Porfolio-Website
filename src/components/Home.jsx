import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <section id='home' className='flex flex-col px-5 pt-25 py-10 gap-4 border-b-1 border-[var(--color-secondary)]'>
        <h1 className='text-5xl font-bold w-1/2'>HI, I AM WALIYULLAHI.</h1>
        <p className='text-lg text-[var(--color-tertiary)]'>A front-end developer passionate about creating clean and interactive web experiences.</p>
        
        <div className='flex w-10/11 items-center gap-4'>
                <div className='flex w-2/3 text-[var(--color-primary)] rounded-full justify-center items-center text-lg font-semibold gap-2 py-1 bg-[var(--color-extra)]'><a href='#contact'>CONTACT ME</a>
                    <div className='flex bg-[var(--color-primary)] px-2 py-2 items-center justify-center rounded-full'>
                        <a href='#contact'><ArrowUpRight className='text-[var(--color-secondary)]' size={20} strokeWidth={2.5} /></a>
                    </div>
                </div>
                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <a href='https://www.linkedin.com/in/adejarewaliyullahi' target='_blank'><img className='w-7' src='public/Icons/linkedin.png' alt='LinkedIn-icon' /></a>
                </div>

                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <img className='w-7' src='public/Icons/instagram.png' alt='LinkedIn-icon' />
                </div>
                
                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <img className='w-7' src='public/Icons/whatsapp.png' alt='LinkedIn-icon' />
                </div>
            </div>
    </section>
  )
}

export default Home