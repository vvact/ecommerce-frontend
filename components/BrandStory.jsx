// components/BrandStory.tsx
"use client";

import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image - Will swap sides on desktop */}
          <div className="w-full lg:w-1/2 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/brand.jpg"
                alt="Manwell brand story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:order-1">
            <div className="max-w-2xl mx-auto">
              <div className="mb-2 text-blue-600 font-medium">Our Journey</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Crafting Excellence Since 2015
              </h2>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                At Manwell, we blend timeless style with modern innovation to create products that 
                elevate your everyday experience. Our journey began with a simple vision: to redefine 
                men's lifestyle through exceptional design and quality.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower modern men with thoughtfully designed apparel and cutting-edge electronics 
                    that seamlessly integrate into their daily lives.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Commitment</h3>
                  <p className="text-gray-700">
                    We pledge uncompromising quality, sustainable practices, and exceptional customer 
                    service in everything we create.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}