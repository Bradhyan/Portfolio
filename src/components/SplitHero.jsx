export default function SplitHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Fondo grid sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[28px_28px] opacity-20"></div>
      <div className="relative z-10 max-w-5xl text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Software Engineer
        </h1>

        <p className="mt-4 text-lg text-slate-400 font-mono">
          Java • React • Python • Infrastructure
        </p>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
          Fullstack developer con mentalidad de arquitectura y experiencia en networking. Construyo sistemas escalables y soluciones eficientes.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
          >
            Ver Proyectos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-600 rounded-lg hover:border-green-400 transition"
          >
            Contacto
          </a>
        </div>

      </div>
    </section>
  );
}