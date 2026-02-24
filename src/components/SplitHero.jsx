import Image from "next/image";

export default function SplitHero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-8 relative overflow-hidden">

      {/* Lado izquierdo */}
      <div className="space-y-6 z-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Software Engineer
        </h1>

        <p className="text-slate-400 font-mono">
          Java • React • Python • Infrastructure
        </p>

        <p className="text-slate-400 max-w-xl">
          Fullstack developer con mentalidad de arquitectura y experiencia en networking.
          Construyo sistemas escalables y soluciones eficientes.
        </p>

        <div className="flex gap-4">
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

      {/* Lado derecho */}
      <div className="flex justify-center mt-12 md:mt-0">
        <Image
          src="/images/profile-tech.png"
          alt="Brad Software Engineer"
          width={450}
          height={450}
          className="rounded-2xl shadow-2xl"
          priority
        />
      </div>

    </section>
  );
}