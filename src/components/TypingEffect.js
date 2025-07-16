'use client';

import { useState, useEffect } from 'react';

// THE FIX: Tambahkan prop 'cursorClassName' untuk kustomisasi
export default function TypingEffect({
  words,
  cursorClassName = '',
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

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
      {/* Menggunakan prop cursorClassName untuk mengatur style kursor */}
      <span
        className={`inline-block align-bottom animate-blink border-l-2 border-primary ml-1 ${cursorClassName}`}
        aria-hidden="true"
      ></span>
    </span>
  );
}
