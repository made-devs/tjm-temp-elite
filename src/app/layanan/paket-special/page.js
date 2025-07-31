import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { paketSpecial } from "@/data/servicePackages"; // Import data baru

export default function PaketSpecialPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Special"
        breadcrumb="Layanan / Paket Special"
        backgroundImage="/bengkel2.webp" // Gambar yang relevan
      />
      {/* Gunakan data untuk paket special */}
      <PackageIntro introData={paketSpecial.intro} />
      <PackageDetailSection packageData={paketSpecial} />
    </Fragment>
  );
}
