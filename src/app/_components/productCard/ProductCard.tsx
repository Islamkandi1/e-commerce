import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { product } from '@/types/product.type'
const ProductCard = ({ product }: { product: product }) => {



    return (
        <>
            <section className='w-full rounded-2xl overflow-hidden shadow-2xl '>
                <figure className='p-4 flex justify-center items-center bg-[#F3F0F1] relative'>
                    <Image width={500} height={500} src={product.image} alt={product.productName} className='h-[300px] object-cover' />
                    <button type="button" className='absolute right-5 top-5 cursor-pointer hover:text-[#353535] transition-all duration-300'>
                        <Heart className="h-6 w-6 " />
                    </button>
                </figure>
                <figcaption className='p-5'>
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
                    {/* actions & price */}
                    <section className='flex items-center justify-between'>
                        <h3 className='font-bold text-[1.3rem]'>$300</h3>
                        <button type='button' className='bg-black rounded-2xl hover:bg-[#353535] transition-all duration-300 cursor-pointer capitalize text-white px-5 py-2'>buy now</button>
                    </section>
                </figcaption>
            </section>
        </>
    )
}

export default ProductCard
