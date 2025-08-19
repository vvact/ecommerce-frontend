"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { loadFeaturedProducts } from "@/features/productSlice";
import ProductCard from "@/components/ProductCard";

export default function FeaturedSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { featuredProducts, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(loadFeaturedProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center py-10">Loading featured products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <section className="py-10 px-5 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
