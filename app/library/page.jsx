"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { snippets } from "@/data/Library/snippets.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function LibraryPage() {
  const [selected, setSelected] = useState(snippets[0]);
  const Component = selected.component;

  return (
    <main className="relative min-h-screen w-full bg-[#0d1117] flex flex-col items-center">

      {/* VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 blur-lg">
          <source src="/movies/Aurora.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 py-16 md:py-24">

        {/* HEADER */}
        <header className="mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Code Library
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-2">
            Mi colección personal de componentes UI reutilizables.
          </p>
        </header>

        {/* CONTENEDOR PRINCIPAL */}
        <section className="
          grid
          grid-cols-1
          lg:grid-cols-[260px_1fr]
          min-h-[600px]
          bg-black/60
          backdrop-blur-[50px]
          rounded-3xl
          overflow-hidden
          border border-white/10
          shadow-2xl
        ">

          {/* SIDEBAR */}
          <aside className="border-b lg:border-b-0 lg:border-r border-white/10 bg-black/30">

            <div className="h-16 flex items-center px-6 border-b border-white/10 bg-white/5">
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.35em]">
                Componentes
              </h3>
            </div>

            <nav className="p-4 space-y-2 max-h-[300px] lg:max-h-none overflow-auto">

              {snippets.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm flex items-center gap-3
                  ${
                    selected.id === item.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      selected.id === item.id ? "bg-white" : "bg-gray-600"
                    }`}
                  />
                  {item.title}
                </button>
              ))}

            </nav>
          </aside>

          {/* MAIN */}
          <main className="flex flex-col">

            {/* HEADER DEL SNIPPET */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 md:px-10 h-auto sm:h-16 py-4 border-b border-white/10 bg-white/5">

              <div>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                  {selected.category || "Snippet"}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {selected.title}
                </h2>
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(selected.code)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all"
              >
                Copiar Código
              </button>

            </div>

            {/* CÓDIGO */}
            {/* PREVIEW + CODE */}
<div className="flex-1 flex flex-col bg-black/10">

  {/* PREVIEW */}
  <div className="p-6 md:p-10 border-b border-white/10">
    <div className="border border-white/10 rounded-xl bg-black p-4">

      <div className="w-full">
        {Component && <Component preview />}
      </div>

    </div>
  </div>

  {/* CODE AREA */}
  <div className="flex-1 overflow-auto p-6 md:p-10 custom-scrollbar">
    <AnimatePresence mode="wait">
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        <SyntaxHighlighter
          language={selected.language}
          style={atomDark}
          customStyle={{
            background: "transparent",
            padding: "0",
            fontSize: "0.95rem",
            lineHeight: "1.7",
          }}
        >
          {selected.code}
        </SyntaxHighlighter>
      </motion.div>
    </AnimatePresence>
  </div>



           </div>

          </main>

        </section>

      </div>
    </main>
  );
}