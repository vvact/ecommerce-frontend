export default function TestimonialCard({ testimonial }) {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-yellow-500">{'★'.repeat(testimonial.rating)}</p>
        </div>
      </div>
    </div>
  );
}
