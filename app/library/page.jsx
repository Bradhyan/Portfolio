"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { snippets } from "@/data/Library/snippets.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function LibraryPage() {
  const [selected, setSelected] = useState(snippets[0]);

  return (
    // 1. Cambiamos h-screen por min-h-screen y eliminamos overflow-hidden del main
    <main className="relative min-h-screen w-full bg-[#0d1117] flex flex-col items-center">
      {/* 🎬 VIDEO DE FONDO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 blur-md"
        >
          <source src="/movies/Aurora.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 🌌 CONTENEDOR DE CONTENIDO - Usamos py-24 para dar espacio arriba y abajo */}
      <div className="relative z-10 w-full max-w-7xl px-2 md:px-10 py-24 flex flex-col items-center">
        {/* HEADER */}
        <header className="w-full max-w-6xl mb-12 text-left">
          <h1 className="text-6xl font-black text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] tracking-tight">
            Code Library
          </h1>
          <p className="text-gray-200 text-xl font-medium mt-2 opacity-95">
            Mi colección personal de componentes UI reutilizables.
          </p>
        </header>

        {/* 📦 EL CUADRO PRINCIPAL */}
        <section className="flex w-full max-w-6xl min-h-[700px] bg-black/60 backdrop-blur-[60px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl mb-20">
          {/* SIDEBAR */}
          <aside className="w-72 border-r border-white/10 bg-black/20 flex flex-col h-full">
            <div className="h-20 flex items-center px-8 border-b border-white/10 bg-white/5">
              {/* Cambiamos text-[10px] por text-xs o text-sm 
      Aumentamos tracking a widerrrr o [0.5em] para un look más moderno
    */}
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.5em]">
                Componentes
              </h3>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              {snippets.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`w-full text-left px-5 py-4 rounded-2xl mb-2 transition-all duration-300 text-sm font-medium flex items-center gap-3 ${
                    selected.id === item.id
                      ? "bg-blue-600 text-white shadow-lg translate-x-1"
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${selected.id === item.id ? "bg-white shadow-[0_0_8px_white]" : "bg-gray-600"}`}
                  />
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* MAIN - VISUALIZADOR */}
          <main className="flex-1 flex flex-col bg-transparent overflow-hidden">
            <div className="h-20 flex items-center justify-between px-10 border-b border-white/10 bg-white/5">
              <div>
                <p className="text-[9px] text-blue-400 font-bold uppercase tracking-widest leading-none mb-1.5">
                  {selected.category || "Snippet"}
                </p>
                <h2 className="text-2xl font-semibold text-white tracking-tight">
                  {selected.title}
                </h2>
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(selected.code)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg active:scale-95"
              >
                Copiar Código
              </button>
            </div>

            {/* ÁREA DE CÓDIGO - Importante: overflow-auto para scroll interno si el código es largo */}
            <div className="flex-1 overflow-auto p-12 custom-scrollbar bg-black/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <SyntaxHighlighter
                    language={selected.language}
                    style={atomDark}
                    customStyle={{
                      background: "transparent",
                      padding: "0",
                      fontSize: "1.05rem",
                      lineHeight: "1.8",
                    }}
                  >
                    {selected.code}
                  </SyntaxHighlighter>
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </section>
      </div>
    </main>
  );
}
