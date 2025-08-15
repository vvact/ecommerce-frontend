"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`); // Replace with API call later
    setEmail("");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-100 text-center rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-700 mb-8">
        Stay updated with the latest men’s fashion and electronics trends, deals, and exclusive offers.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
