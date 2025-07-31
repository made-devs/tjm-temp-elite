"use client";

import { useInView } from "react-intersection-observer";

// Komponen sekarang menerima data intro sebagai props
export default function PackageIntro({ introData }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-background text-foreground py-24">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-3xl text-center transition-all duration-1000 ease-out delay-500 ${
          inView
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <p className="text-primary uppercase tracking-widest text-sm font-semibold">
          {introData.subTitle}
        </p>
        <h2 className="text-5xl font-extrabold text-foreground mt-4">
          {introData.title}
        </h2>
        <p className="text-muted mt-6 text-lg">{introData.description}</p>
      </div>
    </section>
  );
}
