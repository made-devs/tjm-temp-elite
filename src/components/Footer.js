'use client';

import Image from 'next/image';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  // Fungsi untuk scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-foreground text-white py-16">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image src="/logotjm.webp" alt="TJM Logo" width={120} height={34} />
        </div>

        {/* Navigasi */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-muted">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Layanan
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Kontak
          </a>
        </nav>

        {/* Ikon Sosial Media */}
        <div className="flex items-center gap-6 mb-12">
          <a href="#" className="text-muted hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-muted hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-muted hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        {/* Garis Pemisah dan Copyright */}
        <div className="w-full max-w-4xl border-t border-muted/20 pt-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} TJM. All rights reserved.
          </p>
        </div>
      </div>

      {/* Tombol Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
