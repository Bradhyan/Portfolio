// src/data/projectsData.js
export const featuredProjects = [
{
    id: 1,
    title: "Personal Portfolio",
    isPrivate: false,
    label: "personal", 
    description: "Professional portfolio developed with Next.js and TailwindCSS...",
    challenge: "I need a space where I can present my profile and showcase some projects, thereby demonstrating my development capabilities.",
    solution: "A modern portfolio was developed showcasing strong experience in full-stack development. Featuring a sleek, dark-themed user interface built with Next.js and Tailwind CSS, this site stands out for its scalable, easily maintainable architecture. It serves as a platform for hosting other smaller, previously deployed projects and did not require a database.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    color: "hover:border-blue-500/50",
    glow: "group-hover:bg-blue-500/10",
    image: "/images/Portfollioo.png",
    link: "https://portfolio-six-pi-awsyiis70j.vercel.app/", 
    github: "https://github.com/Bradhyan/Portfolio" 
  },
    {
    id: 2,
    title: "Management and control",
    isPrivate: true, 
    label: "privado",
    description: "Management and control application in the project development roadmap and dashboards in ITS Analytics.",
    challenge: "Sincronizar datos masivos en tiempo real...",
    solution: "Arquitectura de microservicios con Spring Boot...",
    tags: ["Java", "React", "Docker"],
    color: "hover:border-green-500/50",
    glow: "group-hover:bg-green-500/10",
    image: "/images/work3.png",
    link: null, 
    github: null 
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    isPrivate: true, 
    label: "Empresarial",
    description: "Scalable backend-oriented full-stack application...",
    challenge: "Sincronizar datos masivos en tiempo real...",
    solution: "Arquitectura de microservicios con Spring Boot...",
    tags: ["Java", "React", "Docker"],
    color: "hover:border-green-500/50",
    glow: "group-hover:bg-green-500/10",
    image: "/images/work4.png",
    link: null,
    github: null 
  },

];