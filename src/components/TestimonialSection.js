'use client';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'; // Import hook

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Hook untuk memantau visibilitas elemen
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.1, // Memicu saat 10% elemen terlihat
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200, // Sedikit jeda untuk efek yang lebih baik
  });

  const testimonials = [
    {
      id: 1,
      text: 'Servis di TJM benar-benar memuaskan. Mobil saya yang tadinya sering mogok sekarang jadi prima kembali. Penjelasannya detail dan tidak ada biaya tersembunyi. Sangat direkomendasikan!',
      author: 'Aulia Putri',
      location: 'Jakarta Selatan',
      avatar: 'https://placehold.co/64x64/E0E0E0/000000?text=AP',
    },
    {
      id: 2,
      text: 'Sebagai wanita, saya sering khawatir dibohongi soal mesin. Tapi di TJM, mekaniknya sangat jujur dan edukatif. Mereka menunjukkan langsung komponen yang perlu diganti. Pengalaman servis terbaik sejauh ini.',
      author: 'Dian Lestari',
      location: 'Bekasi, Jawa Barat',
      avatar: 'https://placehold.co/64x64/E0E0E0/000000?text=DL',
    },
    {
      id: 3,
      text: 'Pengerjaannya cepat dan hasilnya luar biasa. AC mobil saya yang sudah tidak dingin selama berbulan-bulan, sekarang dingin lagi seperti baru. Profesional dan andal. Terima kasih TJM!',
      author: 'Budi Santoso',
      location: 'Tangerang',
      avatar: 'https://placehold.co/64x64/E0E0E0/000000?text=BS',
    },
  ];

  const currentTestimonial = testimonials[activeIndex];

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
      {' '}
      {/* Tambahkan overflow-hidden */}
      <div className="max-w-[70rem] mx-auto px-4">
        {/* Bagian Header dengan animasi */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-[20rem] mb-10">
            <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold">
              TESTIMONI
            </p>
            <h2 className="text-5xl font-bold font-jakarta mt-2 leading-tight">
              Umpan balik jujur Anda
            </h2>
          </div>
        </div>

        {/* Konten Testimoni dengan animasi */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start transition-all duration-700 ease-out ${
            contentInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Kolom Kiri (Avatars dan Info Penulis) */}
          <div className="flex flex-col items-start">
            <div className="flex space-x-4 mb-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`relative`}>
                  <div
                    className={`w-16 h-16 rounded-full border-2 shadow-md cursor-pointer transition-all duration-300 ${
                      index === activeIndex
                        ? 'border-orange-600'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={`Avatar ${testimonial.author}`}
                      className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'grayscale-0' : 'grayscale'
                      }`}
                    />
                  </div>
                  {index === activeIndex && (
                    <div className="absolute bottom-[-8px] right-[-8px] bg-orange-600 rounded-full p-1 z-10">
                      <Quote size={16} className="text-white" fill="white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">
                {currentTestimonial.author}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {currentTestimonial.location}
              </p>
            </div>
          </div>

          {/* Kolom Kanan (Teks Testimoni) */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed min-h-[180px]">
              {currentTestimonial.text}
            </p>
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
