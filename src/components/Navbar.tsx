import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    label: "Who we are?",
    submenu: [
      { href: "/about-us", label: "About us" },
      { href: "/members", label: "Members" },
    ],
  },
  {
    label: "What we do?",
    submenu: [
      { href: "/rides", label: "Rides" },
      { href: "/events", label: "Events" },
    ],
  },
  {
    label: "Community",
    submenu: [
      { href: "/forum", label: "Forum" },
      { href: "/community-wall", label: "Community Wall" },
      { href: "/blogs", label: "Blogs" },
      { href: "/calendar", label: "Calendar" },
    ],
  },

  { href: "/shop", label: "Shop" },
  // { href: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-sm sticky top-0 z-30">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <span className="relative w-12 h-12 md:w-[56px] md:h-[56px]">
                <Image
                  src="/MTA LOGO.png"
                  alt="MTA Logo"
                  fill
                  sizes="(max-width: 768px) 40px, 56px"
                  className="object-contain"
                />
              </span>
              <div className="ml-3 hidden md:block">
                <h1 className="text-lg md:text-2xl font-bold leading-tight text-nowrap">
                  Motorcycle Tourers Association
                </h1>
              </div>
            </Link>
          </div>

          {/* Right side: nav / actions */}
          <nav className="hidden md:flex items-center gap-2">
            {/* primary links */}
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.submenu ? (
                  <li key={link.label} className="relative group">
                    <button
                      type="button"
                      className="px-4 py-2 text-gray-700 font-semibold hover:text-white text-nowrap"
                    >
                      {link.label}
                    </button>

                    {/* simple dropdown on hover */}
                    <ul className="absolute hidden group-hover:block top-full left-0  w-48 bg-black shadow-md z-20 py-2">
                      {link.submenu.map((s) => (
                        <li key={s.href} className="px-3 py-1 ">
                          <Link
                            href={s.href}
                            className="block text-gray-700 hover:text-white"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={(link.href || link.label) as string}>
                    <Link href={link.href as string}>
                      <button className="px-4 py-2 text-gray-700 font-semibold hover:text-white">
                        {link.label}
                      </button>
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* account button */}
            <div className="ml-2">
              <Link href="/account">
                <button className="px-4 py-2 rounded-md   text-sm font-medium hover:bg-gray-800">
                  <User />
                </button>
              </Link>
            </div>
          </nav>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <div className="font-semibold px-2 py-2">{link.label}</div>
                  {link.submenu.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                    >
                      <div className="px-4 py-2 text-gray-700">{s.label}</div>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={(link.href || link.label) as string}
                  href={link.href as string}
                  onClick={() => setOpen(false)}
                >
                  <div className="px-4 py-2 text-gray-700 font-medium">
                    {link.label}
                  </div>
                </Link>
              )
            )}

            <div className="pt-2">
              <Link href="/account" onClick={() => setOpen(false)}>
                <div className="px-4 py-2 rounded-md border border-gray-200 text-sm text-center">
                  Account
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
