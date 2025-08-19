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
    <div className="flex flex-col">
      {/* Product Image - Focused area */}
      <Link href={`/products/${product.slug}`} className="block mb-2">
        <div className="relative w-full aspect-square bg-gray-50">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-contain transition-opacity hover:opacity-90"
            onError={() => setImageSrc(FALLBACK_THUMBNAIL)}
          />
        </div>
      </Link>

      {/* Product Info - Minimal text */}
      <div className="text-center">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-gray-800 mb-1 font-medium">{product.name}</h3>
        </Link>
        
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-900 font-medium">
            KSh {product.price.toLocaleString()}
          </span>
          {hasDiscount && (
            <span className="text-gray-500 text-sm line-through">
              KSh {product.original_price?.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}