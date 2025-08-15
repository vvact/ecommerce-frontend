// CategoryCard.jsx
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition duration-300">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-lg font-semibold">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}
