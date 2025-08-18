"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { fetchCategories, Category } from "@/features/categoriesSlice";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function CategoriesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, categories.length]);

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="animate-pulse space-y-8">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 w-16 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="h-8 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-80 bg-gray-200 rounded"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-medium text-red-800 mb-2">Unable to load categories</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => dispatch(fetchCategories())}
          className="px-4 py-2 bg-gradient-to-r from-[#0A192F] to-[#0F2A5A] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      {isScrolled && (
        <motion.div 
          className="fixed top-0 left-0 right-0 bg-white z-30 shadow-md py-3 px-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </motion.div>
      )}

      <div className="px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Categories" },
          ]}
        />

        <motion.div 
          className="text-center mb-10 relative py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-3">
            Discover Our Collections
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our premium categories curated with the finest products. Find exactly what you&apos;re looking for in our carefully organized collections.
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent shadow-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <div className="text-center px-4 py-2 bg-[#0A192F]/5 rounded-lg">
              <p className="text-2xl font-bold text-[#0A192F]">{categories.length}</p>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
            <div className="text-center px-4 py-2 bg-[#0A192F]/5 rounded-lg">
              <p className="text-2xl font-bold text-[#0A192F]">
                {categories.reduce((sum, cat) => sum + cat.product_count, 0)}
              </p>
              <p className="text-sm text-gray-600">Total Products</p>
            </div>
          </div>
        </motion.div>

        {filteredCategories.length > 0 ? (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCategories.map((cat: Category, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href={`/categories/${cat.slug}`} className="block">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg truncate">{cat.name}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[#F9E076] text-sm font-medium">
                          {cat.product_count} products
                        </span>
                        <div className="bg-[#D4AF37] rounded-full p-1">
                          <ChevronRightIcon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-2">No matching categories</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search to find what you&apos;re looking for</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-gradient-to-r from-[#0A192F] to-[#0F2A5A] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {filteredCategories.length > 0 && (
          <motion.div 
            className="mt-16 rounded-2xl overflow-hidden relative border border-gray-100 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 to-transparent z-10"></div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center pl-8 md:pl-16 max-w-md">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">New Summer Collection</h3>
              <p className="text-[#F9E076] mb-4">Just arrived - limited time offer</p>
              <Link 
                href="/collections/summer" 
                className="flex items-center text-white font-medium group"
              >
                Shop Now
                <ChevronRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <Image
              src="/summer-banner.jpg"
              alt="Summer Collection"
              width={1200}
              height={400}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        )}

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#0A192F] to-[#0F2A5A] rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-3">Never Miss an Update</h3>
          <p className="max-w-2xl mx-auto mb-6 text-[#F9E076]">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling inspiration
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E076] text-[#0A192F] font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
