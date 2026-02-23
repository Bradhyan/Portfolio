export default function TechStack() {

  const stack = [
    {
      category: "Backend",
      technologies: ["Java (Spring)", "Node.js", "Python", "REST APIs"]
    },
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TailwindCSS", "HTML/CSS"]
    },
    {
      category: "DevOps / Tools",
      technologies: ["Git", "Docker", "Vercel", "Linux"]
    },
    {
      category: "Networking",
      technologies: ["TCP/IP", "Routing", "Subnetting", "Infrastructure"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stack.map((group, index) => (
            <div key={index}>

              <h3 className="text-lg font-semibold mb-6 text-blue-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-slate-300 font-mono text-sm px-3 py-2 rounded-lg border border-slate-700 hover:border-green-400 transition"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}