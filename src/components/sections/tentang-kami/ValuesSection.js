"use client";

import { Wrench, Cpu, Eye } from "lucide-react";
import { useInView } from "react-intersection-observer";

const values = [
  {
    icon: Wrench,
    title: "Profesionalisme",
    description:
      "Tim kami terdiri dari mekanik bersertifikat yang terus mengikuti pelatihan untuk menangani teknologi otomotif terbaru.",
  },
  {
    icon: Cpu,
    title: "Teknologi Modern",
    description:
      "Kami berinvestasi pada peralatan diagnostik dan perbaikan canggih untuk memastikan setiap pekerjaan dilakukan dengan presisi.",
  },
  {
    icon: Eye,
    title: "Transparansi Penuh",
    description:
      "Tidak ada biaya tersembunyi. Anda akan selalu mendapatkan penjelasan detail dan persetujuan sebelum kami mengerjakan kendaraan Anda.",
  },
];

export default function ValuesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="bg-foreground text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            Prinsip Kami
          </p>
          <h2 className="text-5xl font-extrabold mt-2">Pilar Utama Layanan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg bg-[#2c2c2c] transition-all duration-500 ease-out ${
                inView
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-10 blur-md"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <value.icon className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold mt-6">{value.title}</h3>
              <p className="text-muted mt-4">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
