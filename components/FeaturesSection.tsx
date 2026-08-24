"use client";

import React from "react";
import { motion } from "framer-motion";
import imgQuality from "../assets/quality_inspection.jpg";
import Button from "./Button";
import imgBox from "../assets/alnakhwah_box_1787402081420.jpg";
import imgCan from "../assets/alnakhwah_can_1787402097008.jpg";
import imgDates from "../assets/alnakhwah_dates_1787401056422.jpg";
import imgJar from "../assets/alnakhwah_jar_1787402122996.jpg";
import imgNuts from "../assets/alnakhwah_nuts_1787401102129.jpg";
import imgPouch from "../assets/alnakhwah_pouch_1787402110047.jpg";
import imgRice from "../assets/alnakhwah_rice_1787401071718.jpg";
import imgSpices from "../assets/alnakhwah_spices_1787401085317.jpg";

const products = [
  { image: imgBox, title: "Premium Box" },
  { image: imgCan, title: "Canned Goods" },
  { image: imgDates, title: "Fresh Dates" },
  { image: imgJar, title: "Premium Jars" },
  { image: imgNuts, title: "Mixed Nuts" },
  { image: imgPouch, title: "Pouched Products" },
  { image: imgRice, title: "Quality Rice" },
  { image: imgSpices, title: "Global Spices" },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white text-[#064E3B] py-24 px-6 md:px-[5%] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-32">

        {/* Top Half */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Top Left: Text & Video */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight mb-6 tracking-tight whitespace-nowrap">
                Why Al Nakhwah? The <strong className="font-bold">Ultimate</strong><br />
                <strong className="font-bold">Wholesale</strong> Partner
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                We are not just a supplier; we are an extension of your business. Al Nakhwah is built to handle the rigorous demands of the global fresh food industry.
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="relative mt-4 group cursor-pointer max-w-lg">
              <div
                className="w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${imgQuality.src})` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#16A34A] translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div> */}
              </div>

              {/* Watch Video Text */}
              <div className="absolute -right-4 -bottom-6 md:-right-12 md:bottom-10 rotate-[-10deg] text-[#16A34A] font-medium text-xl italic drop-shadow-sm flex flex-col items-center">
                <svg className="w-12 h-12 mb-1 rotate-[70deg] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Know more About</span>
              </div>
            </div>
          </div>

          {/* Top Right: Floating Features */}
          <div className="flex flex-col gap-6 lg:pl-10 relative mt-10 lg:mt-0">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 lg:w-[90%] transform transition-transform hover:-translate-y-1 z-30 relative">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                    <path d="M5 14c0-3.87 3.13-7 7-7s7 3.13 7 7" />
                    <path d="M12 7V5" />
                    <path d="M10 5h4" />
                    <path d="M2 14h20" />
                    <path d="M7 18c-1.5 0-3 1-3 2 0 1 2 1 2 1h10s2 0 2-1c0-1-1.5-2-3-2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Global Sourcing Network</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Direct partnerships with top-tier farms and producers ensure you receive the finest ingredients year-round.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 lg:w-[90%] lg:ml-auto transform transition-transform hover:-translate-y-1 z-20 relative">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                    <text x="12" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" stroke="none">24/7</text>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Cold-Chain Logistics</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    State-of-the-art temperature-controlled shipping guarantees maximum freshness from origin to your door.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 lg:w-[90%] transform transition-transform hover:-translate-y-1 z-10 relative">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589c-.26 0-.5.068-.722.181A4 4 0 0 0 9 4.5a3.985 3.985 0 0 0-1.87 2.69 4 4 0 0 0-2.133 7.59c.41.196.726.583.726 1.04V20a1 1 0 0 0 1 1h10z" />
                    <path d="M6 17h12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Dedicated Support</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Personalized account management ensuring your bulk orders are handled flawlessly, 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>

        {/* Bottom Half: Our Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Bottom Left: Text */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">
                Explore Our <strong className="font-bold">Premium Products</strong>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                From fresh dates and spices to premium canned goods and bulk rice, discover our wide range of meticulously sourced products tailored for wholesale.
              </p>
            </motion.div>
          </div>

          {/* Bottom Right: Horizontal Scroll Container */}
          <div className="w-full relative overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pr-[15%] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {products.map((product, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="snap-start shrink-0 w-[240px] group relative rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-gray-50 relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg drop-shadow-md mb-1">{product.title}</h3>
                    <span className="text-white/80 text-xs font-semibold tracking-widest uppercase border-b border-white/40 pb-1">View Details</span>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Right Fade Mask to indicate scrolling */}
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
