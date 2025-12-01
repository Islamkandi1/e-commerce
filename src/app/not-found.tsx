import Image from 'next/image'
import React from 'react'
import notFound from "@/assets/images/NotFound.png"
const NotFound = () => {
    return (

        <section className='flex justify-center items-center h-screen'>
            <Image src={notFound} alt="no data to display" className=' w-[800px]' />
        </section>

    )
}

export default NotFound
