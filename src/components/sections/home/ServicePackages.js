'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import useBreakpoint from '../../hooks/useBreakpoint';

// Data layanan diperbarui dengan properti harga
const services = [
  {
    id: '01',
    title: 'Paket Combo Kaki Kaki',
    description:
      'Solusi lengkap untuk suspensi, tersedia dalam berbagai pilihan combo (+AC, +Engine Tune Up, +Auto Detailing, +Rust Protection). Promo spesial mulai dari 1.600K.',
    image: '/galeri3.webp',
    price: 'Mulai dari Rp 1.600.000,-', // Harga ditambahkan di sini
  },
  {
    id: '02',
    title: 'Paket Combo Super Komplit',
    description:
      'Perawatan total meliputi mesin, kaki-kaki, dan servis berkala lainnya.',
    image: '/galeri1.webp',
  },
  {
    id: '03',
    title: 'Paket Custom Suspension',
    description:
      'Modifikasi dan penyesuaian suspensi untuk performa dan gaya maksimal.',
    image: '/bengkel4.webp',
  },
  {
    id: '04',
    title: 'Paket Diesel',
    description:
      'Perawatan khusus untuk mesin diesel, termasuk injektor dan filter solar.',
    image: '/galeri4.webp',
  },
  {
    id: '05',
    title: 'Paket Kaki Kaki',
    description:
      'Pengecekan dan perbaikan komponen suspensi, tie rod, dan ball joint.',
    image: '/galeri3.webp',
  },
  {
    id: '06',
    title: 'Paket Overhoul Engine',
    description:
      'Pembongkaran dan perbaikan total untuk mengembalikan performa mesin.',
    image: '/galeri1.webp',
  },
  {
    id: '07',
    title: 'Paket Racksteer Hemat',
    description:
      'Solusi ekonomis untuk memperbaiki masalah sistem kemudi rack steer.',
    image: '/galeri2.webp',
  },
  {
    id: '08',
    title: 'Paket Special',
    description:
      'Layanan kustom sesuai kebutuhan spesifik kendaraan premium Anda.',
    image: '/bengkel4.webp',
  },
  {
    id: '09',
    title: 'Paket Steering',
    description:
      'Perbaikan komprehensif untuk semua jenis masalah sistem kemudi.',
    image: '/galeri2.webp',
  },
  {
    id: '10',
    title: 'Paket Super Hemat',
    description:
      'Paket servis berkala dengan harga terjangkau untuk semua jenis mobil.',
    image: '/galeri4.webp',
  },
];

export default function ServicePackages() {
  const [hoveredServiceId, setHoveredServiceId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakpoint = useBreakpoint();
  const itemsPerView = breakpoint === 'lg' || breakpoint === 'xl' ? 4 : 2;

  const totalItems = services.length;
  const maxIndex = totalItems - itemsPerView;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentImage =
    services.find((s) => s.id === hoveredServiceId)?.image ||
    services[currentIndex]?.image ||
    services[0].image;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section ref={ref} className="font-jakarta w-full bg-background">
      <div className="relative w-full overflow-hidden">
        {/* Gambar latar belakang utama */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>

        {/* Kontainer Carousel */}
        <div
          className={`relative z-10 h-[70vh] lg:h-[80vh] w-full flex flex-col justify-between transition-all duration-700 ease-out ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
          onMouseLeave={() => setHoveredServiceId(null)}
        >
          <div className="relative h-full overflow-hidden flex-grow">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                width: `${(totalItems / itemsPerView) * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / totalItems}%)`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / totalItems}%` }}
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                >
                  <div className="relative flex flex-col justify-between p-6 md:p-8 text-white cursor-pointer h-full border-r border-white/20">
                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        hoveredServiceId === service.id
                          ? 'bg-primary/70'
                          : 'bg-black/50'
                      }`}
                    ></div>
                    <div
                      className={`relative z-10 text-4xl font-bold transition-opacity duration-300 ${
                        hoveredServiceId === service.id
                          ? 'opacity-0'
                          : 'opacity-100'
                      }`}
                    >
                      {service.id}
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          hoveredServiceId === service.id
                            ? 'max-h-[4rem] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="text-[3rem] font-bold text-transparent [-webkit-text-stroke:1px_white]">
                          {service.id}
                        </div>
                      </div>
                      <div className="min-h-[3rem] w-full table">
                        <h3 className="text-lg md:text-2xl font-bold table-cell align-bottom">
                          {service.title}
                        </h3>
                      </div>

                      {/* Tampilkan Harga Sebelum Hover */}
                      {service.price && (
                        <div
                          className={`transition-all duration-300 ease-in-out mt-2 ${
                            hoveredServiceId === service.id
                              ? 'max-h-0 opacity-0'
                              : 'max-h-40 opacity-100'
                          }`}
                        >
                          <p className="text-sm font-semibold">
                            {service.price}
                          </p>
                        </div>
                      )}

                      {/* Tampilkan Deskripsi Saat Hover */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          hoveredServiceId === service.id
                            ? 'max-h-40 opacity-100 mt-4'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-xs sm:text-sm">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-2">
                        <ArrowRight
                          size={24}
                          className={`text-white transition-transform duration-300 ease-in-out ${
                            hoveredServiceId === service.id
                              ? '-rotate-45'
                              : 'rotate-0'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end items-center gap-4 py-6 px-4 sm:px-8 pr-8">
        <button
          onClick={handlePrev}
          className="p-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
