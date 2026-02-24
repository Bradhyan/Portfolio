"use client";
import Image from "next/image";

export default function SplitHero() {
  return (
    <section className="relative min-h-screen grid md:grid-cols-2 items-center px-8 overflow-hidden"
    >

      {/* Background Image */}
<div className="absolute inset-0 -z-10">

  {/* Imagen tech */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{ backgroundImage: "url('/images/tech-bg.jpg')" }}
  />

  {/* Degradado oscuro lateral */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/90 to-[#0b1120]/70" />

  {/* Viñeta radial */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0b1120_90%)]" />

</div>

      {/* Left Side */}
      <div className="relative z-10 space-y-8 animate-fadeLeft">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-white">Software</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Engineer
          </span>
        </h1>

        <p className="text-slate-200 font-mono text-lg">
          Building Scalable Systems with Java, React & Infrastructure
        </p>

        <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
          Fullstack developer con mentalidad de arquitectura y experiencia en networking.
          Diseño y construyo sistemas escalables desde la aplicación hasta la infraestructura.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            Ver Proyectos
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 rounded-lg hover:border-green-400 transition"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex justify-center mt-16 md:mt-0 animate-fadeRight">

        <div className="relative">

          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-2xl rounded-3xl"></div>

          <Image
            src="/images/profile-tech.png"
            alt="Brad Software Engineer"
            width={450}
            height={450}
            className="relative rounded-3xl shadow-2xl border border-slate-700"
            priority
          />

        </div>
      </div>

    </section>
  );
}