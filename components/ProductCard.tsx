// components/ProductCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  slug: string;
  thumbnail: string; // strictly required
  price: number;
  original_price?: number; // optional to prevent errors if missing
}

const FALLBACK_THUMBNAIL = "/placeholder.jpg"; // put a placeholder image in /public

export default function ProductCard({ product }: { product: Product }) {
  // ✅ Fallback if backend sends empty string or invalid URL
  const safeThumbnail =
    product.thumbnail && product.thumbnail.trim() !== ""
      ? product.thumbnail
      : FALLBACK_THUMBNAIL;

  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      {/* Product Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="relative w-full h-56 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={safeThumbnail}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex flex-col flex-grow">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            KSh {product.price}
          </span>
          {product.original_price && product.original_price > product.price && (
            <span className="text-sm text-gray-500 line-through">
              KSh {product.original_price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
