"use client";

import React from "react";

interface MarqueeProps {
  brands?: string[];
  speed?: number; // سرعة الحركة
}

export default function MarqueeCarousel({ brands = [], speed = 8 }: MarqueeProps) {

  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="marquee-container overflow-hidden w-full">
      <section
        className="marquee flex gap-10"
        style={{
          animation: `marqueeAnim ${speed}s linear infinite`,
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
