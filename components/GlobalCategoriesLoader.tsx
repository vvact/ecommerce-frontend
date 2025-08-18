// app/components/GlobalCategoriesLoader.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { fetchCategories } from "@/features/categoriesSlice";

export default function GlobalCategoriesLoader() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return null;
}
