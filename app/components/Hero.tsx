"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/hero-camping.webp"
        alt="PowerAnywhere in action"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Power Anywhere, Anytime
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Introducing the revolutionary handheld power generator that attaches
          to anything. Never be without power again.
        </p>
        <a
          href="#cta"
          className="inline-block bg-green-500 px-8 py-3 rounded-md text-lg font-semibold text-white hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Get Yours Now
        </a>
      </div>
    </section>
  );
}
