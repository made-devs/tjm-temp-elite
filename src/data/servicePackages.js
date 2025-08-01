// src/data/servicePackages.js

// Menambahkan 'slug' unik untuk setiap varian paket
export const comboKakiKaki = {
  intro: {
    subTitle: "SOLUSI KAKI-KAKI LENGKAP",
    title: "Kenyamanan & Keamanan Berkendara",
    description:
      "Paket Combo Kaki-Kaki kami dirancang untuk mengatasi semua masalah suspensi secara menyeluruh. Pilih dari berbagai kombinasi paket tambahan untuk mendapatkan perawatan paling sesuai dengan kebutuhan mobil Anda.",
  },
  variants: [
    {
      slug: "kaki-kaki-ac",
      title: "Kaki-Kaki Komplit + AC",
      description:
        "Solusi lengkap mencakup 27 item pengerjaan, mulai dari tune-up 65 komponen, servis kaki-kaki 25 titik, hingga servis dan pembersihan AC. Mengembalikan kenyamanan dan keamanan berkendara Anda secara total.",
      image: "https://i.imgur.com/MDDAasV.png",
    },
    {
      slug: "kaki-kaki-rust-protection",
      title: "Kaki-Kaki Komplit + Rust Protection",
      description:
        "Perawatan kaki-kaki komplit dipadukan dengan restorasi kolong dan aplikasi lapisan anti karat berteknologi tinggi. Memberikan perlindungan ekstra terhadap korosi, panas, dan suara.",
      image: "https://i.imgur.com/JfdodPE.png",
    },
    {
      slug: "kaki-kaki-engine-tune-up",
      title: "Kaki-Kaki Komplit + Engine Pro Tune Up",
      description:
        "Kombinasi sempurna antara servis kaki-kaki 25 titik dengan tune-up mesin 65 komponen. Termasuk gurah mesin, injector cleaning, dan catalytic cleaner untuk performa mesin yang maksimal.",
      image: "https://i.imgur.com/ZHTy54C.png",
    },
    {
      slug: "kaki-kaki-auto-detailing",
      title: "Kaki-Kaki Komplit + Full Auto Detailing",
      description:
        "Paket perawatan total yang menggabungkan servis kaki-kaki komplit dengan detailing eksterior 3-langkah, pembersihan interior menyeluruh, dan perawatan kaca dari jamur.",
      image: "https://i.imgur.com/vRUBwn5.png",
    },
  ],
};

export const comboSuperKomplit = {
  intro: {
    subTitle: "PERAWATAN TOTAL KENDARAAN",
    title: "Solusi Servis Paling Komprehensif",
    description:
      "Paket Super Komplit adalah puncak dari layanan kami, menggabungkan perawatan mesin, kaki-kaki, dan servis penting lainnya untuk memastikan mobil Anda dalam kondisi terbaiknya.",
  },
  variants: [
    {
      slug: "super-komplit-1",
      // Judul diperbarui sesuai brosur
      title: "Super Komplit 1",
      // Deskripsi dirangkum dari poin-poin di brosur
      description:
        "Paket servis terlengkap yang mencakup tune-up 65 komponen, servis kaki-kaki, ganti oli Shell, rubberized undercoat, dan servis rem komplit untuk performa dan proteksi menyeluruh.",
      image: "https://i.imgur.com/cAfOdfV.png",
    },
    {
      slug: "super-komplit-2",
      // Judul diperbarui sesuai brosur
      title: "Super Komplit 2",
      // Deskripsi dirangkum dari poin-poin di brosur
      description:
        "Semua layanan dari Super Komplit 1 ditambah dengan Full Detailing interior & eksterior, glass coating, dan Nano Ceramic Coating 3 lapis untuk tampilan mobil seperti baru.",
      image: "https://i.imgur.com/QSlbk8B.png",
    },
    {
      slug: "combo-all-in-1",
      // Judul diperbarui sesuai brosur
      title: "Combo All in 1",
      // Deskripsi dirangkum dari poin-poin di brosur
      description:
        "Paket ultimate yang menggabungkan semua layanan terbaik: tune-up, servis kaki-kaki, full detailing, nano ceramic coating, dan rekondisi per/spring untuk kondisi mobil yang sempurna luar dan dalam.",
      image: "https://i.imgur.com/POXKHNM.png",
    },
  ],
};

