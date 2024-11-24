"use client";

import { useState } from "react";
import Link from "next/link";
import { Power } from "lucide-react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Power className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-gray-800">PowerAnywhere</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Links */}
          <Link href="#features" className="text-gray-600 hover:text-green-500">
            Features
          </Link>
          <Link href="#product" className="text-gray-600 hover:text-green-500">
            Product
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-green-500">
            Testimonials
          </Link>

          {/* Button */}
          <Link
            href="#cta"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Buy Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start px-4 py-2 space-y-2">
            <Link
              href="#features"
              className="text-gray-600 hover:text-green-500 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#product"
              className="text-gray-600 hover:text-green-500 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-green-500 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#cta"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
