'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer'; // Import hook

// Daftar logo partner
const partnerLogos = [
  { name: 'Blissful', src: '/logo-blissful.webp' },
  { name: 'Express', src: '/logo-express.webp' },
  { name: 'Lawfirm', src: '/logo-lawfirm.webp' },
  { name: 'Pasticuan', src: '/logo-pasticuan.webp' },
  { name: 'VIP', src: '/logo-vip.webp' },
];

export default function PartnersSection() {
  // Hook untuk memantau visibilitas section
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.2, // Memicu saat 20% elemen terlihat
  });

  return (
    <section
      ref={ref} // Terapkan ref ke section
      className="h-screen w-full relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/galeri5.webp')" }}
    >
      {/* Overlay gelap untuk kontras */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Barisan Logo di bagian bawah */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-muted/20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-around items-center flex-wrap gap-x-8 gap-y-6">
            {partnerLogos.map((logo, index) => (
              <div
                key={logo.name}
                className={`
                  relative h-12 w-40 px-4 flex-shrink-0
                  transition-all duration-500 ease-out
                  ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }} // Efek stagger
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
