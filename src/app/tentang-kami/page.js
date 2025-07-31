import { Fragment } from "react";

// Import komponen-komponen baru
import AboutHero from "@/components/sections/tentang-kami/AboutHero";
import TimelineSection from "@/components/sections/tentang-kami/TimelineSection";
import ValuesSection from "@/components/sections/tentang-kami/ValuesSection";

// Import komponen yang sudah ada
import TestimonialSection from "@/components/sections/shared/TestimonialSection";
import CtaSection from "@/components/sections/shared/CtaSection";
import ContactSection from "@/components/sections/home/ContactSection";

export default function TentangKamiPage() {
  return (
    <Fragment>
      <AboutHero />
      <TimelineSection />
      <ValuesSection />
      <TestimonialSection />
      <ContactSection />
      <CtaSection />
    </Fragment>
  );
}
