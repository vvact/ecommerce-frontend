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
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg transition"
    >
      {text}
    </button>
  );
}
