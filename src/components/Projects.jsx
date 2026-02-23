import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Proyecto 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

            <h3 className="text-xl font-semibold mb-3">
              Portfolio Personal
            </h3>

            <p className="text-slate-400 mb-5">
              Portfolio profesional desarrollado con Next.js y TailwindCSS,
              enfocado en mostrar proyectos fullstack e infraestructura.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 font-mono text-sm">
              <span className="bg-slate-800 px-3 py-1 rounded-lg">Next.js</span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg">Tailwind</span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg">Vercel</span>
            </div>

            <div className="flex gap-4 text-slate-400">
              <a href="#" target="_blank" className="hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-blue-400 transition">
                <ExternalLink size={20} />
              </a>
            </div>

          </div>

          {/* Proyecto 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition">

            <h3 className="text-xl font-semibold mb-3">
              Sistema de Gestión (En progreso)
            </h3>

            <p className="text-slate-400 mb-5">
              Aplicación fullstack orientada a backend escalable,
              con enfoque en arquitectura limpia y buenas prácticas.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 font-mono text-sm">
              <span className="bg-slate-800 px-3 py-1 rounded-lg">Java</span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg">React</span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg">Docker</span>
            </div>

            <div className="flex gap-4 text-slate-400">
              <a href="#" target="_blank" className="hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-green-400 transition">
                <ExternalLink size={20} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}