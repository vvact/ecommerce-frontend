import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="breadcrumb" 
      className="w-full overflow-x-auto pb-1 scrollbar-hide"
    >
      <ol className="flex items-center min-w-max">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center transition-all duration-200"
          >
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center group text-sm md:text-base"
              >
                <span className="py-1 px-2 rounded-lg transition-all duration-200 group-hover:bg-[#0A192F]/5 group-hover:text-[#0A192F] text-gray-600">
                  {item.label.replace("'", "&apos;")}
                </span>
              </Link>
            ) : (
              <span className="py-1 px-2 rounded-lg font-medium text-[#0A192F]">
                {item.label.replace("'", "&apos;")}
              </span>
            )}
            
            {index < items.length - 1 && (
              <ChevronRightIcon className="mx-1 h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
