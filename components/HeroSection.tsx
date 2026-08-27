"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/bannanr/hero1.png';
import banner2 from '../assets/bannanr/hero2.png';
import banner3 from '../assets/bannanr/hero3.png';
import Button from './Button';

const slides = [
  {
    image: banner3,
    badge: "Global Foodstuff Importer & Exporter 🌍",
    line1Text: "Premium ",
    line1Bold: "Grocery",
    line2Bold: "Worldwide.",
    line2Text: "",
    description: "Premium foodstuff imported and exported at scale — grains, spices, oils, and packaged goods for the GCC and beyond."
  },
  {
    image: banner2,
    badge: "Trusted By 5,000+ Business Partners 🤝",
    line1Text: "Your Wholesale ",
    line1Bold: "Supply",
    line2Bold: "Partner.",
    line2Text: "",
    description: "Bulk rice, spices, and grocery staples delivered consistently to commercial kitchens, supermarkets, and distributors worldwide."
  },
  {
    image: banner1,
    badge: "ISO · HACCP · Halal Certified ✓",
    line1Text: "Quality ",
    line1Bold: "You",
    line2Bold: "Can Source",
    line2Text: " At Scale.",
    description: "ISO, HACCP, and Halal certified. Every product rigorously verified from source to delivery, across 25+ countries."
  }
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative w-full h-[100svh] min-h-[600px] bg-black text-white overflow-hidden flex flex-col font-sans">
      
      {/* Background Parallax Slider */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.div 
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slides[currentIndex].image.src})` }} 
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none w-full md:w-3/4"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none h-1/2 mt-auto"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div style={{ opacity }} className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-[5%] w-full flex-1 flex flex-col justify-center pt-32 pb-20">
        
        <div className="max-w-[800px]">
          <div className="min-h-[280px] sm:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center bg-black rounded-full px-5 py-2.5 mb-8 shadow-lg border border-white/10">
                  <span className="text-white text-sm font-medium tracking-wide">{slides[currentIndex].badge}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-6 text-white drop-shadow-lg">
                  {slides[currentIndex].line1Text}<strong className="font-bold text-white">{slides[currentIndex].line1Bold}</strong> <br/>
                  <strong className="font-bold text-white">{slides[currentIndex].line2Bold}</strong>{slides[currentIndex].line2Text}
                </h1>
                
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
                  {slides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-30">
            <Button variant="primary" className="group gap-2 shadow-md" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
            <Button variant="black" className="group gap-2 shadow-md">
              Request Quote
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-6 md:left-[5%] flex gap-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </motion.div>
      
    </section>
  );
}
