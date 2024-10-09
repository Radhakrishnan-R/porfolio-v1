import { gridItems } from "../../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";


const AboutMeGrid = () => {
  return (
    <section id="About">
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
    </section>
  )
}

export default AboutMeGrid;