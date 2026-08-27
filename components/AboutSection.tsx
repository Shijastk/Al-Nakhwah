"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imgShipping from "../assets/shipping_logistics.jpg";
import Button from "./Button";

const GROCERY_PRODUCT_IMG = "https://i.pinimg.com/1200x/6c/a8/f0/6ca8f02f56d48f0daf38063da995e763.jpg";

export default function AboutSection() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="about" className="w-full bg-white text-[#064E3B] py-24 md:py-32 px-6 md:px-[5%] overflow-hidden relative">
      
      {/* Massive Background Text Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0 opacity-[0.03]">
        <motion.h2 
          style={{ y: yBg }}
          className="text-[120px] sm:text-[180px] md:text-[250px] font-extrabold tracking-tighter whitespace-nowrap"
        >
          ALNKWAH
        </motion.h2>
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Asymmetric Image Collage */}
          <div className="lg:col-span-6 relative h-[520px] md:h-[660px] w-full flex items-center justify-center">
            
            {/* Primary Tall Image — Logistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-[75%] h-[85%] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${imgShipping.src})` }}
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>

            {/* Secondary Overlapping Card — Grocery Products (no crop) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute right-0 bottom-0 w-[62%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.13)] border-8 border-white bg-white overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={GROCERY_PRODUCT_IMG}
                alt="Premium bulk grocery products — grains, spices, packaged goods"
                className="w-full h-full object-contain"
                style={{ display: "block" }}
              />
            </motion.div>

          </div>

          {/* Right Side: Editorial Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-10 xl:pl-16">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#16A34A]"></span>
                <span className="text-[#16A34A] font-bold tracking-[0.2em] text-xs uppercase">About Al Nakhwah</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-8">
                Your Trusted <strong className="font-bold">Import & Export</strong> Partner for Premium Foodstuff.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-10"
            >
              <span className="absolute -top-6 -left-4 text-6xl text-gray-200 font-serif leading-none select-none z-0">"</span>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed relative z-10 italic font-light">
                For over two decades, Al Nakhwah has connected global producers with retailers, hotels, and distributors across the GCC — delivering bulk grains, premium spices, cooking oils, and packaged goods at scale.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-8 py-8 border-y border-gray-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <p className="text-4xl font-bold text-[#064E3B] mb-1">25<span className="text-[#16A34A]">+</span></p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#064E3B] mb-1">5k<span className="text-[#16A34A]">+</span></p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">B2B Partners</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#064E3B] mb-1">$50M<span className="text-[#16A34A]">+</span></p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Annual Trade</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="black" className="px-10 py-4 group rounded-full text-sm tracking-widest font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                DISCOVER OUR STORY
                <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
