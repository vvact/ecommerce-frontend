"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs"; // ⬅️ import it

interface Product {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  original_price: number;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  products: Product[];
}

export default function CategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    async function fetchCategory() {
      const res = await fetch(`http://localhost:8000/api/categories/${slug}/`);
      const data = await res.json();
      setCategory(data);
    }
    if (slug) fetchCategory();
  }, [slug]);

  if (!category) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="px-6 py-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: category.name }
        ]}
      />

      {/* Category header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-60 object-cover rounded-xl mt-4"
          />
        )}
      </div>

      {/* Product grid */}
      {category.products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
