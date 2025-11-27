import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import img from "./../assets/images/hero.png"
import star from "./../assets/images/star.png"
import brand1 from "./../assets/images/brand1.png"
import brand2 from "./../assets/images/brand2.png"
import brand3 from "./../assets/images/brand3.png"
import brand4 from "./../assets/images/brand4.png"
const NewArrivals = React.lazy(() => import("./_components/newArrivals/NewArrivals"));

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
                        <Image className='w-[60px]   sm:w-[90px] absolute top-[50px] right-5 sm:right-[100px] md:right-5 lg:right-[100px]' src={star} alt="star" />
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
            {/* <SkeletonCard /> */}
            {/* new products */}
                <NewArrivals />

        </>
    )
}

export default page