export const customSuspension = {
  intro: {
    subTitle: "SUSPENSI SESUAI KEINGINAN ANDA",
    title: "Tingkatkan Performa & Gaya Berkendara",
    description:
      "Wujudkan setup suspensi impian Anda. Layanan custom suspension kami memberikan kontrol penuh atas tinggi, kekerasan, dan karakteristik suspensi mobil Anda, baik untuk kebutuhan harian, balap, maupun pameran.",
  },
  variants: [
    {
      slug: "custom-suspension-hemat",
      title: "Custom Suspension Hemat",
      description:
        "Paket ekonomis untuk mendapatkan tampilan ceper (lowering) melalui custom suspensi dan cutting per, sudah termasuk inspeksi kaki-kaki dan tune up 65 komponen.",
      image: "https://i.imgur.com/tzKLRrz.png",
    },
    {
      slug: "custom-suspension-spring",
      title: "Custom Suspension + Custom Spring",
      description:
        "Solusi kustomisasi tinggi/ceper mobil sesuai keinginan (harian/extreme) dengan custom spring, termasuk painting shockbreaker, tune up, dan spooring balancing.",
      image: "https://i.imgur.com/iSqXjXY.png",
    },
    {
      slug: "combo-suspension-coil-over",
      title: "Combo Suspension + Custom Coil Over",
      description:
        "Paket suspensi ultimate dengan custom coil over yang bisa diatur tinggi dan cepernya, dipadukan dengan custom spring, tune up, spooring, dan inspeksi AC.",
      image: "https://i.imgur.com/v8ezXrg.png",
    },
  ],
};

export const paketDiesel = {
  intro: {
    subTitle: "PERAWATAN KHUSUS MESIN DIESEL",
    title: "Tenaga Optimal, Emisi Minimal",
    description:
      "Mesin diesel modern membutuhkan penanganan ahli. Paket kami mencakup semua aspek penting, mulai dari sistem injeksi common rail hingga pembersihan filter partikulat, untuk menjaga performa dan efisiensi mesin diesel Anda.",
  },
  variants: [
    {
      slug: "tune-up-diesel-komplit",
      title: "Tune Up Diesel Komplit",
      description:
        "Perawatan esensial untuk mesin diesel, meliputi tune up 65 komponen, general check up kaki-kaki & AC, serta service purging untuk membersihkan sistem bahan bakar.",
      image: "https://i.imgur.com/kISTutH.png",
    },
    {
      slug: "tune-up-diesel-super-komplit",
      title: "Tune Up Diesel Super Komplit",
      description:
        "Lebih dari sekadar tune up, paket ini mencakup kalibrasi injector & common rail untuk pembakaran sempurna, irit BBM, dan tenaga yang lebih buas.",
      image: "https://i.imgur.com/Gr0QYql.png",
    },
    {
      slug: "tune-up-diesel-ultimate",
      title: "Tune Up Diesel Ultimate",
      description:
        "Paket perawatan diesel terlengkap dengan tambahan ganti oli mesin Shell HX 7, filter oli, dan transfusi darah untuk performa mesin yang paling puncak.",
      image: "https://i.imgur.com/LEaiAMp.png",
    },
    {
      slug: "pasti-puas-1-diesel",
      title: "Pasti Puas 1 Diesel",
      description:
        "Kombinasi servis kaki-kaki komplit dengan tune up diesel super komplit. Solusi total untuk performa mesin dan kenyamanan berkendara.",
      image: "https://i.imgur.com/sHZE4DP.png",
    },
    {
      slug: "pasti-puas-2-diesel",
      title: "Pasti Puas 2 Diesel",
      description:
        "Gabungan servis kaki-kaki komplit dan tune up diesel komplit, ditambah ganti oli Shell, transfusi darah, dan engine flush untuk kesehatan mesin jangka panjang.",
      image: "https://i.imgur.com/yIFOPHI.png",
    },
    {
      slug: "pasti-puas-3-diesel",
      title: "Pasti Puas 3 Diesel",
      description:
        "Perawatan premium yang menggabungkan tune up diesel super komplit dengan full detailing, glass coating, dan nano ceramic coating 3 lapis.",
      image: "https://i.imgur.com/HUn2LHq.png",
    },
    {
      slug: "pasti-puas-4-diesel",
      title: "Pasti Puas 4 Diesel",
      description:
        "Paket paling ultimate: servis kaki-kaki komplit, tune up diesel ultimate, ganti oli, full detailing, dan nano ceramic coating 3 lapis. Kondisi mobil kembali seperti baru.",
      image: "https://i.imgur.com/gBHdaci.png",
    },
  ],
};

