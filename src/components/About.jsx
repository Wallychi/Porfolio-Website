import React from 'react'

const About = () => {
    return (
        <section id='about' className='flex flex-col px-5 py-10 pt-20 gap-7 border-b-1 border-[var(--color-secondary)]'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>
                    ABOUT ME
                </h1>
                <p className='text-xl font-semibold'>
                    I am a front-end developer based in Ibadan,Nigeria.
                </p>
                <p className='text-[var(--color-tertiary)]'>
                    Specialize in JavaScript, React, and Tailwind CSS, and I enjoy turning ideas into responsive, user-friendly websites.
                    Evolving software developer passionate about innovation.
                    Currently looking for opportunities to grow as a developer by collaborating on impactful projects.
                    When I am not coding, you will find me reading tech blogs, exploring new tools, or sketching design ideas.
                </p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>MY CAPABILITIES</h1>
                <p className='text-[var(--color-tertiary)]'>I am always looking to add more skills, but these are the few skills i am able to apply.</p>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>HTML</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>CSS</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>JAVASCRIPT</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>PYTHON</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>REACT</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>GITHUB</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>TAILWIND CSS</div>
                    <div className='text-center border-1 border-[var(--color-secondary)] p-1 rounded-full text-sm font-semibold'>VS CODE</div>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>MY EXPERIENCE</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-semibold'>Freelance Developer</p>
                        <p className='text-[var(--color-tertiary)]'>Mar 2025 - Till Date</p>
                    </div>

                    <p className='text-[var(--color-tertiary)]'>I worked on different project gotten from upwork, fiverr and other freelancing networks.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-semibold'>Front-End Intern</p>
                        <p className='text-[var(--color-tertiary)]'>Mar 2025 - Jan 2026</p>
                        <p className='text-[var(--color-extra)] font-semibold italic'>Larva Coding Academy</p>
                    </div>

                    <p className='text-[var(--color-tertiary)]'>
                        Developed responsive user interfaces using HTML, CSS, and React.
                        Wrote reusable React components to speed up development.
                        Collaborated with designers to turn wireframes into functional web pages.
                        Participated in code reviews and learned industry best practices for clean coding.
                    </p>

                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>MY EDUCATION</h1>

                <div className='text-[var(--color-tertiary)]'>
                    <p>B.Sc Geology and Mineral Science</p>
                    <p className='font-semibold text-[var(--color-extra)] italic'>University of Ilorin</p>
                    <p>2018 -2024</p>
                </div>
            </div>
        </section>
    )
}

export default About