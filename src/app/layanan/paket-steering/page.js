import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketSteering } from "@/data/servicePackages"; // Import data baru

export default function PaketSteeringPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Steering"
        breadcrumb="Layanan / Paket Steering"
        backgroundImage="/galeri2.webp" // Gambar yang relevan
      />
      {/* Gunakan data untuk paket steering */}
      <PackageIntro introData={paketSteering.intro} />
      <PackageDetailSection packageData={paketSteering} />
    </Fragment>
  );
}
