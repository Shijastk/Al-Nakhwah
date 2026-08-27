"use client";

import React, { useState, useRef } from "react";
import imgVegetables from "../assets/fresh_vegetables.jpg";
import imgSeafood from "../assets/seafood.jpg";
import imgBread from "../assets/bread1.jpg";
import imgGrains from "../assets/grains_rice.jpg";
import fruites from "../assets/fresh_fruits.jpg";
import Rice from "../assets/alnakhwah_rice_1787401071718.jpg";

const categories = [
  {
    title: "Breads Suppliers",
    description: "Artisan and wholesale bakery suppliers delivering fresh daily.",
    image: "  https://i.pinimg.com/736x/e1/fe/b4/e1feb42f72cc526b521cbb91bc77514a.jpg",
  },
  {
    title: "Beverages & Drinks",
    description: "A wide selection of cold-pressed juices, soft drinks, and premium roast coffees.",
    image: "https://i.pinimg.com/736x/79/6c/34/796c34906c9111f02f41a319298a261b.jpg", // Using placeholder
  },
  {
    title: "Seafood Suppliers",
    description: "Source fresh, quality seafood from top local and international suppliers.",
    image: "https://imgs.search.brave.com/DNvMUWANYn0axlsoBWcHWpN3sPRklOtU3zMuPKo0REk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmL2Nh/L2UxLzNmY2FlMWYw/NjQ3MWEyNDAzZDk2/MGMwMWUzN2RmODc0/LmpwZw",
  },
  
  {
    title: "Grains & Rice",
    description: "Premium wholesale grains and rice for all your culinary needs.",
    image: "https://imgs.search.brave.com/klPTRDGTfktgzLOjzFsUwXJ1Uqu23c7DaojM--trriE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/ODcxLzgzOC9zbWFs/bC9yaWNlLWdyYWlu/LWluLWJhc2tldHMt/YWdyaWN1bHR1cmUt/aGFydmVzdC1mcmVl/LXBob3RvLmpwZw",
  },
  {
    title: "Dairy & Farm Fresh",
    description: "Farm-fresh milk, artisan cheeses, and high-quality eggs from trusted local producers.",
    image: "https://imgs.search.brave.com/gCb3Up0VVVzJcvRYzDRA8ZtWIps5oK-LMhA_5JDZEX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjUwMzA3/L3BuZ3RyZWUtcnVz/dGljLWZhcm0tc3Rh/bGwtZnJlc2gtZGFp/cnktcHJvZHVjdHMt/bWlsay1jaGVlc2Ut/aW1hZ2VfMTcwNzg3/MzkuanBn", // Using placeholder until user uploads a real image
  },
  {
    title: "Fruits & Vegetables",
    description: "Sell produce by the punnet, bunch, bag, each, kg or tray quantity type. Produce picking slips in one click by...",
    image: "https://imgs.search.brave.com/gjRPVfj30P1gZxz-KGLNb9CoAKTv7J0UmdUog9GqqM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/OTk3LzQ5MC9zbWFs/bC9oZWFsdGh5LWZv/b2QtdmVnZXRhYmxl/cy1mcnVpdHMtcmVh/bGlzbS1jcmVhdGVk/LXdpdGgtYWktdG9v/bHMtcGhvdG8uanBn",
  },
];

export default function SuppliersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(categories.length - 1);

  React.useEffect(() => {
    const updateMaxIndex = () => {
      if (window.innerWidth >= 1024) {
        // lg screens: 1 large (48%) + 2 small (22% each) = 3 cards visible
        setMaxIndex(Math.max(0, categories.length - 3));
      } else if (window.innerWidth >= 768) {
        // md screens: 1 large (60%) + 1 small (35%) = 2 cards visible
        setMaxIndex(Math.max(0, categories.length - 2));
      } else {
        // mobile screens: 1 large (85%) visible
        setMaxIndex(Math.max(0, categories.length - 1));
      }
    };

    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, []);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < maxIndex) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const trackIndex = Math.min(activeIndex, maxIndex);

  return (
    <section id="products" className="w-full bg-[#064E3B] text-white py-24 px-6 md:px-[5%] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .carousel-track {
          --translate-x: calc(-${trackIndex} * (85% + 1rem));
          transform: translateX(var(--translate-x));
        }
        @media (min-width: 768px) {
          .carousel-track {
            --translate-x: calc(-${trackIndex} * (35% + 1.5rem));
          }
        }
        @media (min-width: 1024px) {
          .carousel-track {
            --translate-x: calc(-${trackIndex} * (22% + 1.5rem));
          }
        }
      `}} />
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-[40px] leading-tight font-normal tracking-tight text-white max-w-3xl mx-auto text-center mb-16">
          Our <strong className="font-bold text-[#16A34A]">Product</strong> Categories — <strong className="font-bold text-[#16A34A]">Bulk Import<br/> & Export</strong> Ready
        </h2>

        <div className="relative group/container">
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            className={`absolute left-[-20px] xl:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-300 z-20 bg-slate-900 shadow-xl hidden md:flex ${
              activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Categories Container (CSS Transform Track) */}
          <div className="w-full overflow-hidden">
            <div 
              className="carousel-track flex gap-4 md:gap-6 pb-4 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              {categories.map((category, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={index} 
                    onClick={() => setActiveIndex(index)}
                    className={`relative rounded-xl overflow-hidden h-[300px] md:h-[400px] cursor-pointer shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? 'w-[85%] md:w-[60%] lg:w-[48%]' : 'w-[85%] md:w-[35%] lg:w-[22%]'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    {/* Permanent dark overlays */}
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white flex flex-col justify-end">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-sm pr-2">
                        {category.title}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-24 opacity-100 mt-2 md:mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                        <p className="text-xs md:text-sm text-gray-200 line-clamp-3 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={scrollRight}
            disabled={activeIndex === categories.length - 1}
            className={`absolute right-[-20px] xl:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#16A34A] flex items-center justify-center text-white hover:bg-[#15803D] transition-all duration-300 z-20 shadow-xl hidden md:flex ${
              activeIndex === categories.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
