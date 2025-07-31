"use client";

import { X, ArrowRight, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceLinks } from "@/data/servicePackages";

const EliteLogo = () => (
  <Image src="/logotjm.webp" alt="TJM Logo" width={100} height={28} priority />
);

const mainMenuItems = [
  { title: "Home", href: "/" },
  { title: "Layanan", href: "#" },
  { title: "Tentang Kami", href: "/tentang-kami" },
  { title: "Blog", href: "/blog" },
  { title: "Kontak", href: "/kontak" },
];

export default function PopOutMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.display = "block";
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => setAnimateItems(true),
      });
      document.body.style.overflow = "hidden";
    } else {
      setAnimateItems(false);
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
      className="fixed inset-0 bg-[#2c2c2c] text-white z-50 transform translate-x-full opacity-0"
      style={{ willChange: "transform, opacity", display: "none" }}
    >
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 z-10 bg-[#2c2c2c]/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Kembali ke Beranda">
            <EliteLogo />
          </Link>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            Close <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex h-full">
        <div className="w-full lg:w-3/5 flex flex-col pt-32 p-6 md:p-8 overflow-y-auto">
          <nav className="flex-grow flex flex-col justify-center">
            <ul>
              {mainMenuItems.map((item, index) => (
                <li
                  key={item.title}
                  className={`transition-all duration-500 ease-out ${
                    animateItems
                      ? "opacity-100 blur-0 translate-y-0"
                      : "opacity-0 blur-sm translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() =>
                    item.title === "Layanan" && setHoveredMenu("Layanan")
                  }
                  onMouseLeave={() =>
                    item.title === "Layanan" && setHoveredMenu(null)
                  }
                >
                  <a
                    href={item.href}
                    className="text-5xl lg:text-7xl font-bold text-white hover:text-primary transition-colors duration-300 inline-block py-2"
                  >
                    {item.title}
                  </a>
                  {item.title === "Layanan" && (
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        hoveredMenu === "Layanan"
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="py-6 border-b border-muted/20">
                          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                            {serviceLinks.map((link, subIndex) => (
                              <li
                                key={link.href}
                                className={`transition-all duration-300 ease-out ${
                                  hoveredMenu === "Layanan"
                                    ? "opacity-100 blur-0 translate-y-0"
                                    : "opacity-0 blur-sm translate-y-4"
                                }`}
                                style={{
                                  transitionDelay: `${subIndex * 50}ms`,
                                }}
                              >
                                <a
                                  href={link.href}
                                  className="text-xl font-bold text-muted hover:text-primary transition-colors duration-300"
                                >
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 text-muted border-t border-muted/20 mt-auto pt-8">
            <a
              href="https://www.facebook.com/profile.php?id=100069959570435"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/tjmautocare/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@tjmautocare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block w-2/5 bg-[#222222] pt-32 p-16">
          <div className="space-y-12">
            <div>
              <p className="text-sm uppercase text-muted tracking-widest mb-2">
                Email
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
                Telepon & WhatsApp
              </p>
              <a
                href="tel:+6285169576890"
                className="text-lg text-white border-b border-muted/50 hover:border-white transition-colors"
              >
                +62 851-6957-6890
              </a>
            </div>
            {/* Memperbarui Jam Buka */}
            <div>
              <p className="text-sm uppercase text-muted tracking-widest mb-2">
                Jam Operasional
              </p>
              <p className="text-lg text-white">
                Setiap Hari: 08:30 - 18:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
