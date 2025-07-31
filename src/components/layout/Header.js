"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Impor komponen Link
import { Menu, Search } from "lucide-react";
import PopOutMenu from "../ui/PopOutMenu";

const EliteLogo = () => (
  <Image src="/logotjm.webp" alt="TJM Logo" width={100} height={28} priority />
);

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-40">
        <div className="flex justify-between items-center">
          {/* SOLUSI: Bungkus logo dengan Link */}
          <Link href="/" aria-label="Kembali ke Beranda">
            <EliteLogo />
          </Link>
          <div className="flex items-center gap-6 text-muted">
            <Search
              className="cursor-pointer hover:text-foreground transition-colors"
              size={22}
            />
            <Menu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer hover:text-foreground transition-colors"
              size={24}
            />
          </div>
        </div>
      </header>
      <PopOutMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
