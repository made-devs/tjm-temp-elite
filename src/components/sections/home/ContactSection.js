"use client";

import { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import LocationSlider from "../../ui/LocationSlider";

// Data untuk setiap lokasi bengkel
const workshopLocations = [
  {
    id: "bks",
    city: "Bekasi",
    address: "Jl. Otomotif Utama No. 1, Bekasi, Jawa Barat",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel1.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.060788343603!2d106.8020353153597!3d-6.255627695471445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d7d7a5847%3A0x194e3a3d58e827a3!2sBlok%20M%20Square!5e0!3m2!1sen!2sid!4v1678886655443!5m2!1sen!2sid",
  },
  {
    id: "jkb",
    city: "Jakarta Barat",
    address: "Jl. Industri Maju No. 2, Jakarta Barat, DKI Jakarta",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel2.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.344831626578!2d112.7533613153603!3d-7.31511699472013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb76586dd39b%3A0x441b4a3254942e69!2sTrans%20Icon%20Mall%20Surabaya!5e0!3m2!1sen!2sid!4v1678886754321!5m2!1sen!2sid",
  },
  {
    id: "clk",
    city: "Cilangkap",
    address: "Jl. Raya Cilangkap No. 3, Jakarta Timur, DKI Jakarta",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel3.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.989939198305!2d107.5911043153608!3d-6.89196999502128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e643576b7959%3A0x1c9b689f67a3d28!2sParis%20Van%20Java%20Mall!5e0!3m2!1sen!2sid!4v1678886801234!5m2!1sen!2sid",
  },
  {
    id: "bdg",
    city: "Bandung",
    address: "Jl. Kreatif No. 4, Sukajadi, Bandung, Jawa Barat",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel4.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.016999748166!2d98.6722063153591!3d3.58385399739097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d279344005%3A0x35b99a22b3252a9a!2sSun%20Plaza!5e0!3m2!1sen!2sid!4v1678886845678!5m2!1sen!2sid",
  },
  {
    id: "smg",
    city: "Semarang",
    address: "Jl. Pahlawan No. 5, Semarang, Jawa Tengah",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel1.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.060788343603!2d106.8020353153597!3d-6.255627695471445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d7d7a5847%3A0x194e3a3d58e827a3!2sBlok%20M%20Square!5e0!3m2!1sen!2sid!4v1678886655443!5m2!1sen!2sid",
  },
  {
    id: "jog",
    city: "Jogja",
    address: "Jl. Malioboro No. 6, Yogyakarta, DIY",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel2.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.344831626578!2d112.7533613153603!3d-7.31511699472013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb76586dd39b%3A0x441b4a3254942e69!2sTrans%20Icon%20Mall%20Surabaya!5e0!3m2!1sen!2sid!4v1678886754321!5m2!1sen!2sid",
  },
  {
    id: "bgr",
    city: "Bogor",
    address: "Jl. Raya Pajajaran No. 7, Bogor, Jawa Barat",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel3.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.989939198305!2d107.5911043153608!3d-6.89196999502128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e643576b7959%3A0x1c9b689f67a3d28!2sParis%20Van%20Java%20Mall!5e0!3m2!1sen!2sid!4v1678886801234!5m2!1sen!2sid",
  },
  {
    id: "tgs",
    city: "Tangsel",
    address: "Jl. Boulevard BSD No. 8, Tangerang Selatan, Banten",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel4.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.016999748166!2d98.6722063153591!3d3.58385399739097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d279344005%3A0x35b99a22b3252a9a!2sSun%20Plaza!5e0!3m2!1sen!2sid!4v1678886845678!5m2!1sen!2sid",
  },
  {
    id: "sby",
    city: "Surabaya",
    address: "Jl. Tunjungan No. 9, Surabaya, Jawa Timur",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel1.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.060788343603!2d106.8020353153597!3d-6.255627695471445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d7d7a5847%3A0x194e3a3d58e827a3!2sBlok%20M%20Square!5e0!3m2!1sen!2sid!4v1678886655443!5m2!1sen!2sid",
  },
  {
    id: "mdn1",
    city: "Medan 1",
    address: "Jl. Sumatera Raya No. 10, Medan, Sumatera Utara",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel2.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.344831626578!2d112.7533613153603!3d-7.31511699472013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb76586dd39b%3A0x441b4a3254942e69!2sTrans%20Icon%20Mall%20Surabaya!5e0!3m2!1sen!2sid!4v1678886754321!5m2!1sen!2sid",
  },
  {
    id: "mdn2",
    city: "Medan 2",
    address: "Jl. Gatot Subroto No. 11, Medan, Sumatera Utara",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel3.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.989939198305!2d107.5911043153608!3d-6.89196999502128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e643576b7959%3A0x1c9b689f67a3d28!2sParis%20Van%20Java%20Mall!5e0!3m2!1sen!2sid!4v1678886801234!5m2!1sen!2sid",
  },
  {
    id: "plm",
    city: "Palembang",
    address: "Jl. Jend. Sudirman No. 12, Palembang, Sumatera Selatan",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel4.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.016999748166!2d98.6722063153591!3d3.58385399739097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d279344005%3A0x35b99a22b3252a9a!2sSun%20Plaza!5e0!3m2!1sen!2sid!4v1678886845678!5m2!1sen!2sid",
  },
  {
    id: "mks",
    city: "Makassar",
    address: "Jl. Sultan Hasanuddin No. 13, Makassar, Sulawesi Selatan",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel1.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.060788343603!2d106.8020353153597!3d-6.255627695471445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d7d7a5847%3A0x194e3a3d58e827a3!2sBlok%20M%20Square!5e0!3m2!1sen!2sid!4v1678886655443!5m2!1sen!2sid",
  },
  {
    id: "blp",
    city: "Balikpapan",
    address: "Jl. Minyak No. 14, Balikpapan, Kalimantan Timur",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel2.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.344831626578!2d112.7533613153603!3d-7.31511699472013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb76586dd39b%3A0x441b4a3254942e69!2sTrans%20Icon%20Mall%20Surabaya!5e0!3m2!1sen!2sid!4v1678886754321!5m2!1sen!2sid",
  },
  {
    id: "bli",
    city: "Bali",
    address: "Jl. Sunset Road No. 15, Kuta, Bali",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel3.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.989939198305!2d107.5911043153608!3d-6.89196999502128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e643576b7959%3A0x1c9b689f67a3d28!2sParis%20Van%20Java%20Mall!5e0!3m2!1sen!2sid!4v1678886801234!5m2!1sen!2sid",
  },
  {
    id: "mlg",
    city: "Malang",
    address: "Jl. Ijen No. 16, Malang, Jawa Timur",
    hours: "08:00 - 17:00 WIB",
    photo: "/bengkel4.webp",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.016999748166!2d98.6722063153591!3d3.58385399739097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d279344005%3A0x35b99a22b3252a9a!2sSun%20Plaza!5e0!3m2!1sen!2sid!4v1678886845678!5m2!1sen!2sid",
  },
];

export default function ContactSection() {
  const [activeId, setActiveId] = useState(workshopLocations[0].id);
  const [mapContent, setMapContent] = useState(workshopLocations[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  });
  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 400,
  });

  const handleSelectSlide = useCallback(
    (id) => {
      if (id === activeId) return;

      setIsTransitioning(true);
      setTimeout(() => {
        setActiveId(id);
        setMapContent(workshopLocations.find((w) => w.id === id));
        setIsTransitioning(false);
      }, 350); // Setengah dari durasi transisi
    },
    [activeId]
  );

  return (
    <section className="w-full font-jakarta bg-background py-24">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-left mb-12 transition-all duration-700 ease-out ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            LOKASI KAMI
          </p>
          <h2 className="text-5xl font-extrabold text-foreground mt-2">
            Temukan Bengkel Terdekat
          </h2>
        </div>

        <div
          ref={sliderRef}
          className={`transition-all duration-700 ease-out ${
            sliderInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <LocationSlider
            locations={workshopLocations}
            onSelectSlide={handleSelectSlide}
          />
        </div>

        {/* Peta Interaktif dengan transisi blur */}
        <div
          ref={mapRef}
          className={`mt-16 w-full h-[500px] rounded-lg overflow-hidden transition-all duration-700 ease-out ${
            mapInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`w-full h-full transition-all duration-700 ease-out ${
              isTransitioning ? "opacity-0 blur-md" : "opacity-100 blur-0"
            }`}
          >
            <iframe
              key={mapContent.id}
              src={mapContent.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
