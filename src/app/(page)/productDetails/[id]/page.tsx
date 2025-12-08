
import React from 'react'
import ProductsDetails from '@/app/_components/productsDetail/ProductsDetails';
import YouMightLike from '@/app/_components/youMightLike/YouMightLike';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Product Details",
  description: "Detailed view of the selected product",
};
const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params

  return (
    <div>
      <ProductsDetails id={id} />
      <YouMightLike id={id} />
    </div>
  )
}

export default Page
