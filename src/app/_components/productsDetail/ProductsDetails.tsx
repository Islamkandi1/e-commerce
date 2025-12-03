"use client"
import getProductdetails from '@/apis/getProductDetails'
import ProductDetailsSkeleton from '@/loadings/ProductDetailsSkeleton';
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import AddToCartBtn from '../addTocartBtn/AddToCartBtn';
const ProductsDetails = ({ id }: { id: number }) => {
    const { data, isLoading, isError, error } = useQuery({
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

                            <section className=" space-x-2 flex items-center">
                                <section className="relative flex items-center ">
                                    <button type="button"  data-input-counter-decrement="counter-input-2" className="flex items-center justify-center text-body bg-neutral-secondary-medium  bg-black text-white  hover:bg-neutral-tertiary-medium hover:text-heading   rounded-xl text-sm  h-10 w-10 cursor-pointer active:scale-[.9] trnsition-all duration-300">
                                        <svg className="w-5 h-5 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" /></svg>
                                    </button>
                                    <input type="text" data-input-counter className="shrink-0 text-heading border-0 bg-transparent text-[1.1rem] font-normal focus:outline-none focus:ring-0 max-w-7 text-center"   value="1" />
                                    <button type="button" data-input-counter-increment="counter-input-2" className="flex items-center justify-center text-body bg-neutral-secondary-medium  bg-black text-white  hover:bg-neutral-tertiary-medium hover:text-heading   rounded-xl text-sm  h-10 w-10 cursor-pointer active:scale-[.9] trnsition-all duration-300">
                                        <svg className="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" /></svg>
                                    </button>
                                </section>
                                <AddToCartBtn width="grow" rounded="rounded-full" text="add to cart" />
                            </section>
                        </section>
                    </section>}

                </section>
            </section>
        </main>
    )
}

export default React.memo(ProductsDetails)
