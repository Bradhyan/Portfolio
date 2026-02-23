import SplitHero from "@/components/SplitHero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/Techstack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0b1120] text-slate-200">
     <SplitHero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}