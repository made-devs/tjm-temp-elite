"use client";

import { useState, useEffect } from "react"; // 1. Tambahkan useEffect
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useInView } from "react-intersection-observer";
import useBreakpoint from "../../hooks/useBreakpoint";

const services = [
  {
    id: "01",
    title: "Paket Combo Kaki Kaki",
    description:
      "Atasi masalah kaki-kaki mobil dengan Paket Combo Komplit kami. Pilih tambahan layanan sesuai kebutuhan Anda: Tune Up Mesin, Perawatan AC, Anti Karat, atau Full Auto Detailing. Solusi lengkap untuk performa dan kenyamanan, harga promo mulai dari Rp 1.600.000,-",
    image: "/galeri3.webp",
    price: "Mulai dari Rp 1.600.000,-",
  },
  {
    id: "02",
    title: "Paket Combo Super Komplit",
    description:
      "Perawatan total mobil dengan seri Paket Combo Super Komplit. Pilih tingkatan sesuai kebutuhan, dari servis esensial hingga paket All In One. Lengkap, bergaransi, harga mulai Rp 2.200.000,-",
    image: "/galeri1.webp",
    price: "Mulai dari Rp 2.200.000,-", // Ditambahkan
  },
  {
    id: "03",
    title: "Paket Custom Suspension",
    description:
      "Ubah tampilan dan handling mobil sesuai keinginanmu dengan seri Paket Custom Suspension. Pilih level modifikasi dari Paket Hemat (cutting per), + Custom Spring, hingga + Custom Coilover untuk kontrol penuh. Semua paket sudah termasuk tune up dan inspeksi. Dapatkan suspensi idamanmu, harga mulai dari Rp 999.000,-.",
    image: "/galeri6.webp",
    price: "Mulai dari Rp 999.000,-", // Ditambahkan
  },
  {
    id: "04",
    title: "Paket Diesel",
    description:
      "Maksimalkan performa mesin diesel Anda dengan seri Paket Tune Up Diesel. Pilih dari level Komplit, Super Komplit, hingga Ultimate untuk pembersihan dan kalibrasi menyeluruh. Jaga mesin diesel Anda tetap prima, harga mulai dari Rp 999.000,-",
    image: "/galeri4.webp",
    price: "Mulai dari Rp 999.000,-", // Ditambahkan
  },
  {
    id: "05",
    title: "Paket Kaki Kaki",
    description:
      "Kembalikan kenyamanan berkendara dengan seri Paket Kaki-Kaki kami. Tersedia dalam berbagai tingkatan dari Super Hemat, Komplit, Super Komplit, hingga Ultimate untuk mengatasi semua masalah suspensi Anda. Solusi lengkap untuk kaki-kaki, harga promo mulai dari Rp 990.000,-",
    image: "/galeri3.webp",
    price: "Mulai dari Rp 990.000,-", // Ditambahkan
  },
  {
    id: "06",
    title: "Paket Overhaul Engine",
    description:
      "Cegah biaya mahal dengan seri Paket Overhaul Engine kami untuk membersihkan kerak dan lumpur mesin. Pilih dari paket standar, Komplit, hingga Super sesuai kebutuhan Anda. Kembalikan performa mesin, harga mulai dari Rp 2.500.000,-",
    image: "/galeri1.webp",
    price: "Mulai dari Rp 2.500.000,-", // Ditambahkan
  },
  {
    id: "07",
    title: "Paket Racksteer Hemat",
    description:
      "Atasi masalah racksteer dan kaki-kaki dengan Paket Racksteer Hemat. Solusi lengkap dan bergaransi untuk mengembalikan kestabilan dan kenyamanan kemudi Anda, harga promo mulai dari Rp 1.250.000,-",
    image: "/galeri2.webp",
    price: "Mulai dari Rp 1.250.000,-", // Ditambahkan
  },
  {
    id: "08",
    title: "Paket Special",
    description:
      "Pilih dari beragam TJM Special Package untuk perawatan mobil yang cepat dan terjangkau. Mulai dari Paket Basic untuk tune up, hingga paket yang lebih lengkap seperti Platinum. Solusi hemat untuk berbagai kebutuhan, harga mulai dari Rp 375.000,-",
    image: "/bengkel4.webp",
    price: "Mulai dari Rp 375.000,-", // Ditambahkan
  },
  {
    id: "09",
    title: "Paket Steering",
    description:
      "Atasi semua masalah sistem kemudi dengan seri Paket Steering kami. Pilih dari Paket Komplit untuk perbaikan mendasar, atau gabungkan dengan perbaikan kaki-kaki melalui Paket Combo Super Komplit dan Ultimate. Solusi presisi untuk kemudi yang stabil, harga mulai Rp 1.500.000,-",
    image: "/galeri2.webp",
    price: "Mulai dari Rp 1.500.000,-", // Ditambahkan
  },
  {
    id: "10",
    title: "Paket Super Hemat",
    description:
      "Dapatkan perawatan terlengkap dan terhemat dengan seri Paket Super Hemat kami. Pilih dari berbagai variasi yang mencakup tune up, pembersihan mesin, hingga kombinasi dengan servis AC atau auto detailing. Solusi lengkap dan terjangkau, harga mulai Rp 1.400.000,-",
    image: "/galeri4.webp",
    price: "Mulai dari Rp 1.400.000,-", // Ditambahkan
  },
];

