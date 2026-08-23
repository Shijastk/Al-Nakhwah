import HeroSection from "@/components/HeroSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProductGallerySection from "@/components/ProductGallerySection";
import SuppliersSection from "@/components/SuppliersSection";
import FeaturesSection from "@/components/FeaturesSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import QualitySection from "@/components/QualitySection";
import StoreBannerSection from "@/components/StoreBannerSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col font-sans">
      <Navbar />
      <HeroSection />
      <ScrollReveal><AboutSection /></ScrollReveal>
      {/* <ScrollReveal><ProductsSection /></ScrollReveal> */}
      {/* <ScrollReveal><ProductGallerySection /></ScrollReveal> */}
      <ScrollReveal><TrustedBrandsSection /></ScrollReveal>
      <ScrollReveal><SuppliersSection /></ScrollReveal>
      <ScrollReveal><FeaturesSection /></ScrollReveal>
      <ScrollReveal><QualitySection /></ScrollReveal>
      <ScrollReveal><GlobalNetworkSection /></ScrollReveal>
      <StoreBannerSection />
      <ScrollReveal><TestimonialSection /></ScrollReveal>
      <ScrollReveal><ContactSection /></ScrollReveal>
      <ScrollReveal><CtaSection /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
