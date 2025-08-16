"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface NavProps {
  cartCount?: number;
}

export default function Navbar({ cartCount = 0 }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
  ];

  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMaxHeight(menuRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full transform group-hover:rotate-6 transition-transform" />
              <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-tighter">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tighter">MANWELL</span>
              <span className="text-xs text-gray-400 tracking-widest">WHERE STREET MEETS SLEEK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-300 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cart"
                className="relative text-gray-300 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors"
              >
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-900"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <ul className="px-4 pt-2 pb-4 space-y-3">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/cart"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex justify-between items-center">
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}