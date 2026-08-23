import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function TrustedBrandsSection() {
  let brands = [];
  try {
    const brandsDir = path.join(process.cwd(), 'public/brands');
    if (fs.existsSync(brandsDir)) {
      const files = fs.readdirSync(brandsDir);
      brands = files.filter(f => f.match(/\.(svg|png|jpe?g)$/)).map(file => ({
        name: file.split('.')[0].toUpperCase(),
        src: `/brands/${file}`
      }));
    }
  } catch (e) {
    console.error("Error reading brands:", e);
  }

  // Fallback if none exist
  if (brands.length === 0) {
    return null;
  }
  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-16 border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[5%] mb-8 text-center">
        <h3 className="text-gray-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
          Trusted By Industry Leaders
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden w-full group">
        {/* Fade Outlines */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {/* We repeat the array 2 times. Because width > screen width, translating -50% creates a perfect loop */}
          {[...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="relative w-28 h-10 md:w-36 md:h-12 mx-8 md:mx-12 flex-shrink-0 opacity-40 brightness-0 transition-all duration-300 hover:opacity-100 cursor-pointer"
            >
              <Image 
                src={brand.src} 
                alt={`${brand.name} Logo`} 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
