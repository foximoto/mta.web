/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6">MTA</h3>
          <p className="text-gray-400 leading-relaxed">
            India&apos;s premier motorcycle touring association dedicated to
            long-distance riding, safety, and brotherhood.
          </p>

          <div className="flex gap-4 mt-6 opacity-70">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link href="/about">About MTA</Link>
            </li>
            <li>
              <Link href="/rides">Rides & Events</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/forum">Forum</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/membership">Membership</Link>
            </li>
            <li>
              <Link href="/blog">Blog & Resources</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <span className="text-red-500">📍</span>
              Motorcycle Tourers Association <br /> 9/953D, Sajas Sameer
              Building <br /> K.P Kesava Menon Road <br /> Poovalappu <br />{" "}
              Calicut, Kerala <br />
              PIN:673001
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">📞</span>
              +91 98765 43210
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✉️</span>
              info@mtaindia.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for ride updates and touring tips.
          </p>

          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 text-white mb-4 focus:outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
        <span>
          Developed and Maintained by{" "}
          <a href="#" className="text-red-700">
            foximoto
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
