// ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-yellow-500 font-bold mt-2">KSh {product.price}</p>
        <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
