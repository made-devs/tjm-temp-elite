"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function PostBody({ post }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-background text-foreground pb-24">
      <div className="container mx-auto px-6">
        <div
          className={`relative w-full h-[50vh] rounded-2xl overflow-hidden mb-12 transition-all duration-1000 ease-out delay-200 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        {/*
          SOLUSI:
          - Ukuran font diperbesar ke 'prose-xl'.
          - Warna teks paragraf ('prose-p') dan list ('prose-li') diubah agar lebih gelap dan mudah dibaca.
          - Menghapus 'text-muted' agar tidak menimpa semua style.
        */}
        <div
          className={`prose prose-xl max-w-3xl mx-auto prose-headings:text-foreground prose-strong:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 transition-all duration-1000 ease-out delay-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          // Render HTML dari file data
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
}