export default function ServicePackages() {
  const [hoveredServiceId, setHoveredServiceId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakpoint = useBreakpoint();
  const itemsPerView = breakpoint === "lg" || breakpoint === "xl" ? 4 : 2;

  const totalItems = services.length;
  const maxIndex = totalItems - itemsPerView;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 2. Preload images saat komponen pertama kali render
  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  const currentImage =
    services.find((s) => s.id === hoveredServiceId)?.image ||
    services[currentIndex]?.image ||
    services[0].image;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section ref={ref} className="font-jakarta w-full bg-background">
      <div className="relative w-full overflow-hidden">
        {/* Gambar latar belakang utama */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>

        {/* Kontainer Carousel */}
        <div
          className={`relative z-10 h-[70vh] lg:h-[80vh] w-full flex flex-col justify-between transition-all duration-700 ease-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          onMouseLeave={() => setHoveredServiceId(null)}
        >
          <div className="relative h-full overflow-hidden flex-grow">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                width: `${(totalItems / itemsPerView) * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / totalItems}%)`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / totalItems}%` }}
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                >
                  <div className="relative flex flex-col justify-between p-6 md:p-8 text-white cursor-pointer h-full border-r border-white/20">
                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        hoveredServiceId === service.id
                          ? "bg-primary/70"
                          : "bg-black/50"
                      }`}
                    ></div>
                    <div
                      className={`relative z-10 text-4xl font-bold transition-opacity duration-300 ${
                        hoveredServiceId === service.id
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    >
                      {service.id}
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          hoveredServiceId === service.id
                            ? "max-h-[4rem] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-[3rem] font-bold text-transparent [-webkit-text-stroke:1px_white]">
                          {service.id}
                        </div>
                      </div>
                      <div className="min-h-[3rem] w-full table">
                        <h3 className="text-lg md:text-2xl font-bold table-cell align-bottom">
                          {service.title}
                        </h3>
                      </div>

                      {service.price && (
                        <div
                          className={`transition-all duration-300 ease-in-out mt-2 ${
                            hoveredServiceId === service.id
                              ? "max-h-0 opacity-0"
                              : "max-h-40 opacity-100"
                          }`}
                        >
                          <p className="text-sm font-semibold">
                            {service.price}
                          </p>
                        </div>
                      )}

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          hoveredServiceId === service.id
                            ? "max-h-40 opacity-100 mt-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs sm:text-sm">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-2">
                        <ArrowRight
                          size={24}
                          className={`text-white transition-transform duration-300 ease-in-out ${
                            hoveredServiceId === service.id
                              ? "-rotate-45"
                              : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end items-center gap-4 py-6 px-4 sm:px-8 pr-8">
        <button
          onClick={handlePrev}
          className="p-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
