'use client';

import Marquee from 'react-fast-marquee';
import { Wrench } from 'lucide-react';

const MarqueeItem = ({ text, color, icon: Icon }) => (
  // Menambahkan margin horizontal (mx-8) untuk memberi jarak
  <div
    className={`flex items-center gap-8 text-4xl md:text-5xl font-extrabold uppercase ${color} mx-8`}
  >
    <span>{text}</span>
    <Icon size={36} className="flex-shrink-0" />
  </div>
);

export default function MarqueeSection() {
  return (
    <section className="w-full py-12 font-jakarta bg-background overflow-hidden">
      {/* Baris Atas (Merah, ke Kiri) */}
      <Marquee speed={80} pauseOnHover={true}>
        <MarqueeItem
          text="Kualitas Terjamin"
          color="text-red-600"
          icon={Wrench}
        />
        <MarqueeItem text="Servis Handal" color="text-red-600" icon={Wrench} />
        <MarqueeItem
          text="Harga Transparan"
          color="text-red-600"
          icon={Wrench}
        />
      </Marquee>

      {/* Baris Bawah (Hitam, ke Kanan) */}
      <div className="mt-4">
        <Marquee direction="right" speed={80} pauseOnHover={true}>
          <MarqueeItem
            text="Servis Profesional"
            color="text-black"
            icon={Wrench}
          />
          <MarqueeItem text="Mekanik Ahli" color="text-black" icon={Wrench} />
          <MarqueeItem
            text="Pengerjaan Cepat"
            color="text-black"
            icon={Wrench}
          />
        </Marquee>
      </div>
    </section>
  );
}
