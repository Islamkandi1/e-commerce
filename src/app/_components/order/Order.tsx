import { Item, Res } from '@/types/cart.type';
import React from 'react'
import CheckOut from '../checkOut/CheckOut';
import { Total } from '@/types/total.type';

const Order = ({ data }: { data: Res }) => {
    if (data?.data?.length === 0) return


    const total:Total |undefined =
        data?.data?.reduce(
            (acc: Item, item: Item) => {
                acc.quantity += item.quantity;
                acc.price += item.quantity * item.price;
                return acc;
            },
        )






    return (
        <>
            <section className="lg:col-span-1">
                <section className="bg-white rounded-lg p-6 border border-gray-200 sticky top-15">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                    <section className="space-y-4 mb-6">
                        <section className="flex justify-between text-gray-600 capitalize">
                            <span>count</span>
                            <span className="font-semibold text-gray-900">{total?.quantity}</span>
                        </section>

                        <section className="border-t pt-4">
                            <section className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>${total?.price}</span>
                            </section>
                        </section>
                    </section>



                    {/* Checkout Button */}
                    <CheckOut total={total}/>
                </section>
            </section>

        </>

    )
}

export default Order
