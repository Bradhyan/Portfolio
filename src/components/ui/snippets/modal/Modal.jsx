// Componente ProjectDetailsModal.jsx
import { Github, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Modal({ project, onClose }) {
  // 👈 'project'
  if (!project) return null; // 🛡️ Guardia extra de seguridad
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[#0a0f1a] border border-white/20 w-full max-w-5xl rounded-3xl overflow-hidden flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al clickear dentro
      >
        {/* ❌ Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white z-10 text-2xl"
        >
          ✕
        </button>

        {/* 🖼️ Lado Izquierdo: Captura Principal */}
        <div className="md:w-1/2 relative min-h-[300px] bg-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* 📝 Lado Derecho: Información Ampliada */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h2>

            <div className="space-y-4 text-slate-300">
              <p>
                <strong>El Reto:</strong> {project.challenge}
              </p>
              <p>
                <strong>Solución:</strong> {project.solution}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 🔘 Botones de Acción */}
          <div className="flex gap-4 mt-8">
            {/* 🔗 Botón de Demo/Proyecto */}
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors font-bold"
              >
                <ExternalLink size={18} /> Ver Proyecto
              </a>
            )}

            {/* 🔗 Botón de GitHub */}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors font-bold border border-white/10"
              >
                <Github size={18} /> Código Git
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
