import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@/features/categoriesSlice";
import productReducer from "@/features/productSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    product: productReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
