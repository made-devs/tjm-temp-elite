import { Fragment } from "react";
import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageIntro from "@/components/sections/layanan/PackageIntro";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import { comboSuperKomplit } from "@/data/servicePackages"; // Import data baru

export default function PaketComboSuperKomplitPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Combo Super Komplit"
        breadcrumb="Layanan / Paket Combo Super Komplit"
        backgroundImage="/galeri1.webp" // Ganti gambar background
      />
      {/* Gunakan data untuk paket super komplit */}
      <PackageIntro introData={comboSuperKomplit.intro} />
      <PackageDetailSection packageData={comboSuperKomplit} />
    </Fragment>
  );
}
