import Hero from "../components/Hero";
import AboutMeGrid from "@/components/AboutMeGrid";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import {FloatingNav} from "../components/ui/FloatingNavbar";
import { navItems } from "../../data";

export default function Home() {
  return (
    <main className="bg-black relative flex flex-col items-center overflow-clip justify-center mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
      <FloatingNav navItems={navItems} />
        <Hero />
        <div className="flex flex-col-reverse md:flex-col">
          <div>
            <h2 className="text-white text-4xl md:hidden text-center my-[40px] font-bold">Things About<span className="text-purple" > Me</span></h2>
            <AboutMeGrid />
          </div>
        
          <Projects />
        </div>
        
        <Footer />
      </div>
      
    </main>
  );
}