export const paketKakiKaki = {
  intro: {
    subTitle: "FONDASI KENDARAAN ANDA",
    title: "Stabilitas dan Kontrol Penuh di Jalan",
    description:
      "Kaki-kaki mobil adalah komponen vital untuk keamanan dan kenyamanan. Paket servis kami mencakup pengecekan dan perbaikan menyeluruh pada tie rod, ball joint, dan komponen suspensi lainnya.",
  },
  variants: [
    {
      slug: "kaki-kaki-super-hemat",
      title: "Kaki-Kaki Super Hemat",
      description:
        "Paket servis kaki-kaki esensial yang mencakup 17 item pengerjaan, termasuk servis link stabilizer, ball joint, tie rod, dan general check up 25 titik.",
      image: "https://i.imgur.com/zPeuknD.png",
    },
    {
      slug: "kaki-kaki-komplit",
      title: "Kaki-Kaki Komplit",
      description:
        "Perawatan kaki-kaki menyeluruh dengan tambahan tune up 65 komponen, gurah mesin, injector cleaning, dan rubberized undercoat untuk proteksi ekstra.",
      image: "https://i.imgur.com/cuj60X2.png",
    },
    {
      slug: "kaki-kaki-super-komplit",
      title: "Kaki-Kaki Super Komplit",
      description:
        "Semua layanan dari paket Komplit ditambah dengan rekondisi CV joint, inspeksi AC, dan rekondisi per/spring untuk kenyamanan suspensi yang maksimal.",
      image: "https://i.imgur.com/F0savm6.png",
    },
    {
      slug: "kaki-kaki-ultimate",
      title: "Kaki-Kaki Ultimate",
      description:
        "Paket paling lengkap yang mencakup semua layanan dari Super Komplit ditambah dengan service + ganti oli shock breaker dan rekondisi idle arm.",
      image: "https://i.imgur.com/8zMxP1e.png",
    },
  ],
};

export const paketOverhaulEngine = {
  intro: {
    subTitle: "MENGEMBALIKAN PERFORMA PRIMA",
    title: "Servis Total Untuk Jantung Pacu Kendaraan",
    description:
      "Overhaul engine adalah proses restorasi total untuk mengembalikan performa mesin seperti baru. Layanan kami mencakup pembongkaran, pembersihan, penggantian komponen vital, dan perakitan ulang dengan presisi tinggi.",
  },
  variants: [
    {
      slug: "overhaul-engine",
      title: "Overhaul Engine",
      description:
        "Paket esensial untuk restorasi mesin, mencakup turun 1/2 mesin, sandblasting karat, pembersihan oil sludge, dan servis komponen internal seperti crankshaft dan silinder head.",
      image: "https://i.imgur.com/1JQxDIu.png",
    },
    {
      slug: "overhaul-engine-komplit",
      title: "Overhaul Engine Komplit",
      description:
        "Semua layanan dari paket Overhaul Engine, ditambah dengan ganti oli Shell HX 7, oil treatment, engine flush, dan catalytic cleaner untuk pembersihan dan proteksi menyeluruh.",
      image: "https://i.imgur.com/ew2IeON.png",
    },
    {
      slug: "super-overhaul-engine",
      title: "Super Overhaul Engine",
      description:
        "Paket paling premium yang mencakup semua layanan dari paket Komplit, ditambah servis bearing crankshaft, connecting rod, washer crankshaft, dan rust remover area kaki-kaki.",
      image: "https://i.imgur.com/DG9z1TR.png",
    },
  ],
};

