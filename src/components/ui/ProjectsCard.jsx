// En src/components/ui/ProjectCard.jsx
export default function ProjectCard({ title, description, link, githubUrl }) {
  return (
  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[5px_5px_15px_rgba(37,99,235,0.3)]">
      {/* 🖼️ Reducimos la altura de la imagen para que la card no sea tan larga */}
      <div className="h-60 bg-slate-800 w-full flex items-center justify-center">
        <span className="text-slate-500 text-xs">Preview</span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{title}</h3>
        <p className="text-slate-400 text-xs my-2 line-clamp-2">
          {description}
        </p>
        <div className="p-4">
    
      
      {/* 🎯 Contenedor de Botones con Flexbox (gap-3 los separa) */}
      <div className="flex gap-3 mt-4">
        <a 
          href={link} 
          target="_blank" 
          className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg transition-colors flex-1 text-center"
        >
          Ver Proyecto
        </a>
        <a 
          href={githubUrl} 
          target="_blank" 
          className="text-xs font-semibold text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-1.5 rounded-lg transition-colors flex-1 text-center"
        >
          Código Git
        </a>
      </div>
    </div>
      </div>
    </div>
  );
}