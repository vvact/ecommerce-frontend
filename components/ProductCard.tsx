"use client";

import Link from "next/link";
import Image from "next/image";

export interface Product {
  id: number;
  name?: string | null;
  slug?: string | null;
  thumbnail?: string | null; // might be missing
  price?: number | null;
  original_price?: number | null;
}

const FALLBACK_THUMBNAIL = "/placeholder.jpg"; // local fallback

export default function ProductCard({ product }: { product: Product }) {
  const name = product.name || "Unnamed Product";
  const slug = product.slug || "#";
  const price = product.price ?? 0;
  const originalPrice = product.original_price ?? 0;

  const safeThumbnail =
    product.thumbnail && product.thumbnail.trim() !== ""
      ? product.thumbnail
      : FALLBACK_THUMBNAIL;

  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      {/* Product Image */}
      <Link href={`/products/${slug}`}>
        <div className="relative w-full h-56 bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={safeThumbnail}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex flex-col flex-grow">
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            KSh {price}
          </span>
          {originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              KSh {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
