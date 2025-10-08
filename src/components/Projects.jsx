import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className='flex flex-col lg:flex-row w-full px-5 lg:px-15 gap-5 lg:gap-0 py-20 border-b-1 border-[var(--color-secondary)]'>
            <h1 className='text-3xl lg:text-5xl font-serif font-bold text-center lg:text-left basis-1/2'>FEATURED PROJECTS</h1>
            <div className='grid grid-cols-1 gap-5 lg:gap-10 basis-1/2'>

                <div className='flex flex-col gap-3 pb-3 rounded-xl border-1 border-[var(--color-secondary)]'>
                <img src='/Images/techty-landing-page.png' alt='Techty Landing Page' className='rounded-t-xl' />
                <div className='flex flex-col gap-3 px-3'>
                    <h2 className='text-2xl font-semibold'>Techty Site</h2>
                    <p className='text-[var(--color-tertiary)]'>A site built purely for the practice of React. It is responsive for mobile, tablets and laptop. React, TailwindCSS were used.</p>
                    <div className='flex items-center gap-5 text-[var(--color-extra)] font-semibold'>
                        <a href='https://techty-seven.vercel.app/' target='_blank' className='pb-1 border-b-1 border-[var(--color-extra)]'>View Site</a>
                        <a href='https://github.com/Wallychi/techty' target='_blank' className='pb-1 border-b-1 border-[var(--color-extra)]'>View Code</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 pb-3 rounded-xl border-1 border-[var(--color-secondary)]'>
                <img src='/Images/techty-landing-page.png' alt='Techty Landing Page' className='rounded-t-xl' />
                <div className='flex flex-col gap-3 px-3'>
                    <h2 className='text-2xl font-semibold'>Techty Site</h2>
                    <p className='text-[var(--color-tertiary)]'>A site built purely for the practice of React. It is responsive for mobile, tablets and laptop. React, TailwindCSS were used.</p>
                    <div className='flex items-center gap-5 text-[var(--color-extra)] font-semibold'>
                        <a href='https://techty-seven.vercel.app/' target='_blank' className='pb-1 border-b-1 border-[var(--color-extra)]'>View Site</a>
                        <a href='https://github.com/Wallychi/techty' target='_blank' className='pb-1 border-b-1 border-[var(--color-extra)]'>View Code</a>
                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Projects