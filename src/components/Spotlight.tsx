import React from "react";

function Spotlight() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1762178103168-58472e27126e?q=80&w=2342&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <h1 className="font-bold leading-tight text-[clamp(2.5rem,6vw,5rem)]">
          Brotherhood of <br />
          <span className="text-red-600">The Highways</span>
        </h1>

        <p className="mt-4 text-[clamp(1rem,2.5vw,1.25rem)] text-gray-200">
          India&apos;s elite long-distance motorcycling community.
          <br className="hidden sm:block" />
          Discipline. Endurance. Adventure.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <button className="group flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
            Join MTA
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Secondary CTA */}
          <button className="bg-white hover:bg-gray-100 text-black px-8 sm:px-10 py-4 text-base sm:text-lg font-medium transition-colors duration-300 w-full sm:w-auto">
            Explore Rides
          </button>
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
