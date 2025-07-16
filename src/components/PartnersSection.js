import Image from "next/image";

// Daftar logo partner diperbarui ke format .webp
const partnerLogos = [
  { name: "Blissful", src: "/logo-blissful.webp" },
  { name: "Express", src: "/logo-express.webp" },
  { name: "Lawfirm", src: "/logo-lawfirm.webp" },
  { name: "Pasticuan", src: "/logo-pasticuan.webp" },
  { name: "VIP", src: "/logo-vip.webp" },
];

export default function PartnersSection() {
  return (
    // Section utama setinggi layar dengan background dari file galeri1.jpg
    <section
      className="h-screen w-full relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/galeri5.webp')" }}
    >
      {/* Overlay gelap untuk kontras */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Barisan Logo di bagian bawah */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-muted/20">
        <div className="container mx-auto px-6 py-12">
          {/* Garis pemisah (divide-x) dihapus */}
          <div className="flex justify-around items-center flex-wrap gap-x-8 gap-y-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-12 w-40 px-4 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  layout="fill"
                  objectFit="contain"
                  className="grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
