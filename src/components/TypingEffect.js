"use client"; // Komponen ini interaktif, jadi butuh 'use client'

import { useState, useEffect } from "react";

const TypingEffect = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      // Logika untuk mengetik atau menghapus
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      // Ganti mode jika kata selesai diketik atau dihapus
      if (!isDeleting && text === currentWord) {
        // Jeda setelah selesai mengetik
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Cleanup function untuk membersihkan timer
    return () => clearTimeout(timer);
  }, [
    wordIndex,
    text,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="text-primary">
      {text}
      <span
        className="inline-block h-[6.5rem] animate-blink border-l-2 border-primary ml-1"
        aria-hidden="true"
      ></span>
    </span>
  );
};

export default TypingEffect;
