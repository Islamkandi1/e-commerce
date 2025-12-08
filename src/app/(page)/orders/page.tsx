import getAllOrder from '@/apis/getAllOrders'
import MyOrders from '@/app/_components/myOrders/MyOrders'
import React from 'react'
import img from "./../../../assets/images/noData.jpg"
import Image from 'next/image'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "My Order",
    description: "Order Summary Page",
};
const Order = async () => {
    const { data } = await getAllOrder()
    if (data!.length < 1) {
        return <main className="flex justify-center items-center md:h-screen overflow-hidden">
            <figure className=" pt-12 md:w-[50%] ">
            <Image src={img} alt="no data to display" className="w-full pt-3 mx-auto" />
        </figure>
        </main> 
    }
    return (
        <>
            <MyOrders data={data} />

        </>
    )
}

export default Order
