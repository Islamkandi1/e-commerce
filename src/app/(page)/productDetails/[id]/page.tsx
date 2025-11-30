
import React from 'react'
import ProductsDetails from '@/app/_components/productsDetail/ProductsDetails';

const Page = async ({ params }: { params: Promise<{id:number}> }) => {
  const { id } = await params

  return (
    <div>
      <ProductsDetails id={id} />
    </div>
  )
}

export default Page
