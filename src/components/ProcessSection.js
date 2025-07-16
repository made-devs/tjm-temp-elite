"use client";

import { useRef, useEffect } from "react";
import Image from "next/image"; // Import Image
import { ScanSearch, FileText, Wrench, CheckCircle } from "lucide-react";

// Data untuk tahapan proses kerja
const processSteps = [
  {
    id: "01",
    title: "Inspeksi & Diagnosa",
    description:
      "Tim kami melakukan pemeriksaan menyeluruh menggunakan alat canggih untuk mengidentifikasi sumber masalah secara akurat.",
    icon: ScanSearch,
  },
  {
    id: "02",
    title: "Estimasi & Persetujuan",
    description:
      "Kami memberikan estimasi biaya yang transparan dan detail. Pengerjaan hanya akan dimulai setelah Anda menyetujuinya.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Pengerjaan Presisi",
    description:
      "Mekanik ahli kami mengerjakan perbaikan atau perawatan sesuai standar tertinggi dengan suku cadang berkualitas.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Quality Control & Serah Terima",
    description:
      "Setiap kendaraan melewati tahap quality control yang ketat sebelum kami serahkan kembali kepada Anda dengan garansi.",
    icon: CheckCircle,
  },
];

export default function ProcessSection() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const onScroll = () => {
      const { top, height } = container.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      // Hanya aktifkan efek saat section berada di viewport
      if (top < 0 && top > -scrollableHeight) {
        const progress = -top / scrollableHeight;
        const maxTranslate = target.scrollWidth - target.clientWidth;
        const translateX = -progress * maxTranslate;

        target.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Container utama yang tingginya 3x viewport untuk memberikan ruang scroll
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="container mx-auto grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* THE FIX: Kolom Kiri sekarang berisi gambar */}
          <div className="relative h-full w-full p-8 hidden lg:flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-foreground mb-4">
              Proses Kerja Kami
            </h2>
            <div className="relative w-full h-3/5 rounded-lg overflow-hidden">
              <Image
                src="/galeri3.webp" // Ganti dengan gambar yang sesuai
                alt="Proses Kerja TJM"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Kolom Kanan: Timeline yang Bergerak Horizontal */}
          <div className="flex h-full items-center">
            <div ref={targetRef} className="flex w-max gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="w-[80vw] max-w-md rounded-lg border border-muted/20 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon size={24} />
                    </div>
                    <span className="text-5xl font-bold text-foreground/10">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
