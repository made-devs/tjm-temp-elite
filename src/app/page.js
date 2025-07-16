import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection'; // Import section baru
import ServicePackages from '@/components/ServicePackages';
import TestimonialSection from '@/components/TestimonialSection';
import MarqueeSection from '../components/MarqueeSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <ServicePackages />
      <AboutSection />
      <TestimonialSection />
      <MarqueeSection />
      <BlogSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
