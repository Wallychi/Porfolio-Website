import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='flex flex-col lg:flex-row px-5 lg:px-15 py-5 pt-20 gap-5 lg:gap-0'>
            <div className='flex flex-col gap-5 lg:gap-6 lg:basis-1/2'>
                <h1 className='text-4xl lg:text-5xl font-serif font-bold'>LET'S CONNECT</h1>
                <div>
                    <p>For more info, here's my <a href="Documents/Waliyullahi CV.pdf" download target="_blank" rel="noopener noreferrer" className=' px-2 py-1 rounded-md bg-[var(--color-extra)] text-[var(--color-primary)] font-bold'>resume</a></p>
                </div>

                <div className='hidden lg:flex lg:items-center lg:gap-5 '>
                    <div className="bg-[var(--color-buttonbg)] p-2 rounded-full">
                        <a
                            href="https://www.linkedin.com/in/adejarewaliyullahi"
                            target="_blank"
                        >
                            <img
                                className="w-7"
                                src="/Icons/linkedin.png"
                                alt="LinkedIn-icon"
                            />
                        </a>
                    </div>

                    <div className="bg-[var(--color-buttonbg)] p-2 rounded-full">
                        <img
                            className="w-7 "
                            src="/Icons/instagram.png"
                            alt="Instagram-icon"
                        />
                    </div>

                    <div className="bg-[var(--color-buttonbg)] p-2 rounded-full">
                        <a href="https://api.whatsapp.com/send?phone=2348082260759&text=Hi%2C%20I%20found%20you%20online">
                            <img
                                className="w-7"
                                src="/Icons/whatsapp.png"
                                alt="Whatsapp-Icon"
                            />
                        </a>
                    </div>

                </div>
            </div>

            <div className='flex flex-col gap-5 lg:basis-1/2'>
                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg'>Name</label>
                        <input type='text' className='focus:outline-0 text-[var(--color-secondary)] bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg'>Email</label>
                        <input type='email' className='focus:outline-0 bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg'>Subject</label>
                        <input type='text' className='focus:outline-0 bg-[var(--color-buttonbg)] px-4 w-full py-2 rounded-lg' required />

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg'>Message</label>
                        <textarea className='focus:outline-0 bg-[var(--color-buttonbg)] px-4 w-full h-50 py-2 rounded-lg' required />

                    </div>
                    <button type='submit' className='bg-[var(--color-extra)] w-1/3 py-3 rounded-full text-[var(--color-primary)] font-semibold text-xl'>SUBMIT</button>
                </form>

            </div>

        </section>
    )
}

export default Contact