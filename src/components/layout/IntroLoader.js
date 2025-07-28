'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function IntroLoader({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const progressState = useRef({ value: 0 }).current;

  useEffect(() => {
    // Animasi simulasi loading
    const fakeLoadingAnim = gsap.to(progressState, {
      value: 99,
      duration: 3,
      ease: 'power1.inOut',
      onUpdate: () => {
        setProgress(Math.floor(progressState.value));
      },
    });

    const finishLoading = () => {
      fakeLoadingAnim.kill();

      // Timeline animasi saat loading selesai
      gsap
        .timeline()
        .to(progressState, {
          value: 100,
          duration: 0.5,
          ease: 'power1.inOut',
          onUpdate: () => {
            setProgress(Math.floor(progressState.value));
          },
        })
        .to(
          [logoRef.current, progressRef.current],
          {
            scale: 1.2,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.inOut',
          },
          '>-0.2'
        )
        .to(
          loaderRef.current,
          {
            autoAlpha: 0,
            duration: 1,
            ease: 'power3.inOut',
            onComplete: onLoaded,
          },
          '<'
        );
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
    }

    return () => {
      window.removeEventListener('load', finishLoading);
    };
  }, [onLoaded, progressState]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <div ref={logoRef}>
        {/* Logo diperbesar */}
        <Image src="/logotjm.webp" alt="TJM Logo" width={250} height={70} />
      </div>
      {/* Teks persentase di-styling ulang */}
      <p
        ref={progressRef}
        className="font-jakarta text-8xl font-extrabold mt-8 text-transparent [-webkit-text-stroke:2px_var(--color-primary)]"
      >
        {progress}%
      </p>
    </div>
  );
}
