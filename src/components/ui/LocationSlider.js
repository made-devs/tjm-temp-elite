"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LocationSlider({ locations, onSelectSlide }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    onSelectSlide(locations[newIndex].id); // Kirim ID slide yang aktif ke parent
  }, [emblaApi, onSelectSlide, locations]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {locations.map((workshop, index) => (
            <div
              className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/4 pl-4"
              key={workshop.id}
            >
              <div
                className={`p-6 bg-background rounded-lg border transition-all duration-300 h-full cursor-pointer ${
                  selectedIndex === index
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-muted/20 hover:border-primary/50"
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              >
                <p className="font-bold text-foreground truncate">
                  {String(index + 1).padStart(2, "0")}. {workshop.city}
                </p>
                <div className="relative w-full aspect-video my-4 rounded-md overflow-hidden">
                  <Image
                    src={workshop.photo}
                    alt={`Bengkel TJM di ${workshop.city}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted line-clamp-2">
                  {workshop.address}
                </p>
                <p className="text-sm text-muted mt-2">
                  Buka: {workshop.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
