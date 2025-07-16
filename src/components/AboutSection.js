import Image from "next/image";
import { ArrowDown } from "lucide-react";

// Data untuk counter, ditambahkan agar konten lebih panjang
const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Mekanik Profesional" },
  { value: "2000+", label: "Pelanggan Puas" },
  { value: "24/7", label: "Layanan Darurat" },
  { value: "100+", label: "Jenis Mobil Ditangani" },
  { value: "99%", label: "Garansi Kepuasan" },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-background text-foreground py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Kolom Kiri (Gambar) - Dibuat "Sticky" */}
        <div className="md:sticky top-24">
          {/* Wrapper untuk mengontrol tinggi gambar, diubah menjadi aspek rasio 3:4 (potret) */}
          {/* Menggunakan padding-bottom untuk mempertahankan rasio 3:4 (tinggi 4/3 dari lebar) */}
          <div className="relative w-full h-[50vh] rounded-lg overflow-hidden">
            <Image
              src="/galeri1.webp"
              alt="Tim Mekanik TJM sedang bekerja"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Kolom Kanan (Teks & Data) - Konten yang bisa di-scroll */}
        <div>
          <p className="text-primary uppercase tracking-widest text-sm font-semibold">
            TENTANG KAMI
          </p>
          <h2 className="text-5xl font-extrabold mt-2 leading-tight">
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

          {/* Data Counter */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-12 pt-12 border-t border-muted/20">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
