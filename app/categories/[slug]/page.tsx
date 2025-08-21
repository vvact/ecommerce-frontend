"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { fetchCategoryBySlug } from "@/features/categoriesSlice";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export default function CategoryPage() {
  const { slug } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  // Convert slug to string if it's an array
  const categorySlug = Array.isArray(slug) ? slug[0] : slug;

  const { selectedCategory: category, categoryLoading: loading, categoryError: error } =
    useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (categorySlug) {
      dispatch(fetchCategoryBySlug(categorySlug));
    }
  }, [dispatch, categorySlug]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!category) return null;

  return (
    <div className="px-6 py-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />

      {/* Category header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        {category.image?.startsWith("http") && (
  <Image
    src={category.image}
    alt={category.name}
    width={500}
    height={300}
    className="w-full h-60 object-cover rounded-xl mt-4"
  />
)}

      </div>

      {/* Product grid */}
      {category.products?.length ? (
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
