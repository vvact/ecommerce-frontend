"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  product_count: number;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        // ✅ Strongly typed axios response
        const res = await axios.get<Category[]>("http://localhost:8000/api/categories/");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* ✅ Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories" },
        ]}
      />

      <h1 className="text-3xl font-bold mb-6">All Categories</h1>

      {categories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="block group rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-medium">{cat.name}</span>
                <span className="text-sm text-gray-500">
                  {cat.product_count} products
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No categories found.</p>
      )}
    </div>
  );
}
