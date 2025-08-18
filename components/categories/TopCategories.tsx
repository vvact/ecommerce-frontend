"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { fetchCategories, Category } from "@/features/categoriesSlice";
import CategoryCard from "./CategoryCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function TopCategories() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  // Mobile-optimized loading state
  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="animate-pulse space-y-6">
        {/* Breadcrumbs skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <ChevronRightIcon className="h-3 w-3 text-gray-300" />
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
        
        {/* Heading skeleton */}
        <div className="relative text-center mb-10">
          <div className="h-px bg-gray-200 absolute top-1/2 left-0 right-0"></div>
          <div className="h-8 w-64 bg-gray-200 rounded mx-auto relative inline-block px-6"></div>
        </div>
        
        {/* Grid skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile-optimized error state
  if (error) return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6 max-w-md mx-auto">
        <div className="flex items-start">
          <div className="bg-red-500 rounded-full p-2 flex-shrink-0 mt-0.5 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-medium text-red-800 mb-1">Unable to load categories</h3>
            <p className="text-red-600 text-sm mb-3">{error}</p>
            <button
              onClick={() => dispatch(fetchCategories())}
              className="px-4 py-2 bg-gradient-to-r from-[#0A192F] to-[#0F2A5A] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.section 
      className="max-w-7xl mx-auto px-4 py-8 sm:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Premium Breadcrumbs */}
      <div className="mb-6 sm:mb-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Categories" },
          ]}
        />
      </div>

      {/* Premium Heading with Mobile Optimization */}
      <div className="text-center mb-8 sm:mb-10 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 hidden sm:block"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F] relative inline-block px-4 sm:px-6 bg-white">
          Top Categories
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-md mx-auto">
          Discover our premium collections
        </p>
      </div>

      {/* Enhanced Category Grid with Mobile-first Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {categories.map((category: Category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="w-full"
          >
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </div>

      {/* View All Button for Mobile */}
      <div className="mt-8 flex justify-center sm:hidden">
        <button className="px-5 py-2.5 bg-gradient-to-r from-[#0A192F] to-[#0F2A5A] text-white rounded-lg font-medium text-sm flex items-center">
          View All Categories
          <ChevronRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>

      {/* Premium Divider with Brand Accent */}
      <div className="mt-10 sm:mt-14 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
    </motion.section>
  );
}