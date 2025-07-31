"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const PostCard = ({ post, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <a
      ref={ref}
      href={`/blog/${post.slug}`}
      className={`block group transition-all duration-500 ease-out ${
        inView
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-10 blur-sm"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="text-sm font-semibold text-primary">
        {post.category}
      </span>
      <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted mt-2">{post.date}</p>
    </a>
  );
};

export default function PostGrid({ posts }) {
  return (
    <section className="bg-foreground text-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12">Artikel Lainnya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
