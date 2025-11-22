import React from 'react'
import { projectData } from '../../public/Constants/data'

const Projects = () => {
    return (
        <section id='projects' className='flex flex-col w-full px-5 lg:px-15 gap-5 lg:gap-7 py-20 border-b-1 border-[var(--color-secondary)]'>
            <h1 className='text-3xl lg:text-5xl font-serif font-bold text-center'>FEATURED PROJECTS</h1>
            
            <div className='grid grid-cols-1 gap-5 lg:gap-10'>
                {projectData.map((item) => (
                    <div className='flex flex-col lg:flex-row gap-3 pb-3 lg:p-3 rounded-xl border-1 border-[var(--color-secondary)]'>
                        <div className='lg:basis-1/2'>
                            <img src={item.img} alt={item.title} className='rounded-t-xl lg:rounded-xl' />
                        </div>
                        <div className='flex flex-col justify-end gap-3 px-3 lg:basis-1/2'>
                            <h2 className='text-2xl lg:text-4xl font-semibold'>{item.title}</h2>
                            <p className='text-[var(--color-tertiary)]'>{item.description}</p>
                            <div className='flex items-center gap-5 text-[var(--color-extra)] font-semibold'>
                                <a href={item.github} target='_blank' className='p-1 border-b-1 border-[var(--color-extra)] hover:text-[var(--color-primary)] hover:bg-[var(--color-extra)] hover:rounded-xl'>View Site</a>
                                <a href={item.link} target='_blank' className='p-1 border-b-1 border-[var(--color-extra)] hover:text-[var(--color-primary)] hover:bg-[var(--color-extra)] hover:rounded-xl'>View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects