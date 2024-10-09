

import { PinContainer } from "./ui/AnimatedPinCard";
import { projects } from "../../data";


const Projects = () => {
  return (
    <section id="projects" className="py-28 max-sm:pb-0">
        <h2 className="text-white text-4xl text-center mb-18 font-bold">A Small Section of my <span className="text-purple" >recent projects</span></h2>
        <div className="w-full flex flex-wrap items-center my-20 gap-10 justify-center lg:justify-around">
            {projects.slice(0,2).map((item) => (
                 <PinContainer
                 title={item.title}
                 href={item.link}
                 key={item.id}
                 className="lg:w-[26rem] xl:w-[30rem] w-[320px] md:w-[380px]"
                 containerClassName="my-10"
                 
               >
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-medium text-white">{item.title}</h2>
                    <div className="flex flex-wrap">
                      {item.iconLists.map((item, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-[1px] border-slate-500 p-2">
                        <img 
                          src={item}
                          alt={item}
                          className="w-full h-full"
                        />
                        </div>
                        
                      ))}
                    </div>
                    <p className="text-sm text-slate-100">{item.des}</p>
                    <div className="">
                        <img 
                        src={item.img}
                        alt={item.title}
                        className="w-full object-contain object-center"
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