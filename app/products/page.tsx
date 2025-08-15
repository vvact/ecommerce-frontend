// app/products/page.tsx
import Link from "next/link";

const dummyProducts = [
  { id: 1, name: "T-Shirt", slug: "t-shirt", price: 19.99, image: "/placeholder.jpg" },
  { id: 2, name: "Hoodie", slug: "hoodie", price: 39.99, image: "/placeholder.jpg" },
  { id: 3, name: "Cap", slug: "cap", price: 9.99, image: "/placeholder.jpg" },
];

export default function ProductList() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-2 text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}