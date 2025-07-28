'use client';

import { ArrowRight } from 'lucide-react';
import TypingEffect from '../../ui/TypingEffect';

const dynamicWords = ['dirawat', 'disempurnakan', 'diandalkan'];

export default function CtaSection() {
  return (
    <section className="w-full font-jakarta bg-background py-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary uppercase tracking-widest text-sm font-semibold">
          JANGAN TUNDA LAGI
        </p>
        <h2 className="text-3xl md:text-6xl font-extrabold text-foreground mt-4 max-w-4xl mx-auto leading-tight">
          Siap merasakan performa terbaik? Mobil Anda layak untuk{' '}
          <br className="md:hidden" />
          <span className="text-primary underline underline-offset-8 decoration-4">
            <TypingEffect
              words={dynamicWords}
              cursorClassName="h-[2.25rem] md:h-[3.5rem]"
            />
          </span>
        </h2>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Hubungi Kami Sekarang
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
