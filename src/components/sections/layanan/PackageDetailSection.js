"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const AccordionCard = ({ variant, isOpen, onClick }) => (
  <div className="bg-[#2c2c2c] text-white font-jakarta p-8 rounded-2xl w-full border border-transparent transition-all duration-300">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-3xl font-bold">{variant.title}</h3>
      <ChevronDown
        className={`text-gray-400 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        size={24}
      />
    </div>
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-gray-400 pb-6">{variant.description}</p>
        {/* SOLUSI: Mengarahkan link ke halaman kontak dengan parameter */}
        <a
          href={`/kontak?paket=${variant.slug}`}
          className="group inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Pilih Paket Ini
          <ArrowRight
            size={18}
            className="transition-all duration-300 w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
          />
        </a>
      </div>
    </div>
  </div>
);

export default function PackageDetailSection({ packageData }) {
  // ... sisa kode komponen tetap sama ...
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 500,
  });

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div
          ref={imageRef}
          className={`lg:sticky top-24 transition-all duration-1000 ease-out ${
            imageInView
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-10 blur-md"
          }`}
        >
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            {packageData.variants.map((variant, index) => (
              <Image
                key={index}
                src={variant.image}
                alt={variant.title}
                fill
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 blur-0 scale-100"
                    : "opacity-0 blur-md scale-105"
                }`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-8">
          {packageData.variants.map((variant, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                cardsInView
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-10 blur-md"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AccordionCard
                variant={variant}
                isOpen={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
