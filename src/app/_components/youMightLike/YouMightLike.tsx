"use client"
import getAllProducts from '@/apis/getProducts';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import ProductCard from '../productCard/ProductCard';
import { product, ProductResponse } from '@/types/product.type';
import { SkeletonCard } from '@/loadings/Skeleton';
import toast from 'react-hot-toast';

const YouMightLike = ({ id }: { id: number }) => {

    const { data, isLoading, error } = useQuery<ProductResponse>({
        queryKey: ["mightLike", id],
        queryFn: getAllProducts
    });

    if (error) {
        toast.error(error.message)
    }
    
    return (
        <>
            <main>
                <section className='mx-2 md:mx-15 py-8'>
                    <h2 className='text-[2rem] md:text-[2.3rem] xxl:text-[2.7rem] uppercase text-center font-extrabold mb-6'>you might also like </h2>
                    <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {isLoading && <>
                            <SkeletonCard width={"w-full"} />
                            <SkeletonCard width={"w-full"} />
                            <SkeletonCard width={"w-full"} />
                            <SkeletonCard width={"w-full"} />
                            <SkeletonCard width={"w-full"} />
                            <SkeletonCard width={"w-full"} />
                        </>}
                        {data?.data?.map((product: product) => <ProductCard product={product} key={product.id} />)}
                    </section>
                </section>
            </main>
        </>
    )
}

export default React.memo(YouMightLike)
