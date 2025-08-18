// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: string;
  thumbnail: string;  // ✅ Add this
  
}
export interface Category {
  id: number;
  name: string;
  slug: string;
}