// TopCategories.jsx
import CategoryCard from "./CategoryCard";

const categories = [
  { id: 1, name: "T-Shirts", slug: "t-shirts", image: "/categories/tshirt.jpg" },
  { id: 2, name: "Hoodies", slug: "hoodies", image: "/categories/hoodie.jpg" },
  { id: 3, name: "Shoes", slug: "shoes", image: "/categories/shoes.jpg" },
  { id: 4, name: "Accessories", slug: "accessories", image: "/categories/accessories.jpg" },
];

export default function TopCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
