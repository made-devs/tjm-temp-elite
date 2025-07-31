import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketDiesel } from "@/data/servicePackages"; // Import data baru

export default function PaketDieselPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Diesel"
        breadcrumb="Layanan / Paket Diesel"
        backgroundImage="/galeri1.webp" // Gambar yang relevan dengan mesin
      />
      {/* Gunakan data untuk paket diesel */}
      <PackageIntro introData={paketDiesel.intro} />
      <PackageDetailSection packageData={paketDiesel} />
    </Fragment>
  );
}
