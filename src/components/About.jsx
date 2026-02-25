"use client";
import useInView from "@/hooks/useInView";

export default function About() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* 🎬 Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="opacity-40 blur-sm"
        >
          <source src="/movies/Aurora.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🌑 Overlay para contraste */}
      <div className="absolute inset-0 z-10 bg-[#050b18]/80"></div>

      {/* 🧠 Contenido */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
          Sobre mí
        </h2>

        <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
          Soy desarrollador fullstack con experiencia en backend robusto y
          arquitecturas escalables. Mi enfoque combina desarrollo de software
          con fundamentos sólidos en infraestructura y networking, lo que me
          permite construir sistemas eficientes desde la aplicación hasta la red.
        </p>

        <p className="text-slate-400 leading-relaxed text-lg md:text-xl mt-8">
          Trabajo con tecnologías modernas como Java, React y Python,
          aplicando buenas prácticas, control de versiones y despliegue en la nube.
          Me interesa especialmente el diseño de sistemas y la optimización de rendimiento.
        </p>
      </div>
    </section>
  );
}