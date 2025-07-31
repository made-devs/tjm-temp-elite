import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { customSuspension } from "@/data/servicePackages"; // Import data baru

export default function PaketCustomSuspensionPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Custom Suspension"
        breadcrumb="Layanan / Paket Custom Suspension"
        backgroundImage="/bengkel4.webp" // Gambar yang relevan dengan suspensi
      />
      {/* Gunakan data untuk paket custom suspension */}
      <PackageIntro introData={customSuspension.intro} />
      <PackageDetailSection packageData={customSuspension} />
    </Fragment>
  );
}
