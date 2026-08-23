"use client";

import React, { useState, useRef } from "react";
import imgBox from "../assets/alnakhwah_box_1787402081420.jpg";
import imgCan from "../assets/alnakhwah_can_1787402097008.jpg";
import imgJar from "../assets/alnakhwah_jar_1787402122996.jpg";
import imgPouch from "../assets/alnakhwah_pouch_1787402110047.jpg";
import imgDates from "../assets/alnakhwah_dates_1787401056422.jpg";
import imgRice from "../assets/alnakhwah_rice_1787401071718.jpg";

const products = [
  { name: "Premium Box Packaging", image: imgBox },
  { name: "High-Quality Canned Goods", image: imgCan },
  { name: "Durable Glass Jars", image: imgJar },
  { name: "Flexible Secure Pouches", image: imgPouch },
  { name: "Fresh Harvest Dates", image: imgDates },
  { name: "Premium Export Rice", image: imgRice },
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const progress = scrollLeft / maxScroll;
      
      const newIndex = Math.min(
        products.length - 1,
        Math.max(0, Math.round(progress * (products.length - 1)))
      );
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="products" className="w-full bg-[#071224] py-24 font-sans text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block border border-blue-500/30 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-300 mb-4 tracking-wide bg-blue-900/30 backdrop-blur-sm">
            Our Collection
          </div>
          <h2 className="text-3xl md:text-[40px] leading-tight font-light tracking-tight text-white">
            Explore Our <strong className="font-bold text-[#16A34A]">Premium Products</strong>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Scrollable Track */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div 
                key={index}
                className="relative snap-start shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] lg:w-[450px] aspect-square rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-slate-800/50"
              >
                {/* Product Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image.src})` }}
                ></div>
                
                {/* Dark gradient overlay for text readability at the top */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#064E3B]/90 via-[#064E3B]/20 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                
                {/* Top-Left Text */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 w-[80%]">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Progress Bar Line */}
          <div className="relative w-full h-[1px] bg-slate-800 flex-1">
            <div 
              className="absolute top-0 left-0 h-full bg-[#16A34A] shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-all duration-300"
              style={{ width: `${((activeIndex) / (products.length - 1)) * 100}%`, minWidth: '15%' }}
            ></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-[#16A34A] shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-transparent flex items-center justify-center text-white hover:bg-[#15803D] transition-colors"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          
        </div>

      </div>
      
      {/* Hide scrollbar globally for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
