import GetBrands from '@/app/_components/brands/Brands'
import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Brands",
  description: "List of Brands",
};
const Brands = () => {
  return (
    <div>
      <GetBrands/>
    </div>
  )
}

export default Brands
