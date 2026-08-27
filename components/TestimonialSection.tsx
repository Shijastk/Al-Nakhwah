"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Al Nakhwah.LLC has completely transformed our supply chain. Their cold-chain logistics ensure our seafood arrives in immaculate condition every single time.",
    name: "Chef Marcus Lin",
    role: "Executive Chef, The Grand Hotel",
  },
  {
    quote: "Finding a supplier who can handle our massive bulk orders without compromising on quality was a challenge until we partnered with Al Nakhwah.LLC. Truly exceptional service.",
    name: "Sarah Jenkins",
    role: "Purchasing Director, Global Foods Ltd.",
  },
  {
    quote: "The level of dedicated support we receive is unmatched. Whenever we need a rare ingredient or an urgent restock, they make it happen seamlessly.",
    name: "David Al-Fayed",
    role: "Owner, Crescent Dining Group",
  }
];

// Simple Star Icon component
const StarRating = () => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-[5%] relative overflow-hidden text-[#064E3B]">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="w-10 h-[2px] bg-[#16A34A]"></span>
              <span className="text-[#16A34A] font-bold tracking-[0.2em] text-xs uppercase">Testimonials</span>
              <span className="w-10 h-[2px] bg-[#16A34A]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mt-2">
              Trusted by <strong className="font-bold">Industry Leaders</strong>
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 flex flex-col relative group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <StarRating />

              <p className="text-gray-600 text-lg leading-relaxed mb-10 flex-grow relative z-10 font-medium">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A] font-bold text-xl border border-[#16A34A]/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#064E3B] text-base">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
