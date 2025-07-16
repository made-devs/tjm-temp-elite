'use client'; // Diperlukan untuk menggunakan hook

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer'; // Import hook

// Data untuk artikel unggulan
const featuredPost = {
  category: 'Tips & Trik',
  title: 'Kapan Waktu yang Tepat untuk Mengganti Oli Mesin?',
  excerpt:
    'Mengganti oli secara rutin adalah kunci utama menjaga kesehatan mesin. Namun, banyak faktor yang mempengaruhi interval penggantian, mulai dari jenis mobil hingga kondisi jalan...',
  date: '15 Juli 2025',
  comments: 5,
  featuredImage: '/galeri4.webp',
};

// Data untuk daftar artikel terbaru
const recentPosts = [
  {
    id: 1,
    category: 'Perawatan',
    date: '14 Juli 2025',
    title: '5 Tanda Kampas Rem Mobil Anda Harus Segera Diganti',
    authorImage: '/galeri1.webp',
  },
  {
    id: 2,
    category: 'Modifikasi',
    date: '12 Juli 2025',
    title: 'Tips Memilih Velg yang Tepat untuk Mobil Anda',
    authorImage: '/galeri2.webp',
  },
  {
    id: 3,
    category: 'Keamanan',
    date: '10 Juli 2025',
    title: 'Pentingnya Pengecekan Sistem Suspensi Secara Berkala',
    authorImage: '/galeri3.webp',
  },
];

export default function BlogSection() {
  // Hook untuk memantau visibilitas elemen secara terpisah
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
        {/* Judul Section dengan animasi */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            titleInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
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
          {/* Kolom Kiri: Daftar Artikel Terbaru dengan animasi */}
          <div
            ref={listRef}
            className={`lg:col-span-1 space-y-8 transition-all duration-700 ease-out ${
              listInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {recentPosts.map((post) => (
              <a
                href="#"
                key={post.id}
                className="flex items-center gap-4 group"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={post.authorImage}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
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

          {/* Kolom Tengah: Gambar Unggulan dengan animasi */}
          <div
            ref={imageRef}
            className={`lg:col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-700 ease-out ${
              imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Image
              src={featuredPost.featuredImage}
              alt={featuredPost.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Kolom Kanan: Konten Artikel Unggulan dengan animasi */}
          <div
            ref={contentRef}
            className={`lg:col-span-1 transition-all duration-700 ease-out ${
              contentInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block text-sm font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full">
              {featuredPost.category}
            </span>
            <h2 className="text-4xl font-extrabold text-foreground mt-4 leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-muted mt-4">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted mt-6 pt-6 border-t border-muted/20">
              <span>{featuredPost.date}</span>
              <span className="flex items-center gap-1.5">
                <MessageCircle size={14} />
                {featuredPost.comments} Komentar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
