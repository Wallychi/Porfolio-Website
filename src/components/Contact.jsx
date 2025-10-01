import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='flex flex-col px-5 py-5 pt-20 gap-5'>
            <h1 className='text-4xl font-bold'>LET'S CONNECT</h1>
            <div>
                <p>Say hello at <span className='underline underline-offset-6'>szetrov@gmail.com</span></p>
                <p>For more info, here's my <span className='underline underline-offset-6'>resume</span> </p>
            </div>

            <form className='flex flex-col gap-3'>
                <label className='text-xl'>Name</label>
                <input type='text' className='bg-[var(--color-buttonbg)] not-first:px-4 w-full py-2 rounded-lg' />
                <label className='text-xl'>Email</label>
                <input type='text' className='bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' />
                <label className='text-xl'>Subject</label>
                <input type='text' className='bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' />
                <label className='text-xl'>Message</label>
                <textarea className='bg-[var(--color-buttonbg)] px-4 w-full h-50 py-2 rounded-lg'></textarea>
                <button type='submit' className='bg-[var(--color-extra)] w-1/3 py-3 rounded-full text-[var(--color-primary)] font-semibold text-xl'>SUBMIT</button>
            </form>
        </section>
    )
}

export default Contact