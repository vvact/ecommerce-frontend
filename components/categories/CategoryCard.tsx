// components/categories/CategoryCard.tsx
import Link from "next/link";
import Image from "next/image";


export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  product_count: number;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition duration-300">
        <Image
          src={category.image}
          alt={category.name}
          className="w-full h-40 object-cover"
          width={500}
          height={300}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h3 className="text-white text-lg font-semibold">{category.name}</h3>
          <p className="text-white text-sm">{category.product_count} products</p>
        </div>
      </div>
    </Link>
  );
}
