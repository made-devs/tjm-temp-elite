"use client";

import { useInView } from "react-intersection-observer";

/**
 * Komponen untuk menampilkan teks dengan efek blur-in per kata.
 * @param {string} text - Teks yang akan dianimasikan.
 * @param {React.ElementType} as - Elemen HTML yang akan digunakan.
 * @param {string} className - Class CSS tambahan.
 * @param {number} startDelay - Waktu tunda sebelum animasi seluruh blok dimulai (ms).
 * @param {number} wordDelay - Waktu tunda antar kata (ms).
 */
export default function TextBlurReveal({
  text,
  as: Component = "p",
  className = "",
  startDelay = 0,
  wordDelay = 30,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: startDelay,
  });

  // Memecah teks menjadi kata-kata
  const words = text.split(" ");

  return (
    <Component ref={ref} className={className} aria-label={text}>
      {/* Wrapper untuk mencegah flash of content saat server-side rendering */}
      <span className={inView ? "opacity-100" : "opacity-0"}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-300 ease-out"
            // Stagger delay untuk setiap kata
            style={{ transitionDelay: `${index * wordDelay}ms` }}
          >
            {/* Span ini yang melakukan animasi blur dan translate */}
            <span
              className={`inline-block ${
                inView
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
            >
              {/* Tambahkan spasi setelah setiap kata */}
              {word}&nbsp;
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}
