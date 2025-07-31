import { Fragment } from "react";
import ContactHero from "@/components/sections/kontak/ContactHero";
import ContactFormSection from "@/components/sections/kontak/ContactFormSection";
// Menggunakan ContactSection dari folder home yang sudah ada
import ContactSection from "@/components/sections/home/ContactSection";

export default function KontakPage() {
  return (
    <Fragment>
      <ContactHero />
      <ContactFormSection />
      {/* Menggunakan komponen ContactSection yang sudah terbukti berfungsi */}
      <ContactSection />
    </Fragment>
  );
}
