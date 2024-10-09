import { cn } from "@/lib/utils";
import Bgradient from "../Bgradient";
import {GlobeDemo} from "../GlobeDemo";
import { InfiniteMovingCards } from "./InfiniteMovingCard";
import { skills } from "../../../data";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
    imgClassName,
    titleClassName,
    img,
    spareImg,
    id,
}: {
    id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
    titleClassName?: string;
    img?: string;
    spareImg?: string;
  
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-between items-start space-y-4",
        className
      )}
    >

      {id === 5 && (
        <div>
          <Bgradient />
        </div>
        
      )}
      {id === 1 && (
        <div>
          <GlobeDemo />
        </div>
        
      )}
      {id === 2 && (
        <div>
          <InfiniteMovingCards skills={skills} />
        </div>
        
      )}

      
        <div className={`${id === 6 && 'flex justify-center'} 'h-full'`}>
        <div className="w-full h-full absolute">
            {img && 
            <img 
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
            />}
        </div>
        </div>
        <div className={`absolute right-4 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
        
            {spareImg && 
            <img 
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center"
            />}
        
        </div>
        
       
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">

          <div className={`${id === 1 && 'justify-start'} p-4 flex flex-col relative md:bottom-10 md:left-5 z-10`}>
      <div className={`font-sans md:text-2xl text-lg lg:max-w-[400px] max-w-[300px] font-bold text-neutral-600 dark:text-neutral-200  ${titleClassName}`}>
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
        
       
      </div>
    </div>
  );
};
