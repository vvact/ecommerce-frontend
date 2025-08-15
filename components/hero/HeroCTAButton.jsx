// HeroCTAButton.jsx
export default function HeroCTAButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg transition"
    >
      {text}
    </button>
  );
}
