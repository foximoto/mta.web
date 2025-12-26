import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              The Motorcycle Tourers Association (MTA) is India&apos;s premier
              community dedicated to long-distance motorcycle touring, safety,
              and the spirit of adventure.
            </p>

            <p>
              We are riders who believe in discipline, proper training, and the
              brotherhood that comes from sharing the open road. From weekend
              warriors to Iron Butt veterans, we ride together.
            </p>

            <p>
              Founded by endurance riders, MTA stands for safety-first touring,
              mechanical excellence, and building a community where every rider
              matters.
            </p>
          </div>

          <Link
            href="/about-us"
            className="inline-flex items-center gap-3 mt-10 text-red-500 font-semibold hover:text-red-600 transition"
          >
            Learn More About MTA
            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="/images/asiabooks.jpeg"
            alt=""
            className="w-full h-56 object-cover"
          />

          <img
            src="/images/ironrider.jpeg"
            alt=""
            className="w-full h-56 object-cover"
          />

          <img
            src="/images/r2r1.jpeg"
            alt=""
            className="w-full h-64 object-cover col-span-1"
          />

          <img
            src="/images/r2r2.jpg"
            alt=""
            className="w-full h-64 object-cover col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
