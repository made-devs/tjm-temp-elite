import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { comboKakiKaki } from "@/data/servicePackages"; // Import data

export default function PaketComboKakiKakiPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Combo Kaki Kaki"
        breadcrumb="Layanan / Paket Combo Kaki Kaki"
        backgroundImage="/galeri3.webp"
      />
      {/* Kirim data sebagai props */}
      <PackageIntro introData={comboKakiKaki.intro} />
      <PackageDetailSection packageData={comboKakiKaki} />
    </Fragment>
  );
}
