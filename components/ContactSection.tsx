"use client";

import React from "react";
import Button from "./Button";
import bgImg from "../assets/business_handshake.jpg";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full text-white py-24 px-6 md:px-[5%] overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      ></div>
      <div className="absolute inset-0 bg-[#16A34A]/90 z-0"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Info */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light tracking-tight leading-tight mb-6">
              Ready to <strong className="font-bold">get started?</strong>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed max-w-xl">
              Contact our sales team today to set up your account, request pricing, and explore our full product catalog.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <strong className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Global Headquarters</strong>
                <span className="text-3xl md:text-4xl font-light tracking-tight">Southern Governorate, <strong className="font-bold">Bahrain</strong></span>
              </div>
              <div className="flex flex-col">
                <strong className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Dedicated Support</strong>
                <span className="text-2xl md:text-3xl font-light tracking-tight">Call <strong className="font-bold">+973 3007 5524</strong></span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white text-[#064E3B] p-8 md:p-10 rounded">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="companyName" className="font-bold text-sm">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    required
                    className="w-full border border-gray-300 bg-gray-50 rounded px-4 py-3 focus:outline-none focus:border-[#16A34A] focus:bg-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="emailAddress" className="font-bold text-sm">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    required
                    className="w-full border border-gray-300 bg-gray-50 rounded px-4 py-3 focus:outline-none focus:border-[#16A34A] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="inquiryType" className="font-bold text-sm">Inquiry Type</label>
                <select
                  id="inquiryType"
                  required
                  defaultValue=""
                  className="w-full border border-gray-300 bg-gray-50 rounded px-4 py-3 focus:outline-none focus:border-[#16A34A] focus:bg-white transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="wholesale">Wholesale Purchasing</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="sample">Request a Sample</option>
                  <option value="support">General Support</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="messageBody" className="font-bold text-sm">Message</label>
                <textarea
                  id="messageBody"
                  required
                  rows={4}
                  className="w-full border border-gray-300 bg-gray-50 rounded px-4 py-3 focus:outline-none focus:border-[#16A34A] focus:bg-white transition-colors resize-y"
                ></textarea>
              </div>

              <Button variant="black" className="w-full mt-2 rounded py-4 text-base font-bold">
                SUBMIT INQUIRY
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
