"use client";

import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function PageHeader({ title, breadcrumb, backgroundImage }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative h-[50vh] w-full flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten Teks dengan Animasi Blur */}
      <div
        className={`relative z-10 text-center font-jakarta transition-all duration-700 ease-out ${
          inView
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <p className="text-sm uppercase tracking-widest text-gray-300">
          {breadcrumb}
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-4">{title}</h1>
      </div>

      {/* Tombol Scroll Down (Opsional) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button className="p-2 rounded-full border border-white/50 animate-bounce">
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
