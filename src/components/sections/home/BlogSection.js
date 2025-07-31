"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
// Impor data blog dari sumber terpusat
import { allPosts } from "@/data/blog/posts";

// Mengambil artikel pertama sebagai unggulan
const featuredPost = allPosts[0];
// Mengambil 3 artikel berikutnya sebagai artikel terbaru
const recentPosts = allPosts.slice(1, 4);

export default function BlogSection() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: listRef, inView: listInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 400,
  });

  return (
    <section className="w-full bg-background font-jakarta py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            Tips & Artikel
          </p>
          <h2 className="text-5xl font-extrabold text-foreground mt-2">
            Wawasan Terbaru dari Garasi Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          {/* Kolom Kiri: Daftar Artikel Terbaru */}
          <div
            ref={listRef}
            className={`lg:col-span-1 space-y-8 transition-all duration-700 ease-out ${
              listInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {recentPosts.map((post) => (
              <a
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="flex items-center gap-4 group"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  {/* SOLUSI: Mengganti authorAvatar dengan featuredImage */}
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted">
                    {post.category} • {post.date}
                  </p>
                  <h4 className="font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          {/* Kolom Tengah: Gambar Unggulan */}
          <a
            ref={imageRef}
            href={`/blog/${featuredPost.slug}`}
            className={`lg:col-span-2 relative block aspect-[4/3] rounded-lg overflow-hidden transition-all duration-700 ease-out group ${
              imageInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={featuredPost.featuredImage}
              alt={featuredPost.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Kolom Kanan: Konten Artikel Unggulan */}
          <div
            ref={contentRef}
            className={`lg:col-span-1 transition-all duration-700 ease-out ${
              contentInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block text-sm font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full">
              {featuredPost.category}
            </span>
            <h2 className="text-4xl font-extrabold text-foreground mt-4 leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-muted mt-4">{featuredPost.excerpt}</p>
            <a
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex items-center gap-2 text-primary font-bold mt-6 group"
            >
              Baca Selengkapnya
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
