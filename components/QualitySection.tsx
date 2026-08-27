"use client";

import React from "react";
import { motion } from "framer-motion";

const certifications = [
  { name: "HACCP Certified", desc: "Hazard analysis & critical control points", img: "/certs/cert_haccp.jpg" },
  { name: "ISO 22000", desc: "Food safety management system", img: "/certs/cert_iso.jpg" },
  { name: "Halal Certified", desc: "100% compliance with global standards", img: "/certs/cert_halal.jpg" },
  { name: "FDA Registered", desc: "Full US export compliance & safety", img: "/certs/cert_fda.jpg" },
];

export default function QualitySection() {
  return (
    <section id="quality" className="relative w-full bg-[#FFF7ED] py-20 px-6 md:px-[5%] overflow-hidden font-sans border-y border-orange-100">

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-[2px] bg-orange-400"></span>
            <span className="text-orange-600 font-bold tracking-[0.2em] text-xs uppercase">Quality Assurance</span>
            <span className="w-8 h-[2px] bg-orange-400"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-[#064E3B] mb-6">
            Uncompromising <strong className="font-bold">Quality Standards.</strong>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Every product that carries the Al Nakhwah.LLC name undergoes rigorous quality control — from source verification and lab testing to packaging inspection and cold chain monitoring.
          </p>
        </motion.div>

        {/* Horizontally Aligned Logos */}
        <div className="w-full flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center w-[160px] md:w-[200px]"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-6 relative rounded-full overflow-hidden shadow-md border border-white bg-white flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img src={cert.img} alt={cert.name} className="w-[85%] h-[85%] object-contain" />
              </div>
              <h4 className="font-bold text-[#064E3B] text-lg mb-2">{cert.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
