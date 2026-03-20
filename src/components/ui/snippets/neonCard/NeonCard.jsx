import { Cpu, Globe, Layout, Settings, Sparkles } from "lucide-react";

export default function NeonCard() {
  const stack = [
    { category: "Backend", icon: <Cpu className="text-blue-400" size={20} />, technologies: ["Java (Spring)", "Node.js", "Python", "REST APIs"] },
   
  ];

  return (
    

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stack.map((group, index) => (
            <div key={index} className="group relative">
              
              {/* ✨ CAPA NEÓN (Detrás de la card) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></div>

              {/* 🎴 LA CARD PRINCIPAL */}
              <div className="relative h-full bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl transition-all duration-300 group-hover:bg-[#0a0f1a]/90">
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-green-400/50 transition-all duration-300">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="relative bg-white/5 text-slate-300 font-mono text-xs px-4 py-2 rounded-xl border border-white/5 hover:border-green-400/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      
  );
}
