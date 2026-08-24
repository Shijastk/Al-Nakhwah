"use client";

import React from "react";
import imgBg from "../assets/shipping_logistics.jpg";

export default function CtaSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-[5%] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: Photography */}
          <div className="w-full lg:w-5/12 relative min-h-[350px] lg:min-h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${imgBg.src})` }}
            ></div>
            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Image Caption/Badge */}
            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                <span className="font-bold tracking-widest uppercase text-xs text-white/90">Global Network</span>
              </div>
              <p className="font-light text-white/80 max-w-[200px] text-sm leading-relaxed">
                Seamless shipping and logistics across 25+ countries.
              </p>
            </div>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#16A34A]"></span>
              <span className="text-[#16A34A] font-bold tracking-[0.2em] text-xs uppercase">Take the Next Step</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6 text-[#064E3B]">
              Ready to <strong className="font-bold text-[#16A34A]">Elevate</strong> Your Supply Chain?
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              Join thousands of restaurants, retailers, and distributors worldwide that rely on Al Nakhwah for premium quality, competitive pricing, and uninterrupted wholesale distribution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#064E3B] hover:bg-[#16A34A] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center gap-3 group w-full sm:w-auto">
                Become a Partner
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent hover:bg-gray-50 text-[#064E3B] border border-gray-200 font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                View Catalog
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
