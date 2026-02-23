import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Contacto
        </h2>

        <p className="text-slate-400 mb-12">
          Estoy abierto a oportunidades remotas, proyectos freelance y colaboraciones técnicas.
        </p>

        <div className="flex justify-center gap-8 text-slate-400 mb-12">

          <a
            href="mailto:giraldo_arenas@outlook.com"
            className="hover:text-white transition"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://github.com/Bradhyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={24} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={24} />
          </a>

        </div>

        <a
          href="mailto:giraldo_arenas@outlook.com"
          className="inline-block px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          Enviar Email
        </a>

      </div>
    </section>
  );
}