
import Filteration from '@/app/_components/filter/Filter'
import ALlproduct from '@/app/_components/getAllProducts/ALlproduct'
import { Suspense } from 'react'

const Products = () => {

    return (
        <>
            <main className='py-10 px-1'>
                <section className='mx-2 md:mx-15 pt-18 relative'>
                    {/* display data and filter */}
                    <section className='grid grid-cols-1 md:grid-cols-4 gap-9 relative'>
                        {/* filteration */}
                        <Filteration />
                        {/* products */}
                        <section className='md:col-span-3'>
                            <Suspense fallback={<div>Loading products...</div>}>
                            <ALlproduct />
                            </Suspense>
                        </section>
                    </section>
                        
                </section>
            </main>
        </>
    )
}

export default Products
