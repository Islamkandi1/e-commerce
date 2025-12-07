import React from 'react'
import NoData from "@/assets/images/noData.jpg"
import Image from 'next/image'
const Nodata = () => {
  return (
    <section className='flex justify-center items-center h-screen'>
      <Image src={NoData} alt="no data to display" className=' w-[700px]'/>
    </section>
  )
}

export default Nodata
