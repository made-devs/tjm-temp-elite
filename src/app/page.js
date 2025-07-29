"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// Import semua section
import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import PartnersSection from "@/components/sections/home/PartnersSection";
import ServicePackages from "@/components/sections/home/ServicePackages";
import TestimonialSection from "@/components/sections/shared/TestimonialSection";
import MarqueeSection from "../components/sections/shared/MarqueeSection";
import BlogSection from "../components/sections/home/BlogSection";
import ContactSection from "../components/sections/home/ContactSection";
import CtaSection from "../components/sections/shared/CtaSection";
import Footer from "../components/layout/Footer";
import IntroLoader from "@/components/layout/IntroLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Animasikan konten masuk setelah loading selesai
    if (!isLoading) {
      gsap.to(mainRef.current, {
        autoAlpha: 1, // Cara GSAP untuk opacity + visibility
        duration: 1,
        ease: "power3.inOut",
      });
    }
  }, [isLoading]);

  return (
    <>
      {/* Tampilkan loader HANYA saat isLoading true */}
      {isLoading && <IntroLoader onLoaded={() => setIsLoading(false)} />}

      {/* Konten utama disembunyikan di awal */}
      <main ref={mainRef} style={{ visibility: "hidden" }}>
        <HeroSection />
        <PartnersSection />
        <ServicePackages />
        <AboutSection />
        <TestimonialSection />
        <MarqueeSection />
        <BlogSection />
        <ContactSection />
        <CtaSection />
      </main>
    </>
  );
}