export const paketRacksteerHemat = {
  intro: {
    subTitle: "SOLUSI KEMUDI PRESISI",
    title: "Paket Servis Rack Steer Hemat",
    description:
      "Mengatasi masalah pada sistem kemudi seperti setir berat, bunyi, atau oblak dengan solusi yang efektif dan terjangkau. Kami melakukan perbaikan dan restorasi pada komponen rack steer untuk mengembalikan kenyamanan dan keamanan kemudi Anda.",
  },
  variants: [
    {
      slug: "kaki-kaki-racksteer-hemat",
      title: "Kaki-Kaki Racksteer Hemat",
      description:
        "Perawatan terlengkap dan bergaransi, mencakup 21 item pengerjaan termasuk service rekondisi & setel ulang racksteer (EPS), tune up, gurah mesin, dan inspeksi kaki-kaki 25 titik.",
      image: "https://i.imgur.com/i2D6YLu.png",
    },
  ],
};

export const paketSpecial = {
  intro: {
    subTitle: "LAYANAN EKSKLUSIF & PAKET HEMAT",
    title: "Penanganan Khusus & Perawatan Terjangkau",
    description:
      "Kami menyediakan berbagai paket spesial yang dirancang untuk kebutuhan spesifik, mulai dari perawatan mobil CBU hingga paket servis hemat untuk menjaga performa kendaraan Anda sehari-hari.",
  },
  variants: [
    {
      slug: "paket-special1",
      title: "Paket Special 1",
      description:
        "Perawatan premium yang mencakup tune up 65 komponen, gurah mesin, injector cleaning, catalytic cleaner, dan servis fuel system lengkap dengan penggantian oli Shell HX 8.",
      image: "https://i.imgur.com/Q4G7rpP.png",
    },
    {
      slug: "paket-special2",
      title: "Paket Special 2",
      description:
        "Paket yang berfokus pada keamanan, meliputi tune up 65 komponen, gurah mesin/injector cleaning, servis purging diesel, dan pengecekan serta servis sistem pengereman.",
      image: "https://i.imgur.com/TRax4CT.png",
    },
  ],
};

export const paketSteering = {
  intro: {
    subTitle: "KONTROL DAN RESPON KEMUDI",
    title: "Servis Sistem Kemudi Presisi",
    description:
      "Dari power steering hidrolik hingga EPS modern, kami menangani semua jenis masalah sistem kemudi untuk memastikan Anda memiliki kontrol penuh dan respons yang akurat di setiap tikungan.",
  },
  variants: [
    {
      slug: "steering-komplit",
      title: "Steering Komplit",
      description:
        "Servis kaki-kaki dan rekondisi steering terlengkap, mencakup 20 item pengerjaan termasuk tune up, gurah mesin, dan pengecekan sensor-sensor kelistrikan.",
      image: "https://i.imgur.com/GpBwT2l.png",
    },
    {
      slug: "combo-kaki-kaki-steering-super-komplit",
      title: "Combo Kaki-Kaki + Steering Super Komplit",
      description:
        "Kombinasi servis kaki-kaki dan steering dengan tambahan service racksteer, rekondisi cross joint, dan rubberized undercoat untuk perlindungan maksimal.",
      image: "https://i.imgur.com/DOQuJAT.png",
    },
    {
      slug: "combo-kaki-kaki-steering-ultimate",
      title: "Combo Kaki-Kaki + Steering Ultimate",
      description:
        "Paket terlengkap yang menggabungkan semua layanan dari paket Super Komplit ditambah dengan service shockbreaker, rekondisi CV joint, dan rekondisi per/spring.",
      image: "https://i.imgur.com/FG9gxVB.png",
    },
  ],
};

