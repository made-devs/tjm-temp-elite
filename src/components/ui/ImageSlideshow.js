"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Komponen untuk menampilkan slideshow gambar dengan efek transisi blur.
 * @param {string[]} images - Array berisi path gambar.
 * @param {number} interval - Durasi setiap slide (dalam ms).
 */
export default function ImageSlideshow({ images, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Timer untuk mengganti gambar secara otomatis
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Membersihkan timer saat komponen unmount
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full min-h-[550px] rounded-lg overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Suasana bengkel TJM ${index + 1}`}
          fill
          className={`object-cover transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 blur-0 scale-100" // Efek gambar aktif
              : "opacity-0 blur-md scale-105" // Efek gambar tidak aktif
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
