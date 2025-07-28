import PageHeader from '@/components/sections/layanan/PageHeader';
import PackageDetailSection from '@/components/sections/layanan/PackageDetailSection';
import { Fragment } from 'react';

export default function PaketComboKakiKakiPage() {
  return (
    <Fragment>
      <PageHeader
        title="Paket Combo Kaki Kaki"
        breadcrumb="Layanan / Paket Combo Kaki Kaki"
        backgroundImage="/galeri3.webp"
      />
      <PackageDetailSection />
      {/* Di sini nanti kita bisa tambahin section lain seperti testimoni atau CTA */}
    </Fragment>
  );
}
