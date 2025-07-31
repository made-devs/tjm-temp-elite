"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function PostHeader({ post }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`bg-background text-foreground py-24 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <span className="inline-block text-sm font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-8">
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
      </div>
    </section>
  );
}
