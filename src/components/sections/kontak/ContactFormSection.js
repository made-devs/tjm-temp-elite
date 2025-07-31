"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MessageSquare } from "lucide-react";
// Impor kedua array data
import {
  allServiceVariants,
  groupedServiceVariants,
} from "@/data/servicePackages";
import ImageSlideshow from "../../ui/ImageSlideshow";
import { useSearchParams } from "next/navigation";

const slideshowImages = [
  "/galeri1.webp",
  "/galeri3.webp",
  "/galeri4.webp",
  "/bengkel4.webp",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    carType: "",
    selectedPackage: "",
    message: "",
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const selectedPkgSlug = searchParams.get("paket");
    if (selectedPkgSlug) {
      // Logic pencarian tetap sama, menggunakan allServiceVariants
      const matchedPackage = allServiceVariants.find(
        (variant) => variant.slug === selectedPkgSlug
      );

      if (matchedPackage) {
        setFormData((prev) => ({
          ...prev,
          selectedPackage: matchedPackage.title,
        }));
      }
    }
  }, [searchParams]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPhoneNumber = "6285169576890";
    const waMessage = `Halo TJM, saya ${formData.name}.
Mobil: ${formData.carType}.
Saya tertarik dengan: ${formData.selectedPackage || "Belum memilih paket"}.

Pesan: ${formData.message}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-background font-jakarta text-foreground py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold">Kirim Pesan Cepat</h2>
          <p className="text-muted mt-4 text-lg">
            Punya pertanyaan atau ingin booking servis? Isi formulir di bawah
            ini dan tim admin kami akan segera menghubungi Anda melalui WhatsApp
            untuk konfirmasi dan penjadwalan.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 shadow-2xl transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative min-h-[600px] h-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden">
            <ImageSlideshow images={slideshowImages} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 bg-foreground text-white h-full flex flex-col justify-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none"
          >
            <h3 className="text-3xl font-bold mb-8">Detail Anda</h3>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#2c2c2c] border border-muted/50 rounded-md p-3 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="carType"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Tipe Mobil
                </label>
                <input
                  type="text"
                  id="carType"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#2c2c2c] border border-muted/50 rounded-md p-3 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="selectedPackage"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Pilih Paket Layanan (Opsional)
                </label>
                <select
                  id="selectedPackage"
                  name="selectedPackage"
                  value={formData.selectedPackage}
                  onChange={handleChange}
                  className="w-full bg-[#2c2c2c] border border-muted/50 rounded-md p-3 focus:ring-primary focus:border-primary"
                >
                  <option value="">Pilih salah satu...</option>
                  {/* Menggunakan data yang dikelompokkan dengan <optgroup> */}
                  {groupedServiceVariants.map((group) => (
                    <optgroup key={group.name} label={group.name}>
                      {group.variants.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted mb-1"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#2c2c2c] border border-muted/50 rounded-md p-3 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <MessageSquare size={20} />
                Kirim via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
