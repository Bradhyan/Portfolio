"use client";
import useInView from "@/hooks/useInView";

export default function About() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] md:min-h-[55vh] py-15 px-6 md:px-20 overflow-hidden"
    >
      {/* 🧠 Contenido */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
          Who I Am
        </h2>

        <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
          I am a Fullstack Developer with a focus on building robust backend
          systems and scalable architectures. My approach integrates software
          development with solid foundations in infrastructure and Level 1
          Networking, allowing me to design efficient systems from the
          application layer down to the physical network
        </p>

        <p className="text-slate-400 leading-relaxed text-lg md:text-xl mt-8">
          I leverage modern technologies like Java, React, and Python, following
          industry best practices, version control, and cloud deployment to
          ensure high-performance and optimized system design
        </p>
      </div>
    </section>
  );
}
