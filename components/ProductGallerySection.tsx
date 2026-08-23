import React from "react";
import Image from "next/image";
import imgBox from "../assets/alnakhwah_box_1787402081420.jpg";
import imgCan from "../assets/alnakhwah_can_1787402097008.jpg";
import imgJar from "../assets/alnakhwah_jar_1787402122996.jpg";
import imgPouch from "../assets/alnakhwah_pouch_1787402110047.jpg";
import imgDates from "../assets/alnakhwah_dates_1787401056422.jpg";
import imgRice from "../assets/alnakhwah_rice_1787401071718.jpg";
import imgBread from "../assets/bread1.jpg";
import imgSeafood from "../assets/seafood.jpg";

const galleryItems = [
  { name: "Premium Box Packaging", image: imgBox, category: "Packaging" },
  { name: "Canned Goods", image: imgCan, category: "Food Stuff" },
  { name: "Glass Jars", image: imgJar, category: "Packaging" },
  { name: "Secure Pouches", image: imgPouch, category: "Packaging" },
  { name: "Fresh Dates", image: imgDates, category: "Produce" },
  { name: "Premium Rice", image: imgRice, category: "Grains" },
  { name: "Artisan Bread", image: imgBread, category: "Bakery" },
  { name: "Fresh Seafood", image: imgSeafood, category: "Seafood" },
];

export default function ProductGallerySection() {
  return (
    <section id="gallery" className="w-full bg-[#F8FAFC] py-24 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block border border-[#16A34A]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#064E3B] mb-4 tracking-wide bg-[#16A34A]/10">
            Product Gallery
          </div>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#064E3B]">
            Our Complete Catalog
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse our full range of premium quality food stuff and specialized packaging options designed for global distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image 
                src={item.image} 
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#16A34A] text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
