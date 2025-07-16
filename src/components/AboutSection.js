'use client'; // Diperlukan karena kita menggunakan hook

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter'; // Import komponen baru

// Data untuk counter, diubah untuk memisahkan angka dan sufiks
const stats = [
  { number: 10, suffix: '+', label: 'Tahun Pengalaman' },
  { number: 50, suffix: '+', label: 'Mekanik Profesional' },
  { number: 2000, suffix: '+', label: 'Pelanggan Puas' },
  { value: '24/7', label: 'Layanan Darurat' }, // Kasus khusus tanpa angka
  { number: 100, suffix: '+', label: 'Jenis Mobil Ditangani' },
  { number: 99, suffix: '%', label: 'Garansi Kepuasan' },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-background text-foreground font-jakarta py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="md:sticky top-24">
          <div className="relative w-full h-[50vh] rounded-lg overflow-hidden">
            <Image
              src="/galeri1.webp"
              alt="Tim Mekanik TJM sedang bekerja"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div>
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            TENTANG KAMI
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
            Dedikasi Penuh untuk Kendaraan Anda
          </h2>
          <p className="text-muted mt-6">
            Sejak berdiri lebih dari satu dekade lalu, TJM telah menjadi mitra
            terpercaya bagi para pemilik kendaraan. Kami tidak hanya memperbaiki
            masalah, tapi juga memberikan perawatan presisi untuk memastikan
            performa maksimal dan ketenangan di setiap perjalanan Anda.
          </p>
          <p className="text-muted mt-4">
            Tim kami terdiri dari mekanik bersertifikat dengan keahlian mendalam
            di berbagai jenis kendaraan. Dengan peralatan modern dan komitmen
            pada kualitas, kami siap memberikan solusi terbaik untuk semua
            kebutuhan otomotif Anda.
          </p>
          <p className="text-muted mt-4">
            Komitmen kami adalah transparansi. Anda akan selalu mendapatkan
            penjelasan detail mengenai setiap pekerjaan yang kami lakukan,
            lengkap dengan estimasi biaya yang jelas sebelum pengerjaan dimulai.
          </p>

          <div className="mt-8">
            <ArrowDown className="text-primary" size={28} />
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-12 pt-12 border-t border-muted/20">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl md:text-[4rem] font-bold text-foreground">
                  {/* Menggunakan AnimatedCounter atau teks statis */}
                  {stat.number ? (
                    <>
                      <AnimatedCounter targetValue={stat.number} />
                      {stat.suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-muted text-sm font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
