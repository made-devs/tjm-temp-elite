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
        "Pembersihan mendalam dan perbaikan panel interior untuk kenyamanan maksimal, serta mengembalikan kilau cat mobil.",
      image: "/galeri2.webp",
    },
    {
      id: "03",
      title: "Sistem Suspensi & Rem",
      description:
        "Penggantian dan perbaikan sistem suspensi dan rem untuk kenyamanan dan keamanan berkendara.",
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

  // State untuk melacak service yang sedang di-hover.
  // Dimulai dengan service pertama sebagai default aktif.
  const [hoveredServiceId, setHoveredServiceId] = useState(services[0].id);

  // Menentukan gambar yang sedang aktif berdasarkan service yang di-hover
  const currentImage =
    services.find((service) => service.id === hoveredServiceId)?.image ||
    services[0].image;

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Gambar latar belakang utama untuk seluruh section, berubah saat di-hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500" // Transisi untuk perubahan gambar
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>

      {/* Kontainer untuk 4 bagian layanan */}
      <div className="absolute inset-0 flex">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative flex-1 flex flex-col justify-end p-8 text-white cursor-pointer transition-all duration-300
              ${
                hoveredServiceId === service.id ? "flex-[2]" : "flex-1"
              } // Bagian yang di-hover akan lebih lebar
            `}
            onMouseEnter={() => setHoveredServiceId(service.id)}
            onMouseLeave={() => setHoveredServiceId(services[0].id)} // Kembali ke gambar pertama saat mouse keluar
          >
            {/* Overlay untuk setiap bagian layanan */}
            <div
              className={`absolute inset-0 transition-opacity duration-300
                ${
                  hoveredServiceId === service.id
                    ? "bg-orange-600 opacity-70"
                    : "bg-black opacity-50"
                }
              `}
            ></div>

            {/* Konten (nomor, judul, deskripsi, panah) di atas overlay */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Bagian atas untuk ID */}
              <div className="text-4xl font-bold">{service.id}</div>

              {/* Bagian bawah untuk judul, deskripsi, dan panah */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p
                  className={`text-sm mb-4 transition-opacity duration-300
                    ${
                      hoveredServiceId === service.id
                        ? "opacity-100"
                        : "opacity-80"
                    }
                  `}
                >
                  {service.description}
                </p>
                <ArrowRight size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
