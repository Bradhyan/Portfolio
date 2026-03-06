"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import ProjectDetailsModal from "../ui/ProjectDetailsModal"; 
import { featuredProjects } from "../../data/projectsData"; 


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🎯 Si la sección ya no es visible en pantalla, cerramos el modal
        if (!entry.isIntersecting) {
          setSelectedProject(null);
        }
      },
      { threshold: 0.1 } // Se activa cuando solo queda el 10% de la sección visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef}id="projects" className="py-15 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>

        {/* 🎯 GRID ÚNICO: Aquí solo debe haber un .map */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => ( // 👈 Usamos solo los datos nuevos
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${project.color} overflow-hidden`}
            >
              <div className={`absolute inset-0 transition-colors duration-500 ${project.glow} -z-10`}></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-blue-400">
                  <Code2 size={24} />
                </div>
                
                {/* Lógica de Etiqueta vs Iconos que ya funciona en las nuevas cards */}
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                  {project.isPrivate ? (
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full backdrop-blur-md">
                      {project.label || "Privado"}
                    </span>
                  ) : (
                    <>
                      <a href={project.github} className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10">
                        <Github size={18} />
                      </a>
                      <a href={project.link} className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10">
                        <ExternalLink size={18} />
                      </a>
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {/* 🛡️ El optional chaining para evitar el error de la captura image_8b6264.png */}
                {project.tags?.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailsModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}