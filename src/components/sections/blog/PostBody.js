"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function PostBody({ post }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-background text-foreground py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* SOLUSI: Info penulis dan tanggal dipindahkan ke sini */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-1000 ease-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={post.authorAvatar}
            alt={post.author}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">{post.author}</p>
            <p className="text-sm text-muted">{post.date}</p>
          </div>
        </div>

        {/* Gambar utama dihapus dari sini */}

        <div
          className={`prose prose-xl mx-auto prose-headings:text-foreground prose-strong:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 transition-all duration-1000 ease-out delay-200 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
}
