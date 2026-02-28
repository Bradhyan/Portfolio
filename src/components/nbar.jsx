"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Necesitas instalar react-icons
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
  <Link
    href="/"
    className="flex items-center gap-3 text-white font-bold text-lg md:text-xl tracking-wider group"
  >
    {/* Contenedor del logo para asegurar que no se deforme */}
    <div className="relative w-15 h-15 md:w-17 md:h-17"> {/* Subimos de 10 a 12/14 */}
  <Image
    src="/images/logosinfondo.png"
    alt="Logo Bradhyan Giraldo"
    fill
    priority
    className="object-contain hover:scale-130 transition-transform duration-300"
  />
</div>
    {/* Nombres con Flex Col para que se vean bien alineados al logo */}
    <div className="flex flex-col justify-center leading-tight">
      <span className="md:hidden">BGA</span>
      <span className="hidden md:block">Bradhyan Giraldo Arenas</span>
      <span className="text-[10px] text-blue-400 font-mono uppercase tracking-[0.2em] hidden md:block">
       
      </span>
    </div>
  </Link>
</div>

          {/* MENÚ ESCRITORIO (Se oculta en móvil) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#inicio"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                href="#projects"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Proyectos
              </Link>
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-all"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 animate-fadeDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium w-full text-center"
            >
              Inicio
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium w-full text-center"
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-blue-400 font-bold block px-3 py-4 text-lg w-full text-center"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
