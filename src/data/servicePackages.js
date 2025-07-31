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
      slug: "super-komplit-nano-coating",
      title: "Super Komplit + Nano Coating",
      description:
        "Perawatan total dari mesin hingga kaki-kaki, diakhiri dengan lapisan nano ceramic coating untuk proteksi dan kilap cat yang tahan lama.",
      image: "https://i.imgur.com/cAfOdfV.png",
    },
    {
      slug: "super-komplit-kaca-film",
      title: "Super Komplit + Kaca Film",
      description:
        "Selain servis menyeluruh, dapatkan juga pemasangan kaca film premium untuk meningkatkan privasi, keamanan, dan kenyamanan dari panas matahari.",
      image: "https://i.imgur.com/QSlbk8B.png",
    },
    {
      slug: "super-komplit-audio-upgrade",
      title: "Super Komplit + Audio Upgrade",
      description:
        "Untuk Anda yang menginginkan performa maksimal luar dan dalam. Paket ini mencakup servis total dan upgrade sistem audio untuk pengalaman berkendara terbaik.",
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
      slug: "air-suspension",
      title: "Air Suspension",
      description:
        "Kustomisasi tinggi kendaraan secara instan dengan sistem suspensi udara (air-sus). Sempurna untuk gaya dan fungsionalitas, dikendalikan dengan mudah dari dashboard atau smartphone Anda.",
      image: "https://i.imgur.com/tzKLRrz.png",
    },
    {
      slug: "coilover-shock-absorber",
      title: "Coilover & Shock Absorber",
      description:
        "Dapatkan handling dan stabilitas superior dengan pemasangan coilover atau shock absorber kustom. Kami menyediakan pilihan dari berbagai merek terkemuka yang bisa disesuaikan dengan kebutuhan Anda.",
      image: "https://i.imgur.com/iSqXjXY.png",
    },
    {
      slug: "custom-static-fitment",
      title: "Custom Static / Fitment",
      description:
        "Untuk para pecinta fitment, kami menawarkan layanan setup suspensi statis yang presisi. Dapatkan tampilan ceper yang sempurna tanpa mengorbankan kenyamanan secara berlebihan.",
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
      slug: "servis-common-rail",
      title: "Servis Common Rail",
      description:
        "Pembersihan dan kalibrasi sistem common rail untuk memastikan tekanan bahan bakar yang stabil dan pembakaran yang efisien.",
      image: "https://i.imgur.com/kISTutH.png",
    },
    {
      slug: "kalibrasi-injektor",
      title: "Kalibrasi Injektor",
      description:
        "Mengembalikan presisi semprotan injektor ke standar pabrikan untuk performa maksimal dan konsumsi bahan bakar yang lebih irit.",
      image: "https://i.imgur.com/Gr0QYql.png",
    },
    {
      slug: "servis-turbocharger",
      title: "Servis Turbocharger",
      description:
        "Inspeksi dan pembersihan komponen turbo untuk mencegah kebocoran dan memastikan boost yang responsif.",
      image: "https://i.imgur.com/LEaiAMp.png",
    },
    {
      slug: "pembersihan-egr-valve",
      title: "Pembersihan EGR Valve",
      description:
        "Membersihkan katup EGR dari kerak karbon untuk mengoptimalkan sirkulasi gas buang dan mengurangi emisi.",
      image: "https://i.imgur.com/sHZE4DP.png",
    },
    {
      slug: "pembersihan-dpf",
      title: "Pembersihan DPF",
      description:
        "Layanan pembersihan Diesel Particulate Filter (DPF) untuk mengatasi penyumbatan dan menjaga performa mesin.",
      image: "https://i.imgur.com/yIFOPHI.png",
    },
    {
      slug: "purging-sistem-bahan-bakar",
      title: "Purging Sistem Bahan Bakar",
      description:
        "Menguras dan membersihkan seluruh jalur bahan bakar dari tangki hingga injektor untuk menghilangkan endapan dan kontaminan.",
      image: "https://i.imgur.com/HUn2LHq.png",
    },
    {
      slug: "scan-mesin-diesel",
      title: "Scan Mesin Diesel Lengkap",
      description:
        "Diagnostik komputerisasi menggunakan alat scan khusus diesel untuk mendeteksi dan mengatasi masalah secara akurat.",
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
      slug: "servis-ball-joint",
      title: "Pengecekan & Servis Ball Joint",
      description:
        "Memastikan ball joint berfungsi optimal untuk menjaga kestabilan roda dan mencegah keausan ban yang tidak merata.",
      image: "https://i.imgur.com/zPeuknD.png",
    },
    {
      slug: "servis-tie-rod",
      title: "Servis & Ganti Tie Rod",
      description:
        "Perbaikan atau penggantian tie rod untuk mengembalikan presisi kemudi dan menghilangkan getaran pada setir.",
      image: "https://i.imgur.com/cuj60X2.png",
    },
    {
      slug: "cek-shock-absorber",
      title: "Pengecekan Shock Absorber",
      description:
        "Inspeksi shock absorber untuk mendeteksi kebocoran atau pelemahan, memastikan bantingan mobil tetap nyaman dan terkendali.",
      image: "https://i.imgur.com/F0savm6.png",
    },
    {
      slug: "servis-bushing-stabilizer",
      title: "Servis Bushing & Link Stabilizer",
      description:
        "Mengganti komponen karet seperti bushing dan link stabilizer yang sudah aus untuk menghilangkan bunyi dan menjaga stabilitas saat bermanuver.",
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
      slug: "inspeksi-overhaul",
      title: "Pembongkaran & Inspeksi Detail",
      description:
        "Setiap komponen mesin dibongkar dan diperiksa secara teliti untuk mengidentifikasi tingkat keausan dan kerusakan.",
      image: "https://i.imgur.com/1JQxDIu.png",
    },
    {
      slug: "pembersihan-ruang-bakar",
      title: "Pembersihan Ruang Bakar & Piston",
      description:
        "Membersihkan kerak karbon dari piston, kepala silinder, dan blok mesin untuk mengembalikan efisiensi pembakaran.",
      image: "https://i.imgur.com/ew2IeON.png",
    },
    {
      slug: "penggantian-komponen-overhaul",
      title: "Penggantian Komponen Vital",
      description:
        "Mengganti komponen penting seperti ring piston, metal, dan seal klep dengan suku cadang berkualitas tinggi.",
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
      slug: "restorasi-rack-steer",
      title: "Restorasi & Perbaikan Rack Steer",
      description:
        "Layanan ini mencakup pembongkaran, pembersihan, penggantian seal, dan pelumasan ulang komponen rack steer untuk menghilangkan masalah umum tanpa perlu mengganti seluruh unit.",
      image: "https://i.imgur.com/i2D6YLu.png",
    },
  ],
};

