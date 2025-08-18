// providers.tsx
"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/lib/store";
import GlobalCategoriesLoader from "@/components/GlobalCategoriesLoader";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ReduxProvider store={store}>

    <GlobalCategoriesLoader />
    {children}
  </ReduxProvider>;
}
