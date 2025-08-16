"use client";

import { useRouter } from "next/navigation";

export default function HeroCTAButton({ text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden group"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0F2A5A] to-[#0A192F] group-hover:opacity-0 opacity-100 transition-all duration-500 rounded-lg"></span>
      <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F9E076] text-[#0A192F] font-bold py-3 px-8 rounded-lg text-lg tracking-wide transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-lg">
        {text}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
        </svg>
      </span>
      <span className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
}