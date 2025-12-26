import React from "react";
import Link from "next/link";

const JoinMtaHome = () => {
  return (
    <section className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1690540293132-73e060657503?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Join the Brotherhood?
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Become part of India&apos;s most disciplined and adventurous
          motorcycle touring community.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary CTA */}
          <Link href="/join-mta">
            <button className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300">
              Become a Member
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>

          {/* Secondary CTA */}
          <a href="tel:+919633505455">
            <button className="px-10 py-4 text-lg font-medium text-white border border-white/40 hover:bg-white hover:text-black transition-all duration-300">
              Call Us: +91 9633505455
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinMtaHome;
