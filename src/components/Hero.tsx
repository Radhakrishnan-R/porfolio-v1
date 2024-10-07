import { CiLocationArrow1 } from "react-icons/ci";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { FloatingNav } from "./ui/FloatingNavbar";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems, navItems } from "../../data";



const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <FloatingNav navItems={navItems} />
      <div>
       <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
       <Spotlight className="top:20 left-full h-[80vh] w-[74vw]" fill="purple" />
       <Spotlight className="top:40 left-80 w-[50vw]" fill="blue" />

       <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] relative flex pt-10 justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="w-full text-center max-w-3xl ">
            <h2 className="text-white uppercase tracking-widest">Harnessing the power of web tools</h2>
            <h1><TextGenerateEffect duration={1} words="Creating Experiences That Are Sharp, Sleek, and Unforgettable" /></h1>
            <h3 className="text-white text-lg mt-10 tracking-wider">Hi I'm Radhakrishnan, a Full-stack developer based in Bangalore.</h3>
            <MagicButton text="Donwload my Resume" icon={<CiLocationArrow1 />} iconPosition="right" className="mt-10"/>
          </div>
         
          </div>
          <BentoGrid>
            {gridItems.map((item, id) => (
              <BentoGridItem 
                key={id} 
                id={id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}

                />
            ))}
          </BentoGrid>
          
      </div>
      
      
    
    </div>
  )
}

export default Hero;