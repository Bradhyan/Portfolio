import { Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Portfolio profesional desarrollado con Next.js y TailwindCSS, enfocado en mostrar proyectos fullstack e infraestructura.",
      tags: ["Next.js", "Tailwind", "Vercel"],
      color: "hover:border-blue-500/50",
      glow: "group-hover:bg-blue-500/10",
      link: "#",
      github: "#"
    },
    {
      title: "Sistema de Gestión",
      description: "Aplicación fullstack orientada a backend escalable, con enfoque en arquitectura limpia y buenas prácticas de ingeniería.",
      tags: ["Java", "React", "Docker"],
      color: "hover:border-green-500/50",
      glow: "group-hover:bg-green-500/10",
      link: "#",
      github: "#"
    },
    {
      title: "Infraestructura Cloud",
      description: "Diseño y despliegue de arquitecturas resilientes utilizando servicios de AWS y automatización con Terraform (IaC).",
      tags: ["AWS", "Terraform", "Nginx"],
      color: "hover:border-purple-500/50",
      glow: "group-hover:bg-purple-500/10",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${project.color} overflow-hidden`}
            >
              {/* Efecto de resplandor interno al hacer hover */}
              <div className={`absolute inset-0 transition-colors duration-500 ${project.glow} -z-10`}></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-blue-400">
                  <Code2 size={24} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}