import { Facebook, Github, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <main className='bg-[#F3F0F1]'>
            <section className='mx-2 md:mx-15'>
            <section className=' py-7 border-b border-b-gray-300'>
                <section className='lg:flex items-center justify-between'>
                <section className='mb-5 lg:w-[40%]'>
                    <h2 className='uppercase font-extrabold text-[2.5rem]'>SHOP.CO</h2>
                    <p className='text-[#00000092] capitalize text-[1.1rem] mb-3'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    {/* icons social media */}
                    <section className='flex items-center gap-3'>
                        <a href="https://www.linkedin.com/in/islam-kandil/" target='_blank' className='text-[1rem]  w-[42px] h-[42px] flex justify-center items-center rounded-full border border-black hover:bg-black transition-all duration-300 group'> <Linkedin size={22} className='text-black group-hover:text-white transition-all duration-300' /></a>
                        <a href="https://github.com/Islamkandi1" target='_blank' className='text-[1rem]  w-[42px] h-[42px] flex justify-center items-center rounded-full border border-black hover:bg-black transition-all duration-300 group'> <Github size={22} className='text-black group-hover:text-white transition-all duration-300' /></a>
                        <a href="https://www.facebook.com/?locale=en-EN" target='_blank' className='text-[1rem]  w-[42px] h-[42px] flex justify-center items-center rounded-full border border-black hover:bg-black transition-all duration-300 group'> <Facebook size={22} className='text-black group-hover:text-white transition-all duration-300' /></a>
                    </section>
                </section>
                {/* stay update */}
                <section className='bg-black text-white rounded-2xl px-5 py-7 lg:w-[40%]'>
                    <h2 className='uppercase font-extrabold text-[2rem]  mb-5'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    <form action="" className='lg:flex flex-wrap items-center gap-4'>
                    <input type="email" placeholder='Enter Your Mail' className='w-full lg:w-fit lg:grow mb-4 lg:mb-0 px-3 py-2 bg-[#F3F0F1] border border-gray-400 outline-0 rounded-xl placeholder:text-gray-500 text-black' />
                    <button type="submit" className='text-black bg-white rounded-3xl lg:rounded-lg w-full lg:w-fit p-3 capitalize text-[1.1rem] font-medium hover:bg-black hover:text-white border border-transparent hover:border hover:border-gray-700 cursor-pointer transition-all duration-300 '>Subscribe to Newsletter</button>
                    </form>
                </section>
                </section>
                {/* logo */}
            </section>
            <section className='p-5'>
                <p className='text-[#0000009c] text-center capitalize'>© 2000-2021, All rights reserved by islam kandil</p>
            </section>
            </section>
        </main>
    )
}
export default Footer
