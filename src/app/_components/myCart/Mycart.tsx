"use client"
import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import CardItems from '../cartItem/CardItems';
import { Item, Res } from '@/types/cart.type';
import toast from 'react-hot-toast';
import CartSkeleton from '@/loadings/cartSkeleton';
import Order from '../order/Order';
const Mycart = ({ res }: { res: Res }) => {
    // ------------------------cash data-----------------------------------------------------
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["cart"],
        queryFn: () => res
    })
    // -----------------------error-------------------------------------------------
    if (isError) {
        toast.error(error.message)
    }

    return (
        <main className=" bg-gray-50 md:p-8 ">
            <section className="pt-20 md:pt-15 mx-2 md:mx-15">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase">YOUR CART</h1>
                {data?.data?.length === 0 && <section className="bg-white rounded-lg p-12 text-center">
                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                </section>}
                {isLoading ? <CartSkeleton /> : <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <section className="lg:col-span-2 space-y-4">
                        {data?.data?.map((item: Item) => <CardItems key={item.id} item={item} />)}
                    </section>

                    {/* Order Summary */}
                    <Order data={data ?? { data: [], error: null }} />


                </section>}

            </section>
        </main>
    )
}

export default Mycart
