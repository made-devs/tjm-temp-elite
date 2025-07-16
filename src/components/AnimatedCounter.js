'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ targetValue }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.5, // Memicu saat 50% elemen terlihat
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = targetValue;
      if (start === end) return;

      // Durasi animasi dalam milidetik
      const duration = 1500;
      const startTime = Date.now();

      const step = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end); // Memastikan nilai akhir tepat
        }
      };

      requestAnimationFrame(step);
    }
  }, [inView, targetValue]);

  return <span ref={ref}>{count}</span>;
}
