export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image or Illustration */}
        <div className="h-64 md:h-96 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
          Placeholder for Brand Image
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            At Manwell, we are passionate about bringing the best in men’s fashion and electronics together. 
            From stylish clothing to the latest gadgets, we aim to provide products that fit your lifestyle and needs.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become the go-to destination for modern men who value style, technology, and convenience, 
            while delivering exceptional quality and customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}
