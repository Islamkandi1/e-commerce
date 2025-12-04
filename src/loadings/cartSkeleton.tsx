import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const CartSkeleton = () => {
    return (
        <main >
            <section >
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <section className="lg:col-span-2 space-y-4">
                        <Skeleton className={`h-[200px] w-full rounded-xl bg-[#b3b0b1]`} />
                    </section>

                    {/* Order Summary */}
                    <section className="lg:col-span-1">
                        <Skeleton className={`h-[300px] w-full rounded-xl bg-[#b3b0b1]`} />
                    </section>


                </section>
            </section>
        </main>
    )
}

export default CartSkeleton
