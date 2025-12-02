"use client"
import getAllProducts from '@/apis/getProducts'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { product } from '@/types/product.type'
import { SkeletonCard } from '@/loadings/Skeleton'
import toast from 'react-hot-toast'
import Link from 'next/link'

const NewArrivals = () => {

    // cash data=========================================================
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts
    })
    // error handle=======================================================
    
    if (isError) {
        toast.error(error.message)
    }

    return (
        <main>
            <section className='mx-2 md:mx-15 py-8'>
                <h2 className='uppercase text-[2rem] md:text-[2.4rem] font-extrabold text-center mb-[1.4rem] '>NEW ARRIVALS</h2>
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mb-6'>
                    {/* loading */}
                    {isLoading && <>
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                        <SkeletonCard width={"w-full"} />
                    </>}
                    {/* display data */}
                    {data?.data?.slice(0, 8)?.map((product: product) => {
                        return <ProductCard product={product} key={product.id} />
                    })}
                </section>
                {/* view more */}
                <section className={`flex justify-center ${isLoading && "hidden"} `}>
                    <Link href="/products" className='px-12 py-2 border border-gray-300 rounded-3xl capitalize text-[1rem] text-white bg-[#000000] hover:bg-[#353535] transition-all duration-300'>view more</Link>
                </section>
            </section>
        </main>
    )
}

export default NewArrivals
