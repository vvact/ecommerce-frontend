// app/page.tsx
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <main className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My E-Commerce</h1>
        <p className="text-lg mb-6">Discover the best products for your needs.</p>
        <a
          href="/shop"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </main>
    </div>
  );
}
