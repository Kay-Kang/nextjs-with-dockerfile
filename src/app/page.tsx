"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_60px] min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-500 to-blue-300 text-white">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Wanderlust</h1>
        <nav className="flex gap-6 text-lg">
          <a className="hover:underline" href="#destinations">
            Destinations
          </a>
          <a className="hover:underline" href="#explore">
            Explore
          </a>
          <a className="hover:underline" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center gap-16">
        {/* Hero Section */}
        <section className="flex flex-col gap-6 items-center max-w-4xl">
        <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
            This Website this Hosting BY Pich Ounnoun
          </h2>
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
            Discover Your Next Adventure
          </h2>
          <p className="text-lg sm:text-xl">
            Explore breathtaking destinations, unique experiences, and memories
            that last a lifetime.
          </p>
          <p
            className="rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors text-lg py-3 px-8 font-medium shadow-md"
            // href="#destinations"
          >
            Get Started
          </p>
        </section>

        {/* Featured Destinations */}
        <section
          id="destinations"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { src: "https://i.pinimg.com/736x/e7/04/56/e7045643b35fba6754bf68e0dcae3bb0.jpg", title: "Tropical Beaches" },
            { src: "https://i.pinimg.com/736x/09/17/b9/0917b99a490716b77e5af056e5f1e369.jpg", title: "Mountain Retreats" },
            { src: "https://i.pinimg.com/736x/20/8c/14/208c1474df483aa735f1e0477f90de32.jpg", title: "City Escapes" },
          ].map((dest, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-lg bg-white text-black transform hover:scale-105 transition-transform"
            >
              <Image
                src={dest.src}
                alt={dest.title}
                width={400}
                height={300}
                className="object-cover w-full h-56"
                priority
              />
              <h3 className="text-xl font-bold p-4">{dest.title}</h3>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-4 text-sm text-center">
        <p>&copy; 2024 Wanderlust. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
