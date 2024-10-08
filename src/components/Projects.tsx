

import { PinContainer } from "./ui/AnimatedPinCard";
import { projects } from "../../data";


const Projects = () => {
  return (
    <section id="projects" className="py-20">
        <h2 className="text-white text-4xl text-center font-bold">A Small Section of my recent projects</h2>
        <div className="w-full flex items-center border-2 py-10 justify-around">
            {projects.slice(0,2).map((item) => (
                 <PinContainer
                 title={item.title}
                 href={item.link}
                 key={item.id}
                 className="border-2 w-[30rem]"
               >
                <div className="">
                    <h2 className="">{item.title}</h2>
                    <p className="">{item.des}</p>
                    <div className="">
                        <img 
                        src={item.img}
                        alt={item.title}
                        className=""
                        />
                    </div>
                </div>



                 {/* <div className="flex basis-full flex-col gap-4 p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[35rem] md:h-[25rem] w-[30rem] h-[20rem] ">
                   <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                     {item.title}
                   </h3>
                   <div className="text-base !m-0 !p-0 font-normal my-4">
                     <span className="text-slate-500 ">
                       {item.des}
                     </span>
                   </div>
                   <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                   <div>
                        <img 
                        alt={item.title}
                        src={item.img}
                        />
                   </div>
                 </div> */}
               </PinContainer>
               
             
            ))}
            </div>
        
        
        
    </section>
  )
}

export default Projects;