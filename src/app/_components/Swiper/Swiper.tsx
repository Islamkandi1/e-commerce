"use client";

import React, { useEffect, useState } from "react";
import getBrands from '@/apis/getBrands';
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";

export default function MarqueeCarousel() {
  const [brands, setBrands] = useState<string[]>([]);
  async function getAllBrands() {
    try {
      const brands = await getBrands()
      setBrands(brands)

    } catch (error ) {
      const err = error as Error;
      toast.error(err.message || "Something went wrong" );
    }
  }

  useEffect(() => {
    async function getData() {
      await getAllBrands();
    }
    getData();
  }, [])

  return (
      <section className="w-full overflow-hidden">
      <Marquee speed={100} gradient={false}>
        {brands.map((brand, i) => (
          <div
            key={i}
            className="mx-10 md:w-45 flex items-center justify-center text-white text-2xl uppercase"
          >
            {brand}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
