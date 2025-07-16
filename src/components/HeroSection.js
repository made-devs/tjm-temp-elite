'use client';

import Image from 'next/image';
import {
  Menu,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Headset,
  User,
  LayoutGrid,
} from 'lucide-react';
import TypingEffect from './TypingEffect';
import { useInView } from 'react-intersection-observer'; // Import hook

const EliteLogo = () => (
  <Image src="/logotjm.webp" alt="TJM Logo" width={100} height={28} priority />
);

export default function HeroSection() {
  const wordsForTyping = ['MAKSIMAL', 'TERBAIK', 'ANDALAN'];

  // Hook untuk memantau visibilitas elemen
  const { ref: mainRef, inView: mainInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200, // Jeda untuk footer
  });

  const { ref: sidebarRef, inView: sidebarInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 400, // Jeda untuk sidebar
  });

  return (
    <div className="w-full flex flex-col bg-background text-foreground font-jakarta relative overflow-hidden">
      {/* Header */}
      <header className="w-full p-6 md:p-8 flex justify-between items-center z-10">
        <EliteLogo />
        <div className="flex items-center gap-6 text-muted">
          <Search
            className="cursor-pointer hover:text-foreground transition-colors"
            size={22}
          />
          <Menu
            className="cursor-pointer hover:text-foreground transition-colors"
            size={24}
          />
        </div>
      </header>

      {/* Konten Utama dengan animasi */}
      <main
        ref={mainRef}
        className={`flex-grow flex items-center px-6 md:px-8 transition-all duration-700 ease-out
          ${
            mainInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
      >
        <div className="max-w-[85rem] py-[8rem]">
          <h1 className="text-5xl leading-tight sm:text-7xl lg:text-[8rem] font-bold tracking-tighter lg:leading-[8rem]">
            PERAWATAN
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            PRESISI,
            <br />
            PERFORMA
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <TypingEffect
              words={wordsForTyping}
              cursorClassName="h-[3.5rem] sm:h-[5rem] lg:h-[6.5rem]"
            />
          </h1>
        </div>
      </main>

      {/* Footer dengan animasi */}
      <footer
        ref={footerRef}
        className={`w-full p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 z-10 transition-all duration-700 ease-out
          ${
            footerInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
      >
        <div className="text-center md:text-left text-xs uppercase tracking-widest text-muted">
          <p>Solusi Otomotif Terpercaya</p>
          <p>Untuk Performa Terbaik Kendaraan Anda</p>
        </div>
        <div className="flex items-center gap-5 text-muted text-sm">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Facebook size={16} /> Facebook
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Twitter size={16} /> Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            {' '}
            Dribbble
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </footer>

      {/* Sidebar Kanan dengan animasi */}
      <aside
        ref={sidebarRef}
        className={`absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-1 bg-white p-2 rounded-l-lg shadow-md z-10 transition-all duration-700 ease-out
          ${
            sidebarInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
          }
        `}
      >
        <a
          href="#"
          className="p-2 text-muted hover:text-primary hover:bg-background rounded-md transition-all"
        >
          <Headset size={20} />
        </a>
        <a
          href="#"
          className="p-2 text-muted hover:text-primary hover:bg-background rounded-md transition-all"
        >
          <User size={20} />
        </a>
        <a
          href="#"
          className="p-2 text-muted hover:text-primary hover:bg-background rounded-md transition-all"
        >
          <LayoutGrid size={20} />
        </a>
      </aside>
    </div>
  );
}
