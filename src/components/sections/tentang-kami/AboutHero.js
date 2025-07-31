"use client";

import { useInView } from "react-intersection-observer";

export default function AboutHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="relative h-[60vh] w-full flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/galeri5.webp')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div
        ref={ref}
        className={`relative z-10 text-center transition-all duration-1000 ease-out ${
          inView
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <p className="text-sm uppercase tracking-widest text-gray-300">
          Lebih Dari Sekadar Bengkel
        </p>
        <h1 className="text-5xl md:text-8xl font-extrabold mt-4">
          Cerita Kami
        </h1>
      </div>
    </section>
  );
}
