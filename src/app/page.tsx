import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import img from "./../assets/images/hero.png"
import star from "./../assets/images/star.png"
import brand1 from "./../assets/images/brand1.png"
import brand2 from "./../assets/images/brand2.png"
import brand3 from "./../assets/images/brand3.png"
import brand4 from "./../assets/images/brand4.png"
import men from "./../assets/images/men.png"
import women from "./../assets/images/women.png"
import gym from "./../assets/images/gym.png"
import kids from "./../assets/images/kids.jpg"
import NewArrivals from './_components/newArrivals/NewArrivals';

const page = () => {
    return (
        <>
            {/* hero section */}
            <main className=' bg-[#F2F0F1] mb-10 relative top-16 md:static'>
                <section className='mx-2 md:mx-15 pt-20 md:flex mn-h-screen justify-between items-center'>
                    {/* content */}
                    <section className='content grow'>
                        {/* text */}
                        <section className='mb-8'>
                            <h1 className='uppercase text-[2.3rem] lg:text-[64px] md:mb-6 mb-[1.3rem] font-extrabold leading-9 lg:leading-17 '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p className='text-[#0000007f] text-[.9rem] lg:text-[1rem] capitalize mb-6 max-w-[560px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <Link href="/products">
                                <button type="button" className='capitalize cursor-pointer hover:bg-[#353535] transition-all duration-300 bg-black text-white px-14 py-4 w-full rounded-[62px] text-[1rem] md:w-fit'>
                                    shop now
                                </button>
                            </Link>
                        </section>
                        {/* rate */}
                        <section className='text-center flex flex-wrap md:flex-nowrap  justify-center md:justify-start gap-7' >
                            <section >
                                <h2 className='text-[2.2rem] md:text-[1.3rem] lg:text-[2.2rem] font-bold'>200+</h2>
                                <p className='text-[#0000008d] md:text-[.8rem] lg:text-[1rem] capitalize'>International Brands</p>
                            </section>
                            <section >
                                <h2 className='text-[2.2rem] md:text-[1.3rem] lg:text-[2.2rem] font-bold'>2,000+</h2>
                                <p className='text-[#0000008d] md:text-[.8rem] lg:text-[1rem] capitalize'>High-Quality Products</p>
                            </section>
                            <section >
                                <h2 className='text-[2.2rem] md:text-[1.3rem] lg:text-[2.3rem] font-bold'>30,000+</h2>
                                <p className='text-[#0000008d] md:text-[.8rem] lg:text-[1rem] capitalize'>Happy Customers</p>
                            </section>
                        </section>
                    </section>
                    <section className='image relative'>
                        <Image src={img} alt="main image" />
                        <Image className='w-[90px]   absolute top-2.5 right-5 sm:right-[100px] md:right-5 lg:right-2.5 xl:right-20 xl:top-[100px]' src={star} alt="star" />
                        <Image className='w-[60px]   absolute top-[100px] left-6 sm:top-[190px]  sm:left-[70px] md:top-[100px] md:left-[50px] xl:top-[300px]' src={star} alt="star" />
                    </section>
                </section>
                <section className='bg-black '>
                    <section className=' flex flex-wrap justify-between items-center gap-5  mx-2 md:mx-15 py-8'>
                        <Image className='w-[100px] md:w-[150px]' src={brand1} alt="versace" />
                        <Image className='w-[100px] md:w-[150px]' src={brand2} alt="zera" />
                        <Image className='w-[100px] md:w-[150px]' src={brand3} alt="gucci" />
                        <Image className='w-[100px] md:w-[150px]' src={brand4} alt="prada" />
                    </section>
                </section>
            </main>
            {/* new products */}
            <NewArrivals />
            {/* categories */}
            <main className='mb-11'>
                <section className='mx-2 md:mx-15 bg-[#F2F0F1] rounded-2xl py-11 px-4'>
                    <h2 className='uppercase font-bold text-[2rem] md:text-[2.5rem] text-center mb-4'>BROWSE BY dress STYLE</h2>
                    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <section className='rounded-xl lg:col-span-2 overflow-hidden h-[200px] lg:h-[340px] relative'>
                            <Image src={kids}   alt="kids category" className='object-cover w-full h-full' />
                            <p className='absolute z-10 top-20 left-[100px] text-[2rem] lg:text-[3rem] capitalize font-bold'>kids</p>
                        </section>

                        <section className='rounded-xl overflow-hidden h-[200px] lg:h-[340px] relative'>
                            <Image src={gym} alt="kids category" className='object-cover w-full h-full' />
                            <p className='absolute z-10 top-20 left-10 text-[2rem] lg:text-[3rem] capitalize font-bold'>gym</p>
                        </section>
                        <section className='rounded-xl   overflow-hidden h-[200px] lg:h-[340px] relative'>
                            <Image src={men} alt="men category" className='object-cover w-full h-full' />
                            <p className='absolute z-10 top-20 left-10 text-[2rem] lg:text-[3rem] capitalize font-bold'>formal</p>
                        </section>

                        <section className='rounded-xl  lg:col-span-2 overflow-hidden h-[200px] lg:h-[340px] relative'>
                            <Image src={women} alt="women category" className='object-cover w-full h-full' />
                            <p className='absolute z-10 top-20 left-10 text-[2rem] lg:text-[3rem] capitalize font-bold'>women</p>
                        </section>

                    </section>
                </section>
            </main>
        </>
    )
}

export default page
