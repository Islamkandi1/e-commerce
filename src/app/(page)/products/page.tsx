
import Filter from '@/app/_components/filter/Filter'
import ALlproduct from '@/app/_components/getAllProducts/ALlproduct'
import React from 'react'

const Products = () => {
    return (
        <>
            <main className='py-10'>
                <section className='mx-2 md:mx-15 pt-18'>

                    <section className='grid grid-cols-1 md:grid-cols-4 gap-9'>
                        {/* filteration */}
                        <section className='shadow-2xl p-5 rounded-2xl h-fit'>
                            <Filter />
                        </section>
                        {/* products */}
                        <section className='md:col-span-3'>
                            <ALlproduct />
                        </section>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Products
