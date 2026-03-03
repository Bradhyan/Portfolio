import ProjectCard from "@/components/ui/ProjectsCard";
import { projects } from "@/data/miniProjects"; // Si decides mover el array a otro archivo



export default function MiniProjects() {
  return (
    

    <div className="relative min-h-screen w-full backdrop-blur-lg bg-[#050b18]/20 ">
      
      {/* 🎬 VIDEO DE FONDO GLOBAL */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60" // Ajusta la opacidad del video aquí
        >
          <source src="/movies/Aurora.mp4" type="video/mp4" />
        </video>
      </div>

    <section className="py-20 px-6 bg-[#050b18]">
      <div className="max-w-6xl mx-auto relative backdrop-blur-md bg-black/60 border border-white/20 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          small <span className="text-blue-400"> tool </span> <span className="text-blue-530">projects</span>
        </h2>

        {/* 🧩 El Grid que dibujaste (Naranja en tu boceto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
         {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} /> 
      ))}


        </div>
      </div>
    </section>
    </div>
   
  );
}