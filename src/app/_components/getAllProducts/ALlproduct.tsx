"use client"
import getAllProducts from '@/apis/getProducts'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../productCard/ProductCard'
import { product } from '@/types/product.type'
import toast from 'react-hot-toast'
import { SkeletonCard } from '@/loadings/Skeleton'
import MyPagination from '../pagination/Pagination'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const ALlproduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();
    // cash data=========================================================
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products", currentPage,queryString],
        queryFn: () => getAllProducts()
    })
    // error handle=======================================================
    if (isError) {
        toast.error(error.message)
    }
    return (
        <>
        <section >
            <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4 mb-6'>
                {/* display data */}
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
                {data?.data?.map((product: product) => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </section>
            <MyPagination data={data?.pageInfo} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </section>
        </>
    )
}

export default ALlproduct
