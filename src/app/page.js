import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection"; // Import section baru
import ProcessSection from "@/components/ProcessSection";
import ServicePackages from "@/components/ServicePackages";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <ServicePackages />
      <AboutSection />
      <TestimonialSection />
      <ProcessSection />
      {/* Section-section lain bisa ditambahkan di sini */}
    </main>
  );
}
