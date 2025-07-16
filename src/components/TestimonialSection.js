"use client"; // Menambahkan directive use client

import { ArrowLeft, ArrowRight, Quote } from "lucide-react"; // Import ikon panah dan kutipan
import { useState } from "react"; // Import useState untuk mengelola state

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0); // State untuk mengelola testimoni yang aktif

  // Data untuk testimoni, sekarang dengan 3 entri
  const testimonials = [
    {
      id: 1,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jack Stevens",
      location: "Seattle, WA",
      avatar: "https://placehold.co/64x64/E0E0E0/000000?text=JS1", // Placeholder avatar
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ligula non justo efficitur ultrices. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eu ex vel justo tincidunt efficitur. Umpan balik yang sangat jujur dan membantu!",
      author: "Laura Richi",
      location: "Austin, TX",
      avatar: "https://placehold.co/64x64/E0E0E0/000000?text=LR", // Placeholder avatar
    },
    {
      id: 3,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pelayanan yang luar biasa!",
      author: "Michael Brown",
      location: "New York, NY",
      avatar: "https://placehold.co/64x64/E0E0E0/000000?text=MB", // Placeholder avatar
    },
  ];

  const currentTestimonial = testimonials[activeIndex]; // Testimoni yang sedang ditampilkan

  // Fungsi untuk navigasi ke testimoni sebelumnya
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk navigasi ke testimoni berikutnya
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full bg-white text-gray-900 py-24">
      <div className="max-w-[70rem] mx-auto px-4">
        {/* Bagian Header */}
        <div className="max-w-[20rem] mb-10">
          <p className="text-orange-600 uppercase  tracking-widest text-sm font-semibold">
            TESTIMONI
          </p>
          <h2 className="text-5xl font-bold font-jakarta mt-2 leading-tight">
            Umpan balik jujur Anda
          </h2>
        </div>

        {/* Konten Testimoni */}
        {/* Mengurangi gap antar kolom dari gap-16 menjadi gap-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Kolom Kiri (Avatars dan Info Penulis) */}
          <div className="flex flex-col items-start">
            <div className="flex space-x-4 mb-8">
              {/* Avatars */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`relative`} // Ini adalah parent relatif untuk posisi ikon kutipan
                >
                  <div
                    className={`w-16 h-16 rounded-full border-2 shadow-md cursor-pointer transition-all duration-300
                      ${
                        index === activeIndex
                          ? "border-orange-600"
                          : "border-gray-300"
                      }
                    `}
                    onClick={() => setActiveIndex(index)} // Mengatur testimoni aktif saat diklik
                  >
                    <img
                      src={testimonial.avatar}
                      alt={`Avatar ${testimonial.author}`}
                      className={`w-full h-full object-cover rounded-full transition-all duration-300
                        ${index === activeIndex ? "grayscale-0" : "grayscale"}
                      `}
                    />
                  </div>
                  {/* Ikon Kutipan, hanya terlihat pada avatar aktif */}
                  {index === activeIndex && (
                    <div className="absolute bottom-[-8px] right-[-8px] bg-orange-600 rounded-full p-1 z-10">
                      {" "}
                      {/* Posisi disesuaikan */}
                      <Quote size={16} className="text-white" fill="white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Info Penulis */}
            <div>
              <p className="text-lg font-bold text-gray-900">
                {currentTestimonial.author}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {currentTestimonial.location}
              </p>
            </div>
          </div>

          {/* Kolom Kanan (Teks Testimoni) */}
          <div>
            {/* Menambahkan min-h-[200px] untuk memastikan tinggi yang konsisten */}
            <p className="text-gray-700 text-lg leading-relaxed min-h-[180px]">
              {currentTestimonial.text}
            </p>

            {/* Tombol Navigasi */}
            <div className="flex space-x-4 mt-12">
              <button
                className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={handlePrev}
              >
                <ArrowLeft size={24} className="text-gray-700" />
              </button>
              <button
                className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={handleNext}
              >
                <ArrowRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
