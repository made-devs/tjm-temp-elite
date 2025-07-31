import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketRacksteerHemat } from "@/data/servicePackages"; // Import data baru

export default function PaketRacksteerHematPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Racksteer Hemat"
        breadcrumb="Layanan / Paket Racksteer Hemat"
        backgroundImage="/galeri2.webp" // Gambar yang relevan
      />
      {/* Gunakan data untuk paket racksteer hemat */}
      <PackageIntro introData={paketRacksteerHemat.intro} />
      <PackageDetailSection packageData={paketRacksteerHemat} />
    </Fragment>
  );
}
