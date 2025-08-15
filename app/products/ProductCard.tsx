'use client';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    price: number;
    original_price: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        {product.price} {product.price !== product.original_price && <span className="original">{product.original_price}</span>}
      </p>
      <button>Add to Cart</button>
    </div>
  );
}
