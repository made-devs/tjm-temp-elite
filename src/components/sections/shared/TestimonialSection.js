"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Servis di TJM benar-benar memuaskan. Mobil saya yang tadinya sering mogok sekarang jadi prima kembali. Penjelasannya detail dan tidak ada biaya tersembunyi. Sangat direkomendasikan!",
    author: "Aulia Putri",
    location: "Jakarta Selatan",
    avatar: "/avatar1.webp",
  },
  {
    id: 2,
    text: "Sebagai wanita, saya sering khawatir dibohongi soal mesin. Tapi di TJM, mekaniknya sangat jujur dan edukatif. Mereka menunjukkan langsung komponen yang perlu diganti. Pengalaman servis terbaik sejauh ini.",
    author: "Dian Lestari",
    location: "Bekasi, Jawa Barat",
    avatar: "/avatar2.webp",
  },
  {
    id: 3,
    text: "Pengerjaannya cepat dan hasilnya luar biasa. AC mobil saya yang sudah tidak dingin selama berbulan-bulan, sekarang dingin lagi seperti baru. Profesional dan andal. Terima kasih TJM!",
    author: "Budi Santoso",
    location: "Tangerang",
    avatar: "/avatar3.webp",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [content, setContent] = useState(testimonials[0]);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200,
  });

  // Efek ini menangani transisi saat activeIndex berubah
  useEffect(() => {
    // Jangan jalankan di render pertama
    if (content.id === testimonials[activeIndex].id) return;

    setIsTransitioning(true); // Mulai fade-out
    const timer = setTimeout(() => {
      setContent(testimonials[activeIndex]); // Ganti konten setelah fade-out
      setIsTransitioning(false); // Mulai fade-in
    }, 350); // Setengah dari durasi transisi (700ms)

    return () => clearTimeout(timer);
  }, [activeIndex, content.id]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full bg-white font-jakarta text-gray-900 py-24 overflow-hidden">
      <div className="max-w-[70rem] mx-auto px-4">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-[20rem] mb-10">
            <p className="text-primary uppercase tracking-widest text-sm font-semibold">
              TESTIMONI
            </p>
            <h2 className="text-5xl font-bold font-jakarta mt-2 leading-tight">
              Umpan balik jujur Anda
            </h2>
          </div>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start transition-all duration-700 ease-out ${
            contentInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-start">
            <div className="flex space-x-4 mb-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`relative transition-all duration-300 ${
                    index === activeIndex ? "scale-110" : "scale-100"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full border-2 shadow-md cursor-pointer transition-all duration-300 ${
                      index === activeIndex
                        ? "border-primary"
                        : "border-gray-300"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar ${testimonial.author}`}
                      width={64}
                      height={64}
                      className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
                        index === activeIndex ? "grayscale-0" : "grayscale"
                      }`}
                    />
                  </div>
                  {index === activeIndex && (
                    <div className="absolute bottom-[-8px] right-[-8px] bg-primary rounded-full p-1 z-10">
                      <Quote size={16} className="text-white" fill="white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Konten teks dengan animasi blur reveal */}
            <div
              className={`transition-all duration-700 ease-out ${
                isTransitioning ? "opacity-0 blur-lg" : "opacity-100 blur-0"
              }`}
            >
              <p className="text-lg font-bold text-gray-900">
                {content.author}
              </p>
              <p className="text-gray-600 text-sm mt-1">{content.location}</p>
            </div>
          </div>

          <div>
            <div
              className={`transition-all duration-700 ease-out ${
                isTransitioning ? "opacity-0 blur-lg" : "opacity-100 blur-0"
              }`}
            >
              <p className="text-gray-700 text-lg leading-relaxed min-h-[180px]">
                {content.text}
              </p>
            </div>
            <div className="flex space-x-4 mt-12">
              <button
                className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={handlePrev}
              >
                <ArrowLeft size={24} className="text-gray-700" />
              </button>
              <button
                className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={handleNext}
              >
                <ArrowRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
