"use client"
import getBrandsProduct from '@/apis/getBrandsProduct'
import { product } from '@/types/product.type'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { SkeletonCard } from '@/loadings/Skeleton'
import toast from 'react-hot-toast'

const BrandProducts = ({ brandName }: { brandName: string }) => {


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["brandproducts", brandName],
        queryFn: () => getBrandsProduct(brandName)
    })

    if(isError){
        toast.error(error.message)
    }

    return (

        <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-4 mb-6'>
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
            {data?.map((product: product) => {
                return <ProductCard product={product} key={product.id} />
            })}
        </section>

    )
}

export default React.memo(BrandProducts)
