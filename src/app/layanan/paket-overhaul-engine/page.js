import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketOverhaulEngine } from "@/data/servicePackages"; // Import data baru

export default function PaketOverhaulEnginePage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Overhaul Engine"
        breadcrumb="Layanan / Paket Overhaul Engine"
        backgroundImage="/galeri1.webp" // Gambar yang relevan dengan mesin
      />
      {/* Gunakan data untuk paket overhaul engine */}
      <PackageIntro introData={paketOverhaulEngine.intro} />
      <PackageDetailSection packageData={paketOverhaulEngine} />
    </Fragment>
  );
}
