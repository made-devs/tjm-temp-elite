"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function FeaturedPost({ post }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="bg-background text-foreground py-24">
      <div className="container mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block text-sm font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full">
              {post.category}
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
              {post.title}
            </h2>
            <p className="text-muted mt-4 text-lg">{post.excerpt}</p>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-muted/20">
              <Image
                src={post.authorAvatar}
                alt={post.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{post.author}</p>
                <p className="text-sm text-muted">{post.date}</p>
              </div>
            </div>
            <a
              href={`/blog/${post.slug}`}
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
