'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer'; // Import hook

export default function ServicePackages() {
  const services = [
    {
      id: '01',
      title: 'Perawatan Mesin Lengkap',
      description:
        'Pembongkaran dan perbaikan total untuk mengembalikan performa dan kesehatan mesin.',
      image: '/galeri1.webp',
    },
    {
      id: '02',
      title: 'Perbaikan Interior & Eksterior',
      description:
        'Pembersihan mendalam dan perbaikan panel interior untuk kenyamanan maksimal.',
      image: '/galeri2.webp',
    },
    {
      id: '03',
      title: 'Sistem Suspensi & Rem',
      description:
        'Penggantian dan perbaikan sistem suspensi dan rem untuk kenyamanan dan keamanan.',
      image: '/galeri3.webp',
    },
    {
      id: '04',
      title: 'Diagnosa & Perbaikan Umum',
      description:
        'Diagnosa komprehensif dan perbaikan umum untuk berbagai masalah kendaraan.',
      image: '/galeri4.webp',
    },
  ];

  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  // Hook untuk memantau visibilitas section
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Memicu animasi saat 10% section terlihat
  });

  const currentImage =
    services.find((service) => service.id === hoveredServiceId)?.image ||
    services[0].image;

  return (
    <section ref={ref} className="relative font-jakarta w-full overflow-hidden">
      {/* Gambar latar belakang utama */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>

      {/* Kontainer dengan animasi */}
      <div
        className={`
          relative z-10 grid grid-cols-2 lg:flex lg:h-[70vh]
          transition-all duration-700 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        onMouseLeave={() => setHoveredServiceId(null)}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`
              relative flex flex-col justify-between p-6 md:p-8 text-white cursor-pointer 
              h-[50vh] lg:h-full lg:flex-1
              border-b border-r border-white/20 
              lg:border-l lg:border-b-0 lg:first:border-l-0 
              ${index % 2 !== 0 ? 'border-r-0' : ''} 
              lg:border-r-0
            `}
            onMouseEnter={() => setHoveredServiceId(service.id)}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-300
                ${
                  hoveredServiceId === service.id
                    ? 'bg-orange-600/70'
                    : 'bg-black/50'
                }
              `}
            ></div>

            {/* Bagian Atas: Nomor Layanan */}
            <div
              className={`relative z-10 text-4xl  font-bold transition-opacity duration-300
                ${hoveredServiceId === service.id ? 'opacity-0' : 'opacity-100'}
              `}
            >
              {service.id}
            </div>

            {/* Bagian Bawah: Judul, Deskripsi, dan Panah */}
            <div className="relative z-10">
              {/* Nomor yang muncul di atas judul saat di-hover */}
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

              {/* Judul */}
              <div className="min-h-[3rem] w-full table">
                <h3 className="text-xl md:text-2xl font-bold table-cell align-bottom">
                  {service.title}
                </h3>
              </div>

              {/* Deskripsi yang muncul saat di-hover */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden
                  ${
                    hoveredServiceId === service.id
                      ? 'max-h-40 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }
                `}
              >
                <p className="text-sm">{service.description}</p>
              </div>

              {/* Panah selalu terlihat dan berotasi saat di-hover */}
              <div className="mt-2">
                <ArrowRight
                  size={24}
                  className={`text-white transition-transform duration-300 ease-in-out
                    ${
                      hoveredServiceId === service.id
                        ? '-rotate-45'
                        : 'rotate-0'
                    }
                  `}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
