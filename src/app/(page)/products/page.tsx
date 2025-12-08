
import getBrands from '@/apis/getBrands'
import getSubcategory from '@/apis/getSubCategory'
import Filteration from '@/app/_components/filter/Filter'
import ALlproduct from '@/app/_components/getAllProducts/ALlproduct'
import { Suspense } from 'react'

const Products = async () => {
    const brands = await getBrands()
    const subcategory = await getSubcategory()
    console.log(subcategory)
    return (
        <>
            <main className='py-10 px-1'>
                <section className='mx-2 md:mx-15 pt-18 relative'>
                    {/* display data and filter */}
                    <section className='grid grid-cols-1 md:grid-cols-4 gap-9 relative'>
                        {/* filteration */}
                        <Filteration brands={brands} subcategory={subcategory} />
                        {/* products */}
                        <section className='md:col-span-3'>
                            <Suspense>
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
