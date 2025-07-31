import { Fragment, Suspense } from "react"; // Impor Suspense
import ContactHero from "@/components/sections/kontak/ContactHero";
import ContactFormSection from "@/components/sections/kontak/ContactFormSection";
import ContactSection from "@/components/sections/home/ContactSection";

// Komponen fallback sederhana untuk ditampilkan saat form sedang dimuat
const FormLoadingFallback = () => (
  <div
    className="w-full flex items-center justify-center bg-background"
    style={{ height: "80vh" }}
  >
    <p className="text-muted animate-pulse">Memuat formulir kontak...</p>
  </div>
);

export default function KontakPage() {
  return (
    <Fragment>
      <ContactHero />
      {/* SOLUSI: Bungkus komponen yang menggunakan useSearchParams dengan Suspense */}
      <Suspense fallback={<FormLoadingFallback />}>
        <ContactFormSection />
      </Suspense>
      <ContactSection />
    </Fragment>
  );
}
