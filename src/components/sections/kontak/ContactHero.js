"use client";

import { useInView } from "react-intersection-observer";

export default function ContactHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="relative h-[50vh] w-full flex items-center font-jakarta justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/bengkel3.webp')` }}
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
          Hubungi Kami
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-4">
          Kami Siap Membantu
        </h1>
      </div>
    </section>
  );
}
