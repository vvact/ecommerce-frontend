import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <ProductList />
    </main>
  );
}
