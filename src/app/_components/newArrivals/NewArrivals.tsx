"use client"
import getAllProducts from '@/apis/getProducts'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { product } from '@/types/product.type'
import { SkeletonCard } from '@/common/Skeleton'
import toast from 'react-hot-toast'

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
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
            </section>
        </main>
    )
}

export default NewArrivals
