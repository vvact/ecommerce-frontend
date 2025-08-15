import TestimonialCard from "./TestimonialCard";

const dummyTestimonials = [
  { id: 1, name: "John M.", initials: "JM", rating: 5, message: "Amazing selection of men’s fashion and gadgets. Fast delivery!" },
  { id: 2, name: "David K.", initials: "DK", rating: 4, message: "High-quality products and excellent customer service." },
  { id: 3, name: "Peter L.", initials: "PL", rating: 5, message: "I found the perfect gifts for my brother and he loved them!" },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyTestimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
