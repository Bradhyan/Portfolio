"use client";

import Link from "next/link";

export default function LightNavbar({ preview = false }) {

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Blog", href: "/" }
  ];

  return (
    <nav
      className={`w-full border-b border-gray-200 bg-white ${
        preview ? "" : "fixed top-0 left-0 z-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="text-lg font-bold text-gray-900">
            MyBrand
          </div>

          {/* LINKS */}
          <div className="flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-black text-sm font-medium transition"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              Contact
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}