"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ServicePackages() {
  const services = [
    {
      id: "01",
      title: "Perawatan Mesin Lengkap",
      description:
        "Pembongkaran dan perbaikan total untuk mengembalikan performa dan kesehatan mesin.",
      image: "/galeri1.webp",
    },
    {
      id: "02",
      title: "Perbaikan Interior & Eksterior",
      description:
        "Pembersihan mendalam dan perbaikan panel interior untuk kenyamanan maksimal.",
      image: "/galeri2.webp",
    },
    {
      id: "03",
      title: "Sistem Suspensi & Rem",
      description:
        "Penggantian dan perbaikan sistem suspensi dan rem untuk kenyamanan dan keamanan.",
      image: "/galeri3.webp",
    },
    {
      id: "04",
      title: "Diagnosa & Perbaikan Umum",
      description:
        "Diagnosa komprehensif dan perbaikan umum untuk berbagai masalah kendaraan.",
      image: "/galeri4.webp",
    },
  ];

  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  const currentImage =
    services.find((service) => service.id === hoveredServiceId)?.image ||
    services[0].image;

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Gambar latar utama */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>

      {/* Kontainer untuk layanan, dengan garis pemisah */}
      <div
        className="absolute inset-0 flex divide-x divide-white/20"
        onMouseLeave={() => setHoveredServiceId(null)}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative flex-1 flex flex-col justify-between p-8 text-white cursor-pointer`}
            onMouseEnter={() => setHoveredServiceId(service.id)}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-300
                ${
                  hoveredServiceId === service.id
                    ? "bg-orange-600/70"
                    : "bg-black/50"
                }
              `}
            ></div>

            {/* Bagian Atas: Nomor Layanan (menghilang saat di-hover) */}
            <div
              className={`relative z-10 text-4xl font-jakarta font-bold transition-opacity duration-300
                ${hoveredServiceId === service.id ? "opacity-0" : "opacity-100"}
              `}
            >
              {service.id}
            </div>

            {/* Bagian Bawah: Judul, Deskripsi, dan Panah */}
            <div className="relative z-10">
              {/* Nomor yang muncul di atas judul saat di-hover */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  hoveredServiceId === service.id
                    ? "max-h-[4rem] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {/* THE FIX: Ditambahkan class untuk efek stroke */}
                <div className="text-[3rem] font-bold text-transparent [-webkit-text-stroke:1px_white]">
                  {service.id}
                </div>
              </div>

              {/* Judul */}
              <div className="min-h-[3rem] w-full table">
                <h3 className="text-2xl font-bold table-cell align-bottom">
                  {service.title}
                </h3>
              </div>

              {/* Deskripsi yang muncul saat di-hover */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden
                  ${
                    hoveredServiceId === service.id
                      ? "max-h-40 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <p className="text-sm">{service.description}</p>
              </div>

              {/* Panah selalu terlihat dan berotasi saat di-hover */}
              <div className="mt-2">
                <ArrowRight
                  size={24}
                  className={`text-white transition-transform duration-300 ease-in-out
                    ${
                      hoveredServiceId === service.id
                        ? "-rotate-45"
                        : "rotate-0"
                    }
                  `}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
