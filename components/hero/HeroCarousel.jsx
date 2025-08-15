"use client";

// HeroCarousel.jsx
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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <HeroSlide slide={slide} />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === current ? "bg-yellow-500" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
