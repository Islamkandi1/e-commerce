import React from 'react'
import OrderTable from '../orderTable/OrderTable'
import {  OrderProducts } from '@/types/order.type'

const MyOrders = ({data}:{data:OrderProducts[]|null}) => {
  return (
            <main className='pt-12'>
                <section className="pt-12 mx-2 md:mx-15 min-h-screen">
                    <h2 className='text-[1.7rem] font-bold text-main text-center mb-4  tracking-wide uppercase'>all orders</h2>
                    {data?.map((product) => <OrderTable key={product.id} product={product} />)}
                </section>
            </main>
  )
}

export default MyOrders
