import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="bg-black relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
      
    </main>
  );
}
