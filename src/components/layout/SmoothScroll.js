'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Inisialisasi library Lenis untuk smooth scroll
    const lenis = new Lenis();

    // Fungsi ini akan terus berjalan untuk membuat animasi scroll yang halus
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Fungsi cleanup untuk membersihkan instance saat halaman ditutup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Komponen ini tidak perlu merender elemen apapun ke layar
  return null;
}
