"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function BaseNavbar({
  preview = false,
  brand = "name",
  links = [
    { name: "inicio", href: "/" },
    { name: "abouts", href: "/" }
  ]
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
  className={`w-full bg-black/80 backdrop-blur-xl border-b border-white/10 ${
    preview ? "" : "fixed top-0 left-0 z-50"
  }`}
>
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          preview ? "max-w-full" : "max-w-7xl"
        }`}
      >
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white font-bold text-lg tracking-wide"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logosinfondo.png"
                alt="Logo"
                fill
                priority
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>

            <span className="hidden md:block">{brand}</span>
            <span className="md:hidden">BGA</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center py-4 space-y-4">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-base"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-blue-400 font-semibold"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}