import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide the latest men’s fashion and electronics. Quality products and fast delivery guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          <p className="text-gray-500 mt-4 text-sm">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
