import React from 'react'
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { Item } from '@/types/cart.type';
const CardItems = ({ item }: { item: Item }) => {
    console.log(item);

    return (
        <section className="bg-white rounded-lg p-4 md:p-6 border-2 border-black shadow-sm">
            <section className="flex  flex-wrap gap-4">
                {/* Product Image */}
                <section className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.productName}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </section>

                {/* Product Details */}
                <section className="flex-1 ">
                    <section className="flex  justify-between items-start   mb-2">
                        <section>
                            <h3 className="font-semibold text-lg md:text-xl ">{item.productName}</h3>
                            <p className="text-[#00000093]">{item.productDescription.split(" ",10).join(" ")}</p>
                        </section>
                        <button
                            className="text-red-500 hover:text-red-700 p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </section>


                    <section className="flex items-center justify-between mt-4">
                        <p className="text-xl md:text-2xl font-bold">${item.price}</p>

                        {/* Quantity Controls */}
                        <section className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
                            <button

                                className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                                className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default CardItems
