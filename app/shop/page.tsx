"use client";

import { useEffect, useState } from "react";
import ProductCard, { Product as ProductType } from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ShopPage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:8000/api/products/");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        // ✅ map API data to match ProductCard interface
        const mappedProducts: ProductType[] = data.map((p: any) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          thumbnail: p.thumbnail || "/placeholder.jpg",
          price: Number(p.price),
          original_price: p.original_price ? Number(p.original_price) : undefined,
        }));

        setProducts(mappedProducts);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />

      <h1 className="text-2xl font-semibold mb-6">Shop</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
