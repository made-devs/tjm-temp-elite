import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection"; // Import section baru
import ServicePackages from "@/components/ServicePackages";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <TestimonialSection />
      <ServicePackages />
      {/* Section-section lain bisa ditambahkan di sini */}
    </main>
  );
}
