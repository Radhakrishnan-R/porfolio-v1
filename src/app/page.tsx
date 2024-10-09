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
        <AboutMeGrid />
        <Projects />
        <Footer />
      </div>
      
    </main>
  );
}
