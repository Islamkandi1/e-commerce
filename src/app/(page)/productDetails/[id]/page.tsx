
import React from 'react'
import ProductsDetails from '@/app/_components/productsDetail/ProductsDetails';
import YouMightLike from '@/app/_components/youMightLike/YouMightLike';

const Page = async ({ params }: { params: Promise<{id:number}> }) => {
  const { id } = await params

  return (
    <div>
      <ProductsDetails id={id} />
      <YouMightLike id={id}/>
    </div>
  )
}

export default Page
