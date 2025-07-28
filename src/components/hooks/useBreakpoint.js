'use client';

import { useState, useEffect } from 'react';

// Nilai breakpoint Tailwind CSS (dalam piksel)
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

/**
 * Custom hook untuk mendapatkan breakpoint aktif berdasarkan lebar layar.
 * @returns {string} Nama breakpoint aktif ('sm', 'md', 'lg', 'xl').
 */
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setBreakpoint('md');
      } else {
        setBreakpoint('sm');
      }
    };

    handleResize(); // Panggil sekali saat inisialisasi
    window.addEventListener('resize', handleResize);

    // Cleanup listener saat komponen di-unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
