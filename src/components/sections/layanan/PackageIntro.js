"use client";

import { useInView } from "react-intersection-observer";

export default function PackageIntro() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-background font-jakarta text-foreground pt-24">
      {/* - Durasi diubah menjadi 1000ms (lebih lambat)
        - Delay diubah menjadi 500ms agar muncul setelah header
      */}
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-3xl text-center transition-all duration-1000 ease-out delay-500 ${
          inView
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-10 blur-md"
        }`}
      >
        <p className="text-primary uppercase tracking-widest text-sm font-semibold">
          SOLUSI KAKI-KAKI LENGKAP
        </p>
        <h2 className="text-5xl font-extrabold text-foreground mt-4">
          Kenyamanan & Keamanan Berkendara
        </h2>
        <p className="text-muted mt-6 text-lg">
          Paket Combo Kaki-Kaki kami dirancang untuk mengatasi semua masalah
          suspensi secara menyeluruh. Pilih dari berbagai kombinasi paket
          tambahan untuk mendapatkan perawatan paling sesuai dengan kebutuhan
          mobil Anda.
        </p>
      </div>
    </section>
  );
}
