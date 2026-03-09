// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Introduction from "@/components/Sections/Introduction";
import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import TechStack from "@/components/Sections/Techstack";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#050b18]">

      
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

      {/* 🧭 NAVBAR (Encima de todo) */}
      <Navbar /> 

 

      {/* 🧩 CONTENEDOR DE SECCIONES */}
      <div className="relative z-10 w-full">
        
        {/* SECCIÓN 1: Introduction */}
        <section className="relative backdrop-blur-lg bg-black/40  transition-all duration-700">
          <Introduction />
        </section>

        {/* SECCIÓN 2: About */}
        <section className="relative backdrop-blur-lg bg-black/85 transition-all duration-700">
          <About />
        </section>

        {/* SECCIÓN 3: Projects */}
        <section className="relative backdrop-blur-lg bg-black/40 transition-all duration-700">
          <Projects />
        </section>

        {/* SECCIÓN 4: TechStack */}
        <section className="relative backdrop-blur-lg bg-black/85 transition-all duration-700">
          <TechStack />
        </section>

        {/* SECCIÓN 5: Contact */}
        <section className="relative backdrop-blur-lg bg-black/40 transition-all duration-700">
          <Contact />
        </section>

      </div>
      </div>
    
  );
}