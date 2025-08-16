// app/404.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-xl sm:text-2xl text-gray-600 mb-6 text-center">
        This page could not be found.
      </p>

      {/* Illustration */}
      <Image
        src="/images/404-illustration.png" // place your custom illustration in public/images
        alt="Page not found"
        width={300}
        height={300}
        className="mb-6"
      />

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
