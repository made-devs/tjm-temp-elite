import Image from "next/image";
import {
  Menu,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Headset,
  User,
  LayoutGrid,
} from "lucide-react";
import TypingEffect from "./TypingEffect"; // Pastikan komponen ini ada

// Logo menggunakan Next/Image
const EliteLogo = () => (
  <Image src="/logotjm.webp" alt="TJM Logo" width={100} height={28} priority />
);

export default function HeroSection() {
  // Mengganti "PRESISI" dengan "MAKSIMAL" untuk menghindari pengulangan
  const wordsForTyping = ["MAKSIMAL", "TERBAIK", "ANDALAN"];

  return (
    <div className="w-full flex flex-col bg-background text-foreground font-jakarta relative">
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

      {/* Konten Utama */}
      <main className="flex-grow flex items-center px-6 md:px-8">
        <div className="max-w-[85rem] py-[8rem]">
          <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[8rem] ">
            PERAWATAN PRESISI,
            <br />
            PERFORMA <TypingEffect words={wordsForTyping} />
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <div className="text-left text-xs uppercase tracking-widest text-muted">
          <p>Right Social Networking</p>
          <p>For Transportations</p>
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
            {" "}
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

      {/* Sidebar Kanan */}
      <aside className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-1 bg-white p-2 rounded-l-lg shadow-md z-10">
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
