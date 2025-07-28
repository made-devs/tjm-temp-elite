'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

// Data untuk setiap varian paket
const packageVariants = [
  {
    title: 'Paket Komplit + AC',
    description:
      'Servis kaki-kaki menyeluruh, dipadukan dengan perawatan sistem AC untuk kenyamanan maksimal di segala cuaca. Termasuk pembersihan evaporator, pengecekan freon, dan filter kabin.',
    image: '/paket/combokakikaki1.webp',
  },
  {
    title: 'Paket + Rust Protection',
    description:
      'Lindungi bagian bawah mobil Anda dari karat dan korosi. Paket ini menggabungkan servis kaki-kaki dengan aplikasi lapisan anti karat dan restorasi kolong profesional.',
    image: '/paket/combokakikaki2.webp',
  },
  {
    title: 'Paket + Engine Pro Tune Up',
    description:
      'Tingkatkan performa mesin secara signifikan. Selain perawatan kaki-kaki, paket ini mencakup tune up 65 komponen, gurah mesin, dan pembersihan injektor.',
    image: '/paket/combokakikaki3.webp',
  },
  {
    title: 'Paket + Full Auto Detailing',
    description:
      'Buat mobil Anda tampil seperti baru. Paket ini melengkapi servis kaki-kaki dengan detailing eksterior 3-langkah, pembersihan interior menyeluruh, dan perawatan kaca.',
    image: '/paket/combokakikaki4.webp',
  },
];

// Komponen Card untuk setiap paket
const AccordionCard = ({ variant, isOpen, onClick }) => (
  <div className="bg-[#2c2c2c] text-white font-jakarta p-8 rounded-2xl w-full border border-transparent transition-all duration-300">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-3xl font-bold">{variant.title}</h3>
      <ChevronDown
        className={`text-gray-400 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
        size={24}
      />
    </div>
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-40 mt-4' : 'max-h-0'
      }`}
    >
      <p className="text-gray-400">{variant.description}</p>
      <button className="bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded-full mt-6">
        Combo
      </button>
    </div>
  </div>
);

export default function PackageDetailSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-background text-foreground py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Kolom Kiri: Gambar Sticky */}
        <div className="lg:sticky top-24 h-[70vh]">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {packageVariants.map((variant, index) => (
              <Image
                key={index}
                src={variant.image}
                alt={variant.title}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
                unoptimized
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Detail Paket (Accordion) */}
        <div className="flex flex-col gap-8">
          {packageVariants.map((variant, index) => (
            <AccordionCard
              key={index}
              variant={variant}
              isOpen={index === activeIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
