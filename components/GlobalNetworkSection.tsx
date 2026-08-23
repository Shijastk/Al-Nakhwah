"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalNetworkSection() {
  return (
    <section id="logistics" className="w-full bg-[#F8FAFC] py-24 md:py-32 px-6 md:px-[5%] overflow-hidden relative">

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-8 h-[2px] bg-[#16A34A]"></span>
              <span className="text-[#16A34A] font-bold tracking-[0.2em] text-xs uppercase">Global Reach</span>
              <span className="w-8 h-[2px] bg-[#16A34A]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light leading-tight tracking-tight text-[#064E3B] mb-6">
              Global <strong className="font-bold">Sourcing</strong> & <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-blue-400">Distribution</strong>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-light">
              We bridge the gap between the world's finest food producers and your business, leveraging a robust logistics network that spans across continents to ensure peak freshness and reliability.
            </p>
          </motion.div>
        </div>

        {/* Network Stats (Typographic Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-[1100px] mx-auto mt-16 border-t border-gray-200 pt-16">
          
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="text-6xl lg:text-7xl font-light text-[#16A34A] mb-4 tracking-tighter">
              25<span className="text-4xl lg:text-5xl">+</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#064E3B] uppercase tracking-widest">Global Countries</h3>
            <p className="text-gray-500 leading-relaxed font-light text-[16px]">
              Importing premium ingredients directly from trusted farms, fisheries, and manufacturers across Asia, Europe, Africa, and the Americas.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="text-6xl lg:text-7xl font-light text-[#064E3B] mb-4 tracking-tighter">
              100<span className="text-4xl lg:text-5xl">%</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#064E3B] uppercase tracking-widest">Cold-Chain</h3>
            <p className="text-gray-500 leading-relaxed font-light text-[16px]">
              State-of-the-art temperature-controlled logistics ensure that every product arrives at peak freshness, zero compromises.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="text-6xl lg:text-7xl font-light text-[#16A34A] mb-4 tracking-tighter">
              24<span className="text-4xl lg:text-5xl">/7</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#064E3B] uppercase tracking-widest">GCC Distribution</h3>
            <p className="text-gray-500 leading-relaxed font-light text-[16px]">
              Operating from our Dubai headquarters, providing rapid, uninterrupted wholesale distribution across the entire Middle East region.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
