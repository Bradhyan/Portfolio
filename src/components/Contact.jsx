import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        
        {/* Contenedor tipo Glassmorphism para el contacto */}
        <div className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[40px] text-center overflow-hidden transition-all duration-500 hover:border-blue-500/30">
          
          {/* Resplandor de fondo interno */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-green-500/10 blur-[100px] rounded-full"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            ¿Listo para el siguiente <span className="text-blue-400">nivel?</span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Estoy abierto a oportunidades remotas, proyectos freelance y colaboraciones técnicas de alto impacto.
          </p>

          {/* Redes Sociales con estilo de botones de cristal */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: <Mail size={24} />, href: "mailto:giraldo_arenas@outlook.com", color: "hover:text-blue-400" },
              { icon: <Github size={24} />, href: "https://github.com/Bradhyan", color: "hover:text-white" },
              { icon: <Linkedin size={24} />, href: "#", color: "hover:text-blue-600" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Botón Principal Llamativo */}
          <a
            href="mailto:giraldo_arenas@outlook.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Enviar Email
            <Send size={20} />
          </a>

        </div>

        {/* Footer minimalista */}
        <footer className="mt-20 text-center text-slate-500 text-sm tracking-widest uppercase">
          © 2026 Bradhyan Giraldo — Built with Passion 
        </footer>
      </div>
    </section>
  );
}