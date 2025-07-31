"use client";

import { useInView } from "react-intersection-observer";
import { Flag, Wrench, Users, Building } from "lucide-react";

// Data untuk timeline
const timelineEvents = [
  {
    year: "2015",
    title: "Awal Mula TJM",
    description:
      "Berawal dari garasi kecil dengan dua mekanik, TJM didirikan dengan satu visi: memberikan layanan otomotif yang jujur dan berkualitas.",
    icon: Flag,
  },
  {
    year: "2018",
    title: "Spesialisasi Kaki-Kaki",
    description:
      "Kami memfokuskan keahlian pada sistem suspensi dan kaki-kaki, menjadi salah satu bengkel rujukan di komunitas otomotif.",
    icon: Wrench,
  },
  {
    year: "2022",
    title: "Ekspansi Tim & Layanan",
    description:
      "Tim kami berkembang menjadi lebih dari 50 mekanik profesional. Kami juga menambahkan layanan servis mesin diesel dan overhaul.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Membuka Cabang Baru",
    description:
      "Untuk menjangkau lebih banyak pelanggan, TJM membuka cabang baru di Surabaya, Bandung, dan Medan, dilengkapi dengan teknologi terkini.",
    icon: Building,
  },
];

// Komponen untuk setiap item di timeline
const TimelineItem = ({ event, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isOdd = index % 2 !== 0;

  return (
    <div ref={ref} className="relative md:my-8">
      {/* Ikon di tengah (hanya di desktop) */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary p-3 rounded-full border-4 border-background z-10">
        <event.icon className="w-6 h-6 text-white" />
      </div>

      {/* Container untuk konten dan spacer */}
      <div
        className={`flex items-center ${isOdd ? "md:flex-row-reverse" : ""}`}
      >
        {/* Blok Konten */}
        <div
          className={`w-full md:w-1/2 transition-all duration-700 ease-out ${
            isOdd ? "md:pl-16" : "md:pr-16"
          } ${
            inView
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          <div
            className={`p-6 rounded-lg bg-foreground text-white shadow-lg ${
              isOdd ? "text-left" : "md:text-right"
            }`}
          >
            <p className="text-3xl font-bold text-primary">{event.year}</p>
            <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
            <p className="text-muted mt-2">{event.description}</p>
          </div>
        </div>

        {/* Blok Spacer (hanya di desktop) */}
        <div className="hidden md:block w-1/2"></div>
      </div>
    </div>
  );
};

export default function TimelineSection() {
  return (
    <section className="bg-background text-foreground py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            Perjalanan Kami
          </p>
          <h2 className="text-5xl font-extrabold mt-2">
            Dari Garasi Kecil Hingga Dipercaya Ribuan Pelanggan
          </h2>
        </div>
        <div className="relative">
          {/* Garis vertikal di tengah (hanya di desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-primary/30"></div>
          {/* Wrapper untuk item timeline */}
          <div className="space-y-8 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
