import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketSuperHemat } from "@/data/servicePackages"; // Import data baru

export default function PaketSuperHematPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Super Hemat"
        breadcrumb="Layanan / Paket Super Hemat"
        backgroundImage="/galeri4.webp" // Gambar yang relevan
      />
      {/* Gunakan data untuk paket super hemat */}
      <PackageIntro introData={paketSuperHemat.intro} />
      <PackageDetailSection packageData={paketSuperHemat} />
    </Fragment>
  );
}
