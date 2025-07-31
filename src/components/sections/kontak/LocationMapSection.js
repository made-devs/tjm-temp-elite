"use client";

import { useInView } from "react-intersection-observer";

export default function LocationMapSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // URL Peta dari Google My Maps yang berisi semua cabang
  const allBranchesMapUrl =
    "https://www.google.com/maps/d/embed?mid=1_g-s4fJz7q3k_rYp9Xv0wZc8bN9eL4s&ehbc=2E312F";

  return (
    <section
      ref={ref}
      className={`bg-foreground text-white py-24 transition-all duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold">Temukan Kami</h2>
        <p className="text-muted mt-4 max-w-2xl mx-auto">
          Kunjungi salah satu dari beberapa cabang kami yang tersebar di
          kota-kota besar Indonesia.
        </p>
        <div className="mt-12 w-full h-[60vh] rounded-lg overflow-hidden border-4 border-muted/20">
          <iframe
            src={allBranchesMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
