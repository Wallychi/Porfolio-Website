import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='flex flex-col px-5 py-5 pt-20 gap-5'>
            <h1 className='text-4xl font-bold'>LET'S CONNECT</h1>
            <div>
                <p>For more info, here's my <a href="Documents/Waliyullahi CV.pdf" download target="_blank" rel="noopener noreferrer" className=' px-2 py-1 rounded-xl bg-[var(--color-buttonbg)] font-bold'>resume</a></p>
            </div>

            <form className='flex flex-col gap-5'>
                <input type='text' placeholder='Name' className='text-[var(--color-secondary)] bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' />
                <input type='email' placeholder='Email' className='bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' />
                <input type='text' placeholder='Subject' className='bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' />
                <textarea placeholder='Message' className='bg-[var(--color-buttonbg)] px-4 w-full h-50 py-2 rounded-lg'></textarea>
                <button type='submit' className='bg-[var(--color-extra)] w-1/3 py-3 rounded-full text-[var(--color-primary)] font-semibold text-xl'>SUBMIT</button>
            </form>
        </section>
    )
}

export default Contact