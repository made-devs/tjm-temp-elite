"use client";

import Image from "next/image";
import Link from "next/link"; // Impor komponen Link
import { Facebook, Instagram, ArrowUp } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-foreground text-white py-16">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <Link href="/" aria-label="Kembali ke Beranda" className="mb-8">
          <Image src="/logotjm.webp" alt="TJM Logo" width={120} height={34} />
        </Link>

        {/* SOLUSI: Mengganti semua <a> dengan <Link> untuk navigasi internal */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-muted">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link
            href="/tentang-kami"
            className="hover:text-white transition-colors"
          >
            Tentang Kami
          </Link>
          <Link href="/kontak" className="hover:text-white transition-colors">
            Kontak
          </Link>
        </nav>

        <div className="flex items-center gap-6 mb-12">
          <a
            href="https://www.facebook.com/profile.php?id=100069959570435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/tjmautocare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@tjmautocare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
          >
            <FaTiktok size={20} />
          </a>
        </div>

        <div className="w-full max-w-4xl border-t border-muted/20 pt-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} TJM. All rights reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
