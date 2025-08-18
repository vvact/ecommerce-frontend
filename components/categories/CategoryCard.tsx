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
    <Link 
      href={`/categories/${category.slug}`}
      className="group relative block overflow-hidden rounded-xl transition-all duration-500 ease-out"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          width={500}
          height={500}
          quality={90}
        />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/40 to-transparent" />
        
        {/* Gold Accent Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F9E076] to-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
        <h3 className="text-xl font-bold tracking-tight mb-1 drop-shadow-md">
          {category.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[#F9E076] font-medium text-sm">
            {category.product_count} products
          </span>
          <span className="flex-1 border-t border-[#F9E076]/50"></span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            className="w-5 h-5 text-[#F9E076] group-hover:translate-x-1 transition-transform duration-300"
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Hover Effect Layer */}
      <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Link>
  );
}