import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/Techstack";
import Contact from "@/components/Contact";
import Navbar from "@/components/nbar";

export default function Home() {
  return (
    <main className="bg-[#0b1120] text-slate-200">
     <Navbar />
     <Introduction />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}