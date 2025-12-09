import React from 'react'
import Image from 'next/image'
import { product } from '@/types/product.type'
import Link from 'next/link'
import AddToCartBtn from '../addTocartBtn/AddToCartBtn'
const ProductCard = ({ product }: { product: product }) => {



    return (
        <>
            <section className='w-full rounded-2xl overflow-hidden shadow-2xl '>
                <Link href={`/productDetails/${product.id}`} >
                    <figure className='  relative h-[300px]'>
                        <Image width={400} height={300} src={product.image} alt={product.productName} className=' h-full object-cover' />
                    </figure>
                    <figcaption className='p-5 pb-1'>
                        {/* description */}
                        <section className='mb-3'>
                            <h3 className='capitalize mb-1 font-bold line-clamp-1'>{product.productName}</h3>
                            <p className='capitalize text-[#00000079] line-clamp-2'>{product.description}</p>
                        </section>
                        {/* colors */}
                        <section className='flex gap-2 items-center'>
                            {product.Colors.split(",").map((color, idx) => {
                                return <div key={idx} style={{ background: color }} className={` w-5 h-5 rounded-full border border-gray-400`}></div>
                            })}

                        </section>
                    </figcaption>
                </Link>
                {/* actions & price */}
                <section className='flex items-center justify-between p-5 pt-1'>
                    <h3 className='font-bold text-[1.3rem]'>${product.price}</h3>

                    <AddToCartBtn rounded="rounded-2xl" width='w-fit' text="buy now" id={product.id} count={1}/>
                </section>
            </section>
        </>
    )
}

export default React.memo(ProductCard)
