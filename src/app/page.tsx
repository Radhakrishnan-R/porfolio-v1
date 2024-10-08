import Image from "next/image";
import Hero from "../components/Hero";
import AboutMeGrid from "@/components/AboutMeGrid";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-black relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <Hero />
        <AboutMeGrid />
        <Projects />
      </div>
      
    </main>
  );
}
