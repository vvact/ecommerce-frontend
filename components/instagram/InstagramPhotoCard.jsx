export default function InstagramPhotoCard({ photo }) {
  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transform transition duration-300">
      <img
        src={photo.image}
        alt="Instagram photo"
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
        <p className="text-white font-semibold">View</p>
      </div>
    </div>
  );
}