export const paketSuperHemat = {
  intro: {
    subTitle: "PERAWATAN EFISIEN & TERJANGKAU",
    title: "Paket Servis Super Hemat",
    description:
      "Solusi perawatan berkala yang dirancang untuk menjaga kondisi mobil Anda tetap prima tanpa menguras kantong. Paket ini mencakup pengecekan dan servis esensial yang dibutuhkan mobil Anda.",
  },
  variants: [
    {
      slug: "super-hemat-1",
      title: "Super Hemat 1",
      description:
        "Paket terlengkap & terhemat, mencakup 15 item pengerjaan termasuk tune up, gurah mesin, ganti oli Shell HX 7, dan general check up kaki-kaki 25 titik.",
      image: "https://i.imgur.com/n18zKaQ.png",
    },
    {
      slug: "super-hemat-2",
      title: "Super Hemat 2",
      description:
        "Semua layanan dari Super Hemat 1 dengan tambahan service AC All In + AC Cleaner untuk memastikan kesejukan kabin yang maksimal.",
      image: "https://i.imgur.com/HU3tYJz.png",
    },
    {
      slug: "super-hemat-3",
      title: "Super Hemat 3",
      description:
        "Paket Super Hemat dengan fokus pada sistem bahan bakar, mencakup kuras tangki dan service fuel pump untuk efisiensi pembakaran yang lebih baik.",
      image: "https://i.imgur.com/fDdpDEU.png",
    },
    {
      slug: "combo-super-hemat-auto-detailing",
      title: "Combo Super Hemat + Auto Detailing",
      description:
        "Kombinasi perawatan mesin dan kaki-kaki dari paket Super Hemat dengan tambahan auto detailing seperti glass treatment, waxing, dan nano burn coating headlamp.",
      image: "https://i.imgur.com/NzJZZvN.png",
    },
  ],
};

// Daftar link untuk menu dan form kontak
export const serviceLinks = [
  { title: "Paket Combo Kaki-Kaki", href: "/layanan/paket-combo-kaki-kaki" },
  {
    title: "Paket Combo Super Komplit",
    href: "/layanan/paket-combo-super-komplit",
  },
  {
    title: "Paket Custom Suspension",
    href: "/layanan/paket-custom-suspension",
  },
  { title: "Paket Diesel", href: "/layanan/paket-diesel" },
  { title: "Paket Kaki Kaki", href: "/layanan/paket-kaki-kaki" },
  { title: "Paket Overhaul Engine", href: "/layanan/paket-overhaul-engine" },
  { title: "Paket Racksteer Hemat", href: "/layanan/paket-racksteer-hemat" },
  { title: "Paket Special", href: "/layanan/paket-special" },
  { title: "Paket Steering", href: "/layanan/paket-steering" },
  { title: "Paket Super Hemat", href: "/layanan/paket-super-hemat" },
];

export const allServiceVariants = [
  ...comboKakiKaki.variants,
  ...comboSuperKomplit.variants,
  ...customSuspension.variants,
  ...paketDiesel.variants,
  ...paketKakiKaki.variants,
  ...paketOverhaulEngine.variants,
  ...paketRacksteerHemat.variants,
  ...paketSpecial.variants,
  ...paketSteering.variants,
  ...paketSuperHemat.variants,
];

export const groupedServiceVariants = [
  { name: "Paket Combo Kaki-Kaki", variants: comboKakiKaki.variants },
  { name: "Paket Combo Super Komplit", variants: comboSuperKomplit.variants },
  { name: "Paket Custom Suspension", variants: customSuspension.variants },
  { name: "Paket Diesel", variants: paketDiesel.variants },
  { name: "Paket Kaki Kaki", variants: paketKakiKaki.variants },
  { name: "Paket Overhaul Engine", variants: paketOverhaulEngine.variants },
  { name: "Paket Racksteer Hemat", variants: paketRacksteerHemat.variants },
  { name: "Paket Special", variants: paketSpecial.variants },
  { name: "Paket Steering", variants: paketSteering.variants },
  { name: "Paket Super Hemat", variants: paketSuperHemat.variants },
];
