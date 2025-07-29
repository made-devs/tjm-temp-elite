"use client";

import { X, ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";

const EliteLogo = () => (
  <Image src="/logotjm.webp" alt="TJM Logo" width={100} height={28} priority />
);

export default function PopOutMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    // Animasi menu menggunakan GSAP
    if (isOpen && menuRef.current) {
      menuRef.current.style.display = "block";
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      document.body.style.overflow = "hidden";
    } else if (!isOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none";
          }
        },
      });
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-[#2c2c2c] font-jakarta text-white z-50 transform translate-x-full opacity-0"
      style={{ willChange: "transform, opacity", display: "none" }}
    >
      {/* Header di dalam menu, diposisikan absolut agar full-width */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 z-10">
        <div className="flex justify-between items-center">
          <EliteLogo />
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            Close <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex h-full">
        {/* Kolom Kiri - Menu Utama */}
        <div className="w-full lg:w-3/5 flex flex-col pt-32 p-6 md:p-8">
          <nav className="flex-grow flex flex-col justify-center">
            <ul className="space-y-4">
              {["Home", "Layanan", "Tentang Kami", "Blog", "Kontak"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-5xl lg:text-7xl font-bold text-white hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-6 text-muted border-t border-muted/20 mt-auto pt-8">
            <a href="#" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Kolom Kanan - Info Kontak */}
        <div className="hidden lg:block w-2/5 bg-[#222222] pt-32 p-16">
          <div className="space-y-12">
            <div>
              <p className="text-sm uppercase text-muted tracking-widest mb-2">
                Contact Us
              </p>
              <a
                href="mailto:info@tjm.co.id"
                className="text-lg text-white border-b border-muted/50 hover:border-white transition-colors"
              >
                info@tjm.co.id
              </a>
            </div>
            <div>
              <p className="text-sm uppercase text-muted tracking-widest mb-2">
                Want to Work with Us?
              </p>
              <a
                href="#"
                className="text-lg text-white flex items-center gap-2 group"
              >
                Send Brief
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
            <div>
              <p className="text-sm uppercase text-muted tracking-widest mb-2">
                What We Offer
              </p>
              <a
                href="#"
                className="text-lg text-white flex items-center gap-2 group"
              >
                Go to Services
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
