// HeroSlide.jsx
import HeroCTAButton from "./HeroCTAButton";

export default function HeroSlide({ slide }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
        <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
        <HeroCTAButton text="Shop Now" />
      </div>
    </div>
  );
}
