"use client"; // 🎯 ¡No olvides esto para que Motion funcione!
import { motion } from "framer-motion"; 
import Image from "next/image";

const ProjectCard = ({ title, description, link, githubUrl, image }) => (

        <div className="bg-[#0a0f1a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          
          {/* 🖼️ Contenedor de Imagen con el "Molde" Correcto */}
          {/* Definimos el alto del contenedor (ej: h-48) y usamos 'relative' para el fill */}
          <div className="relative w-full h-68 shrink-0 overflow-hidden bg-slate-800">
            <Image 
              src={image} // Tu ruta de imagen, ej: "/images/work.png"
              alt={title}
              fill // Ocupa el 100% de este contenedor
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimización Next.js
              className="object-cover object-center transition-transform duration-500 hover:scale-110" 
            />
            {/* Un degradado sutil opcional para suavizar la transición inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent opacity-60"></div>
          </div>
          
          {/* 📝 Contenedor de Texto y Botones (Separado de la imagen) */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
              {description}
            </p>
            
            {/* Contenedor de Botones alineados al fondo */}
            <div className="flex gap-3 mt-auto">
              <a href={link} target="_blank" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors">
                Ver Proyecto
              </a>
              <a href={githubUrl} target="_blank" className="flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-colors border border-white/5">
                Código Git
              </a>
            </div>
          </div>
        </div>
      );

export const projects = [

         {
    title: "App de Clima",
    description: "Consulta el clima en tiempo real usando OpenWeather API.",
    image: "/images/work2.png",
    link: "https://tu-clima.vercel.app",
    githubUrl:"https://github.com/Bradhyan",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Efecto cascada entre las cards
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function MiniProjects() {
  return (
   

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }} // 🎈 Se agranda un 3% y sube 5px
                whileTap={{ scale: 0.98 }} // 🖱️ Se hunde un poco al hacer clic
                transition={{ type: "spring", stiffness: 400, damping: 10 }} // Efecto rebote profesional
              >
                <ProjectCard {...proj} />
              </motion.div>
            ))}
          </motion.div>             
        
  );

}
