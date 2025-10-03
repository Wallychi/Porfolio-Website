import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <section id='home' className='flex flex-col px-5 pt-25 py-10 gap-4 lg:h-screen border-b-1 border-[var(--color-secondary)]'>
        <h1 className='text-5xl font-bold w-1/2'>HI, I AM WALIYULLAHI.</h1>
        <p className='text-lg text-[var(--color-tertiary)] italic'>A front-end developer passionate about creating clean and interactive web experiences.</p>
        
        <div className='flex items-center gap-5'>
                {/* <div className='flex w-2/3 text-[var(--color-primary)] rounded-full justify-center items-center text-lg font-semibold gap-2 py-1 bg-[var(--color-extra)]'><a href='#contact'>CONTACT ME</a>
                    <div className='flex bg-[var(--color-primary)] px-2 py-2 items-center justify-center rounded-full'>
                        <a href='#contact'><ArrowUpRight className='text-[var(--color-secondary)]' size={20} strokeWidth={2.5} /></a>
                    </div>
                </div> */}

                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <a href='mailto:szetrov@gmail.com'><img className='w-7' src='/Icons/mail.png' alt='LinkedIn-icon' /></a>
                </div>
                
                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <a href='tel:+2348082260759' target='_blank'><img className='w-7' src='/Icons/phone.png' alt='LinkedIn-icon' /></a>
                </div>

                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <a href='https://www.linkedin.com/in/adejarewaliyullahi' target='_blank'><img className='w-7' src='/Icons/linkedin.png' alt='LinkedIn-icon' /></a>
                </div>

                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <img className='w-7' src='/Icons/instagram.png' alt='LinkedIn-icon' />
                </div>
                
                <div className='bg-[var(--color-buttonbg)] p-2 rounded-full'>
                    <a href='https://api.whatsapp.com/send?phone=2348082260759&text=Hi%2C%20I%20found%20you%20online'><img className='w-7' src='/Icons/whatsapp.png' alt='Whatsapp-Icon' /></a>
                </div>
            </div>
    </section>
  )
}

export default Home