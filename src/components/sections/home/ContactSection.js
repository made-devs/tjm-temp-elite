'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer'; // Import hook

// Data untuk setiap lokasi bengkel
const workshopLocations = [
  {
    id: 'jkt',
    city: 'Jakarta Selatan',
    address: 'Jl. Raya Otomotif No. 12, Kebayoran Baru, Jakarta Selatan, 12110',
    hours: '08:00 - 17:00 WIB',
    photo: '/bengkel1.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.060788343603!2d106.8020353153597!3d-6.255627695471445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d7d7a5847%3A0x194e3a3d58e827a3!2sBlok%20M%20Square!5e0!3m2!1sen!2sid!4v1678886655443!5m2!1sen!2sid',
  },
  {
    id: 'sby',
    city: 'Surabaya',
    address: 'Jl. Industri Maju No. 88, Rungkut, Surabaya, 60293',
    hours: '08:00 - 17:00 WIB',
    photo: '/bengkel2.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.344831626578!2d112.7533613153603!3d-7.31511699472013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb76586dd39b%3A0x441b4a3254942e69!2sTrans%20Icon%20Mall%20Surabaya!5e0!3m2!1sen!2sid!4v1678886754321!5m2!1sen!2sid',
  },
  {
    id: 'bdg',
    city: 'Bandung',
    address: 'Jl. Kreatif No. 21, Sukajadi, Bandung, 40162',
    hours: '08:00 - 17:00 WIB',
    photo: '/bengkel3.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.989939198305!2d107.5911043153608!3d-6.89196999502128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e643576b7959%3A0x1c9b689f67a3d28!2sParis%20Van%20Java%20Mall!5e0!3m2!1sen!2sid!4v1678886801234!5m2!1sen!2sid',
  },
  {
    id: 'mdn',
    city: 'Medan',
    address: 'Jl. Sumatera Raya No. 45, Medan Petisah, Medan, 20111',
    hours: '08:00 - 17:00 WIB',
    photo: '/bengkel4.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.016999748166!2d98.6722063153591!3d3.58385399739097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d279344005%3A0x35b99a22b3252a9a!2sSun%20Plaza!5e0!3m2!1sen!2sid!4v1678886845678!5m2!1sen!2sid',
  },
];

export default function ContactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Hooks untuk animasi
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200,
  });
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  });
  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 400,
  });

  const selectedWorkshop = workshopLocations[activeIndex];

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex =
      direction === 'next'
        ? (activeIndex + 1) % workshopLocations.length
        : (activeIndex - 1 + workshopLocations.length) %
          workshopLocations.length;
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) handleNavigation('next');
    if (touchStartX.current - touchEndX.current < -50) handleNavigation('prev');
  };

  return (
    <section className="w-full font-jakarta bg-background py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-left mb-12 transition-all duration-700 ease-out ${
            titleInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            HUBUNGI KAMI
          </p>
          <h2 className="text-5xl font-extrabold text-foreground mt-2">
            Temukan Bengkel Terdekat
          </h2>
        </div>

        <div
          ref={infoRef}
          className={`flex flex-col md:flex-row gap-8 mb-12 p-8 border border-muted/20 rounded-lg transition-all duration-700 ease-out ${
            infoInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4">
            <Phone className="text-primary" size={24} />
            <div>
              <p className="font-bold text-foreground">Telepon</p>
              <a
                href="tel:+622112345678"
                className="text-muted hover:text-primary"
              >
                +62 21 1234 5678
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-primary" size={24} />
            <div>
              <p className="font-bold text-foreground">Email</p>
              <a
                href="mailto:halo@tjm.co.id"
                className="text-muted hover:text-primary"
              >
                halo@tjm.co.id
              </a>
            </div>
          </div>
        </div>

        <div
          ref={gridRef}
          className={`transition-all duration-700 ease-out ${
            gridInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Desktop View: Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-muted/20 border border-muted/20 rounded-lg overflow-hidden">
            {workshopLocations.map((workshop, index) => (
              <div
                key={workshop.id}
                onClick={() => setActiveIndex(index)}
                className={`p-8 bg-background cursor-pointer transition-colors ${
                  activeIndex === index ? 'bg-primary/5' : 'hover:bg-gray-50'
                }`}
              >
                <p className="font-bold text-foreground">
                  0{index + 1}. {workshop.city}
                </p>
                <div className="relative w-full aspect-video my-4 rounded-md overflow-hidden">
                  <Image
                    src={workshop.photo}
                    alt={`Bengkel TJM di ${workshop.city}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted">{workshop.address}</p>
                <p className="text-sm text-muted mt-2">
                  Buka: {workshop.hours}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile View: Slider */}
          <div
            className="lg:hidden relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {workshopLocations.map((workshop) => (
                <div
                  key={workshop.id}
                  className="w-full flex-shrink-0 p-8 bg-background border border-muted/20 rounded-lg"
                >
                  <p className="font-bold text-foreground">
                    0{workshopLocations.indexOf(workshop) + 1}. {workshop.city}
                  </p>
                  <div className="relative w-full aspect-video my-4 rounded-md overflow-hidden">
                    <Image
                      src={workshop.photo}
                      alt={`Bengkel TJM di ${workshop.city}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted">{workshop.address}</p>
                  <p className="text-sm text-muted mt-2">
                    Buka: {workshop.hours}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleNavigation('prev')}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Peta Interaktif */}
        <div
          ref={mapRef}
          className={`mt-12 w-full h-[500px] rounded-lg overflow-hidden transition-all duration-700 ease-out ${
            mapInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <iframe
            key={selectedWorkshop.id}
            src={selectedWorkshop.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
