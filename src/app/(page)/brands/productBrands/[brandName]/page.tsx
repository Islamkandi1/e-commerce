import BrandProducts from '@/app/_components/brandProducts/BrandProducts';

import React from 'react'

const page = async ({ params }: { params: Promise<{ brandName: string }> }) => {
  const { brandName } = await params

  return (
    <main className='pt-12'>
      <section className="mx-2 md:mx-15 pt-11 ">
        <BrandProducts brandName={brandName} />
      </section>
    </main>
  )
}

export default page
