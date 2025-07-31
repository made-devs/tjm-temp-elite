import { Fragment } from "react";
import { allPosts } from "@/data/blog/posts";
import PageHeader from "@/components/sections/layanan/PageHeader"; // Menggunakan PageHeader standar
import PostBody from "@/components/sections/blog/PostBody";
import CtaSection from "@/components/sections/shared/CtaSection";

// Fungsi untuk memberitahu Next.js halaman apa saja yang harus dibuat
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Fungsi untuk mencari data post berdasarkan slug dari URL
function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug);
}

export default function SinglePostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  // Jika post tidak ditemukan, tampilkan pesan
  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center">
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <Fragment>
      {/* SOLUSI: Menggunakan PageHeader sebagai hero section */}
      <PageHeader
        title={post.title}
        breadcrumb={`Blog / ${post.category}`}
        backgroundImage={post.featuredImage}
      />
      {/* PostBody sekarang akan berisi info penulis dan konten */}
      <PostBody post={post} />
      <CtaSection />
    </Fragment>
  );
}
