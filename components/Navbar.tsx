"use client";

import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Global Network", href: "#logistics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "bg-white text-[#064E3B] shadow-sm border-b border-gray-100 py-2" : "bg-transparent text-white border-b border-transparent py-4"}`}>
      <div className="flex items-center justify-between px-6 md:px-[5%] h-full">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="Al Nakhwah.L.L.C Logo" className="h-20 sm:h-24 w-auto object-contain" />
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tight uppercase">Al Nakhwah.L.L.C</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-[15px] font-medium items-center ml-auto mr-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={(e) => {
                e.preventDefault();
                if (link.href === "#") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:opacity-80 transition-opacity whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Button variant="neon" className="py-3 px-8 text-[15px] font-bold whitespace-nowrap shadow-md hover:-translate-y-0.5 transition-transform flex items-center gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden flex items-center justify-center p-2 transition-colors ${isScrolled ? "text-[#064E3B]" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 shadow-2xl">
          <div className="flex flex-col gap-6 text-[16px] font-medium text-[#064E3B]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  if (link.href === "#") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:opacity-80 transition-opacity text-left cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="w-full h-[1px] bg-gray-100 my-2"></div>
            <Button variant="neon" className="w-full py-3.5 text-[16px] font-bold mt-2 flex justify-center items-center gap-2" onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
