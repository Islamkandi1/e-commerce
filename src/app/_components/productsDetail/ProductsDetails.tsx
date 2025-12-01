"use client"
import getProductdetails from '@/apis/getProductDetails'
import ProductDetailsSkeleton from '@/loadings/ProductDetailsSkeleton';
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
const ProductsDetails = ({ id }: { id: number }) => {
    const { data, isLoading,isError ,error } = useQuery({
        queryKey: ["productDetails", id],
        queryFn: () => getProductdetails(id)
    });

    //  push category==========================================================

    useEffect(() => {
        if (data) {
            const params = new URLSearchParams(window.location.search);
            params.set("category", data.category);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.pushState({}, "", newUrl);
        }
    }, [data]);
    // handle error============================================================
    if (isError) {
        toast.error(error.message)
    }


    return (
        <main className='border-b border-gray-200'>
            <section className="min-h-screen bg-white pt-12">
                {/* Product Section */}
                <section className="mx-2 md:mx-15  px-4 sm:px-6 lg:px-8 pt-12 pb-5">
                    {isLoading ? <ProductDetailsSkeleton /> : <section className="grid   grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Image Gallery */}
                        <section className=" gap-4 rounded-2xl bg-[#F2F0F1] p-3 overflow-hidden col-span-3 lg:col-span-1">
                            <Image width={500} height={500} priority={true} src={data?.image} alt={data?.productName} className='h-full object-cover w-full' />
                        </section>

                        {/* Product Info */}
                        <section className="space-y-4 col-span-3 lg:col-span-2 ">

                            <section>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-1  capitalize">{data?.productName}</h2>
                            </section>

                            <section className="flex items-center space-x-3">
                                <span className="text-2xl  lg:text-3xl font-bold text-gray-800"> ${data?.price}</span>
                            </section>

                            <p className="text-gray-500 text-[.9rem] lg:text-[1rem]">{data?.description} </p>

                            <section className="border-t border-b border-gray-200 py-6 space-y-6">
                                <section >
                                    <h3 className="font-semibold mb-3">Select Colors</h3>
                                    <section className="flex justify-between items-center space-x-3">
                                        <section className='flex gap-2'>
                                            {data?.Colors.split(",").map((color: string, idx: number) => (
                                                <div key={idx} style={{ background: color }} className={` w-7 h-7 rounded-full border border-gray-400`}></div>
                                            ))}
                                        </section>
                                        <p className=" capitalize font-bold space-x-4 text-2xl">
                                            {data?.brand}
                                        </p>
                                    </section>
                                </section>
                            </section>

                            <section className=" space-x-4">
                                <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                                    Add to Cart
                                </button>
                            </section>
                        </section>
                    </section>}

                </section>
            </section>
        </main>
    )
}

export default React.memo(ProductsDetails)
