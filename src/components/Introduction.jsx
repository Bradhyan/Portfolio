"use client";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Introduction() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-10 md:px-24 overflow-hidden">
  

      {/* 🎬 Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/movies/Aurora.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🌑 Overlay oscuro para contraste */}
      <div className="absolute inset-0 z-10 bg-[#050b18]/75"></div>

      {/* 🧠 Contenido */}
   <div className="relative z-20 w-full max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 md:pl-16">
        {/* Texto */}
       <div className="space-y-6 max-w-lg md:ml-12 animate-text">

  <h1 className="text-5xl md:text-6xl font-bold text-white">
    Software{" "}
    <span className="bg-gradient-to-r from-blue-300 via-cyan-400 to-green-400 bg-clip-text text-transparent">
      Engineer
    </span>
  </h1>

  <p className="text-slate-300 text-lg leading-relaxed">
    Fullstack developer con mentalidad de arquitectura y experiencia en networking.
    Diseño y construyo sistemas escalables desde la aplicación hasta la infraestructura.
  </p>

  {/* BOTONES */}
  <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 translate-y-4 animate-buttons">

    <a
      href="#projects"
      className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 text-center"
    >
      Ver Proyectos
    </a>

    <a
      href="#contact"
      className="px-8 py-3 border border-slate-600 rounded-lg hover:border-green-400 transition text-center"
    >
      Contacto
    </a>

  </div>

</div>

        {/* Foto flotante */}
        <div className="flex justify-center md:justify-end items-center mt-12 md:mt-0 animate-image">
          <div className="relative mx-auto">

            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 to-green-400/20 blur-3xl rounded-full"></div>
            <Image
              src="/images/photo.png"
              alt="Brad Software Engineer"
              width={380}
              height={380}
             className="relative w-72 md:w-[380px] rounded-full border-slate-700 shadow-2xl object-cover"
            />

          </div>
        </div>

      </div>
{/* 🌐 Social Sidebar */}
{/* 🌐 Social Sidebar Minimal */}
<div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 opacity-0 -translate-x-4 animate-sidebar">

  <a
    href="#"
    className="text-slate-400 hover:text-white hover:scale-110 transition duration-300 text-xl"
  >
    <FaEnvelope />
  </a>

  <a
    href="#"
    className="text-slate-400 hover:text-white hover:scale-110 transition duration-300 text-xl"
  >
    <FaGithub />
  </a>

  <a
    href="#"
    className="text-slate-400 hover:text-white hover:scale-110 transition duration-300 text-xl"
  >
    <FaLinkedinIn />
  </a>

</div>

    </section>
  );
}