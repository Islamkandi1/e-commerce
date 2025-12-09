"use client"
import React from 'react'
import OrderTable from '../orderTable/OrderTable'
import { useQuery } from '@tanstack/react-query'
import getAllOrder from '@/apis/getAllOrders'
import img from "./../../../assets/images/noData.jpg"
import Image from 'next/image'
const MyOrders = () => {
  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrder
  })
  
  return (
    <>
    {(data?.data?.length ?? 0) < 1  && <section className="flex justify-center items-center min-h-screen overflow-hidden">
      <figure className=" pt-12 md:w-[50%] ">
        <Image src={img} alt="no data to display" className="w-full pt-3 mx-auto" />
      </figure>
    </section> }
    <main className='pt-12'>
      <section className="pt-12 mx-2 md:mx-15 min-h-screen">
        <h2 className='text-[1.7rem] font-bold text-main text-center mb-4  tracking-wide uppercase'>all orders</h2>
        {data?.data!.map((product) => <OrderTable key={product.id} product={product} />)}
      </section>
    </main>
    </>
  )
}

export default MyOrders
