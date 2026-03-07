"use client"; // 🎯 ¡No olvides esto para que Motion funcione!
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectsCard";
import { projects } from "@/data/miniProjects";

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
    <div className="relative min-h-screen w-full bg-[#050b18]">
      {/* 🎬 VIDEO DE FONDO */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/movies/Aurora.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🌌 CONTENIDO  */}
      <section className="relative z-10 py-20 px-6 backdrop-blur-md bg-black/40 border">
        <div className="max-w-6xl mx-auto  bg-transparent  rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Small <span className="text-blue-400">Tool</span> Projects
          </h2>

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
        </div>
      </section>
    </div>
  );
}
