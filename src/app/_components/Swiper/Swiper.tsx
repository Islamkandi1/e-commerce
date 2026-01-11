"use client";

import React, { useEffect, useState } from "react";
import getBrands from '@/apis/getBrands';
import toast from "react-hot-toast";


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
  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="marquee-container overflow-hidden w-full">
      <section
        className="marquee flex gap-10"
        style={{
          animation: `marqueeAnim 8s linear infinite`,
        }}
      >
        {repeatedBrands.map((brand, i) => (
          <section key={i} className="brand-item shrink-0 md:w-48 flex items-center justify-center text-white text-2xl uppercase rounded-lg">
            {brand}
          </section>
        ))}
      </section>

      <style jsx>{`
        @keyframes marqueeAnim {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
