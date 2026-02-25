"use client";
import Image from "next/image";
import useInView from "@/hooks/useInView";

export default function About() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Sobre mí
        </h2>

        <p className="text-slate-400 leading-relaxed text-lg">
          Soy desarrollador fullstack con experiencia en backend robusto y
          arquitecturas escalables. Mi enfoque combina desarrollo de software
          con fundamentos sólidos en infraestructura y networking, lo que me
          permite construir sistemas eficientes desde la aplicación hasta la red.
        </p>

        <p className="text-slate-400 leading-relaxed text-lg mt-6">
          Trabajo con tecnologías modernas como Java, React y Python,
          aplicando buenas prácticas, control de versiones y despliegue en la nube.
          Me interesa especialmente el diseño de sistemas y la optimización de rendimiento.
        </p>

      </div>
    </section>

  );
}