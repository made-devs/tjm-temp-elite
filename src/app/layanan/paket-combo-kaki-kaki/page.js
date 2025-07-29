import PageHeader from "@/components/sections/layanan/PageHeader";
import PackageDetailSection from "@/components/sections/layanan/PackageDetailSection";
import PackageIntro from "@/components/sections/layanan/PackageIntro"; // Impor komponen baru
import { Fragment } from "react";
import CtaSection from "@/components/sections/shared/CtaSection";

export default function PaketComboKakiKakiPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Combo Kaki Kaki"
        breadcrumb="Layanan / Paket Combo Kaki Kaki"
        backgroundImage="/galeri3.webp"
      />
      {/* Tambahkan komponen intro di sini */}
      <PackageIntro
        subTitle="SOLUSI KAKI-KAKI LENGKAP"
        title="Empat Pilihan Combo Untuk Kenyamanan Maksimal"
        description="Setiap kendaraan memiliki kebutuhan yang unik. Oleh karena itu, kami merancang empat varian Paket Combo Kaki-Kaki yang dapat disesuaikan, mulai dari perawatan AC hingga perlindungan anti karat, untuk memastikan mobil Anda mendapatkan penanganan yang paling tepat dan komprehensif."
      />
      <PackageDetailSection />
      <CtaSection />
    </Fragment>
  );
}
