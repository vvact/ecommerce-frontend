import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@/lib/api";

// Category interface
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string; // full URL from backend
  product_count: number;
  products?: Product[]; // optional for single category
}

// Product interface
export interface Product {
  id: number;
  name: string;
  slug: string;
  thumbnail: string; // full URL from backend
  price: number;
  original_price?: number;
}

// Redux state
interface CategoriesState {
  items: Category[];
  loading: boolean;
  error: string | null;
  selectedCategory: Category | null;
  categoryLoading: boolean;
  categoryError: string | null;
}

// Async thunk to fetch all categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await api.get<Category[]>("/categories/");
    return response.data; // use backend URLs as-is
  }
);

// Async thunk to fetch a single category by slug
export const fetchCategoryBySlug = createAsyncThunk(
  "categories/fetchCategoryBySlug",
  async (slug: string) => {
    const response = await api.get<Category>(`/categories/${slug}/`);
    return response.data; // use backend URLs as-is
  }
);

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: null,
  categoryLoading: false,
  categoryError: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch all categories
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
      })

      // Fetch single category
      .addCase(fetchCategoryBySlug.pending, state => {
        state.categoryLoading = true;
        state.categoryError = null;
      })
      .addCase(fetchCategoryBySlug.fulfilled, (state, action: PayloadAction<Category>) => {
        state.selectedCategory = action.payload;
        state.categoryLoading = false;
      })
      .addCase(fetchCategoryBySlug.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = action.error.message || "Failed to fetch category";
      });
  },
});

export default categoriesSlice.reducer;
