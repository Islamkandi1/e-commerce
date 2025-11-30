import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductDetailsSkeleton = () => {
    return (
        <>
            <section className="grid   grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Image Gallery */}
                <section className=" gap-4 rounded-2xl bg-[#F2F0F1] p-3 overflow-hidden col-span-3 lg:col-span-1">
                    <Skeleton className={`h-[400px] w-full rounded-xl bg-[#b3b0b1]`} />
                </section>

                {/* Product Info */}
                <section className="space-y-4 col-span-3 lg:col-span-2 ">

                    <section>
                        <Skeleton className="h-9 w-full  bg-[#b3b0b1]" />
                    </section>

                    <section className="flex items-center space-x-3">
                        <Skeleton className="h-7 w-[60px]  bg-[#b3b0b1]" />
                    </section>

                    <Skeleton className="h-24 w-full  bg-[#b3b0b1]" />

                    <section className="border-t border-b border-gray-200 py-6 space-y-6">
                        <section >
                            <h3 className="font-semibold mb-3">Select Colors</h3>
                            <section className="flex justify-between items-center space-x-3">
                                <section className='flex gap-2'>
                                    <Skeleton className="h-7 w-7 rounded-full bg-[#b3b0b1]" />
                                    <Skeleton className="h-7 w-7 rounded-full bg-[#b3b0b1]" />
                                </section>
                                <Skeleton className="h-9 w-[60px] mb-3 bg-[#b3b0b1]" />
                            </section>
                        </section>
                    </section>

                    <section className=" space-x-4">
                        <Skeleton className="h-12 rounded-full w-full mb-3 bg-[#b3b0b1]" />
                    </section>
                </section>
            </section>
        </>
    )
}

export default ProductDetailsSkeleton
