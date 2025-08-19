// components/ProductCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  original_price?: number;
}

const FALLBACK_THUMBNAIL = "/placeholder.jpg";

export default function ProductCard({ product }: { product: Product }) {
  const [imageSrc, setImageSrc] = useState(
    product.thumbnail?.trim() || FALLBACK_THUMBNAIL
  );

  const hasDiscount = product.original_price && product.original_price > product.price;

  return (
    <div className="border rounded-xl shadow-sm hover:shadow transition-all p-4 flex flex-col h-full">
      {/* Product Image */}
      <Link href={`/products/${product.slug}`} className="block mb-3">
        <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-contain hover:scale-[1.02] transition-transform"
            onError={() => setImageSrc(FALLBACK_THUMBNAIL)}
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-grow">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-gray-800 hover:text-blue-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="mt-2">
          <span className="text-lg font-semibold text-gray-900">
            KSh {product.price.toLocaleString()}
          </span>
          {hasDiscount && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 line-through">
                KSh {product.original_price?.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}