import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "T-Shirt Classic", slug: "tshirt-classic", price: 1200, image: "/products/tshirt1.jpg" },
  { id: 2, name: "Hoodie Winter", slug: "hoodie-winter", price: 2500, image: "/products/hoodie1.jpg" },
  { id: 3, name: "Sneakers Run", slug: "sneakers-run", price: 4500, image: "/products/shoes1.jpg" },
  { id: 4, name: "Cap Street", slug: "cap-street", price: 800, image: "/products/cap1.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