export const paketSpecial = {
  intro: {
    subTitle: "LAYANAN EKSKLUSIF",
    title: "Penanganan Khusus untuk Kendaraan Istimewa",
    description:
      "Kami memiliki tim dan peralatan khusus untuk menangani kendaraan CBU (Completely Built Up), supercar, dan mobil klasik yang membutuhkan perhatian dan keahlian ekstra.",
  },
  variants: [
    {
      slug: "servis-cbu-supercar",
      title: "Servis Mobil CBU & Supercar",
      description:
        "Perawatan rutin dan perbaikan kompleks untuk supercar dan mobil CBU dengan standar pengerjaan tertinggi dan suku cadang orisinal.",
      image: "https://i.imgur.com/Q4G7rpP.png",
    },
    {
      slug: "servis-mobil-klasik",
      title: "Perbaikan & Perawatan Mobil Klasik",
      description:
        "Restorasi dan perawatan mobil klasik untuk menjaga keaslian dan performanya, ditangani oleh mekanik yang berpengalaman di bidangnya.",
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
      slug: "servis-power-steering-hidrolik",
      title: "Servis Power Steering Hidrolik",
      description:
        "Mengatasi masalah kebocoran, setir berat, atau bunyi pada sistem power steering hidrolik konvensional.",
      image: "https://i.imgur.com/GpBwT2l.png",
    },
    {
      slug: "perbaikan-eps",
      title: "Perbaikan Electric Power Steering (EPS)",
      description:
        "Diagnostik dan perbaikan pada motor elektrik, sensor, dan modul EPS untuk mengatasi malfungsi pada sistem kemudi modern.",
      image: "https://i.imgur.com/DOQuJAT.png",
    },
    {
      slug: "ganti-minyak-power-steering",
      title: "Pengecekan & Ganti Minyak Power Steering",
      description:
        "Mengganti minyak power steering secara berkala untuk menjaga performa dan memperpanjang umur komponen sistem kemudi.",
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
      slug: "ganti-oli-filter",
      title: "Ganti Oli & Filter",
      description:
        "Penggantian oli mesin dan filter oli menggunakan produk berkualitas untuk memastikan pelumasan mesin yang optimal.",
      image: "https://i.imgur.com/n18zKaQ.png",
    },
    {
      slug: "cek-rem",
      title: "Pengecekan Rem & Minyak Rem",
      description:
        "Inspeksi menyeluruh pada sistem pengereman, termasuk kampas, piringan, dan level minyak rem untuk menjamin keamanan.",
      image: "https://i.imgur.com/HU3tYJz.png",
    },
    {
      slug: "cek-aki",
      title: "Pengecekan Aki & Sistem Kelistrikan",
      description:
        "Memastikan kondisi aki, alternator, dan sistem kelistrikan lainnya berfungsi dengan baik untuk mencegah masalah starter.",
      image: "https://i.imgur.com/fDdpDEU.png",
    },
    {
      slug: "cek-cairan-filter-udara",
      title: "Pengecekan Cairan & Filter Udara",
      description:
        "Memeriksa dan mengisi ulang cairan esensial seperti air radiator dan wiper, serta membersihkan atau mengganti filter udara.",
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
