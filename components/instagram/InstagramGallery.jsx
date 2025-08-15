import InstagramPhotoCard from "./InstagramPhotoCard";

const dummyPhotos = [
  { id: 1, image: "/instagram/photo1.jpg" },
  { id: 2, image: "/instagram/photo2.jpg" },
  { id: 3, image: "/instagram/photo3.jpg" },
  { id: 4, image: "/instagram/photo4.jpg" },
  { id: 5, image: "/instagram/photo5.jpg" },
  { id: 6, image: "/instagram/photo6.jpg" },
];

export default function InstagramGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Favorite Moments</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {dummyPhotos.map((photo) => (
          <InstagramPhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
