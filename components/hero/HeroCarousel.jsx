"use client";

import { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    id: 1,
    title: "Summer Collection 2025",
    subtitle: "Discover the hottest styles of the season",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    title: "Exclusive Offers",
    subtitle: "Up to 50% off on selected items",
    image: "/hero2.jpg",
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Fresh styles just for you",
    image: "/hero3.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <HeroSlide slide={slide} />
        </div>
      ))}

      {/* Mobile-optimized Arrows */}
      <div className="hidden md:block">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <span className="text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-300">
            &larr;
          </span>
        </button>
        
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <span className="text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-300">
            &rarr;
          </span>
        </button>
      </div>

      {/* Touch-friendly Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current 
                ? "bg-white scale-110" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation Dots - Larger touch targets */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}