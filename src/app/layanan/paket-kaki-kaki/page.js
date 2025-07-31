import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketKakiKaki } from "@/data/servicePackages"; // Import data baru

export default function PaketKakiKakiPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Kaki Kaki"
        breadcrumb="Layanan / Paket Kaki Kaki"
        backgroundImage="/galeri3.webp" // Gambar yang relevan
      />
      {/* Gunakan data untuk paket kaki kaki */}
      <PackageIntro introData={paketKakiKaki.intro} />
      <PackageDetailSection packageData={paketKakiKaki} />
    </Fragment>
  );
}
