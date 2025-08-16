"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  product_count: number;
}

export default function TopCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          "http://localhost:8000/api/categories/"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories" }, // current page
        ]}
      />

      <h2 className="text-3xl font-bold mb-8 text-center">Top Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
