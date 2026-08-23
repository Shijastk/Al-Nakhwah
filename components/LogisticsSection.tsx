"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imgShipping from "../assets/shipping_logistics.jpg";

export default function LogisticsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="logistics" className="relative w-full bg-[#064E3B] py-24 md:py-32 font-sans overflow-hidden border-t border-slate-800">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16A34A]/20 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-900/30 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
            <span className="text-blue-300 text-[13px] font-bold tracking-wide uppercase">Global Logistics</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[60px] leading-[1.1] font-light tracking-tight text-white mb-6"
          >
            Your Supply Chain,<br />
            <strong className="font-bold text-[#16A34A]">Simplified</strong>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
          >
            Al Nakhwah handles the complexities of international food trade so you don't have to. We manage every step of the logistics chain, ensuring your orders arrive fresh and on time.
          </motion.p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Features */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:text-right order-2 lg:order-1 pr-0 lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-[#16A34A] transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-3 flex items-center lg:justify-end gap-3">
                <span className="lg:hidden text-[#16A34A]">01.</span>
                Temperature-Controlled
                <span className="hidden lg:block text-[#16A34A] ml-2">.01</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Climate-monitored warehousing and transport that preserves product freshness and quality from receipt to dispatch.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-[#16A34A] transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-3 flex items-center lg:justify-end gap-3">
                <span className="lg:hidden text-[#16A34A]">02.</span>
                Flexible Volumes
                <span className="hidden lg:block text-[#16A34A] ml-2">.02</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                From specific minimum order quantities to full container loads (FCL), we tailor the shipping volume to your business needs.
              </p>
            </motion.div>
          </div>

          {/* Center Image Parallax */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center w-full px-4 sm:px-10 lg:px-0 relative">
            <div className="absolute inset-0 bg-[#16A34A]/40 blur-[80px] rounded-full z-0"></div>
            <div className="relative z-10 w-full aspect-[3/4] md:aspect-[4/5] max-w-[380px] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] border border-white/10 bg-slate-800">
              <motion.div 
                className="w-full h-full bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${imgShipping.src})`, y, scale: 1.15 }}
              />
              <div className="absolute inset-0 bg-[#16A34A]/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Column Features */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-3 lg:order-3 pl-0 lg:pl-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-[#16A34A] transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-[#16A34A]">03.</span>
                Multi-Modal Freight
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We orchestrate sea, air, and land freight solutions across major global trade routes, optimized for cost and speed.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-[#16A34A] transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-[#16A34A]">04.</span>
                Customs & Docs
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We handle complete export documentation, certificates of origin, phytosanitary certificates, and customs clearance.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
