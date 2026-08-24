"use client";

import React from "react";
import imgStore from "../assets/store.png";
import { motion } from "framer-motion";

export default function StoreBannerSection() {
  return (
    <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgStore.src})` }}
      ></div>
      
      {/* Very Dark Overlay (matching the image) */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center"
      >
        
        {/* Header Text */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-[40px] font-light text-white mb-6 tracking-tight leading-tight">
            Where Top <strong className="font-bold">Fresh Food Wholesalers</strong><br/>
            Source Their Products.
          </h2>
          <p className="text-gray-400 text-[15px] max-w-2xl mx-auto font-light leading-relaxed">
            Al Nakhwah connects global producers with local businesses, streamlining sourcing, logistics, and wholesale supply.
          </p>
        </div>

        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-5xl mx-auto">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            {/* Hand & Coin Icon */}
            <div className="mb-6 text-gray-300">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 10v2" />
                <path d="M10 8h4" />
                <path d="M7.4 17.5l-2.4-2.4a2 2 0 012.8-2.8l2 2" />
                <path d="M16.6 17.5l2.4-2.4a2 2 0 00-2.8-2.8l-2 2" />
                <path d="M12 22a8 8 0 006-2.5l-1-1.5a6 6 0 01-10 0l-1 1.5A8 8 0 0012 22z" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">$50 Million+</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[250px] mx-auto">
              Imported annually, ensuring high-volume supply and consistent pricing for our partners.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            {/* Store/People Icon */}
            <div className="mb-6 text-gray-300">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">5,000+</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[250px] mx-auto">
              Restaurants, hotels, and retailers partnering with us for premium foodstuff.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            {/* Document/Timer Icon */}
            <div className="mb-6 text-gray-300">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">24/7 Delivery</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[250px] mx-auto">
              Our cold-chain logistics operate round the clock, ensuring maximum freshness on arrival.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
