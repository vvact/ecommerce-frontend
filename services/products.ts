import api from '@/lib/api';
import type { Product } from '@/types/product';

// All products
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products/');
  return response.data;
};

// Single product by slug
export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  const response = await api.get<Product>(`/products/${slug}/`);
  return response.data;
};

// New arrivals
export const fetchNewArrivals = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products/new-arrivals/');
  return response.data;
};

// Featured products
export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products/featured/');
  return response.data;
};

// Products by category slug
export const fetchProductsByCategorySlug = async (slug: string): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products/?category=${slug}`);
  return response.data;
};

// Search products
export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products/?search=${encodeURIComponent(query)}`);
  return response.data;
};
