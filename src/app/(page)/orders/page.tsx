import MyOrders from '@/app/_components/myOrders/MyOrders'
import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "My Order",
    description: "Order Summary Page",
};
const Order = async () => {

    return (
        <>
            <MyOrders  />
        </>
    )
}

export default Order
