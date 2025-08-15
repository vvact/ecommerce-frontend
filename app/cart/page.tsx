// app/cart/page.tsx
export default function CartPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="border rounded-lg p-6">
        <p className="text-gray-600">Your cart is empty.</p>
        {/* Later map real cart items here */}
      </div>
      <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
        Checkout
      </button>
    </main>
  );
}