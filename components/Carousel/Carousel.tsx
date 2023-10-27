import { carouselProjects } from "@/data/data";
import CarouselButton from "./CarouselButton";
import CarouselMainFrame from "./CarouselMainFrame";



const Carousel = () => {
  return (
    <div className="flex w-max relative">
     {carouselProjects.map((p) => (  
        <CarouselMainFrame project={p} key={p.id} />
      ))}
      <div className="flex absolute bottom-0 right-0 bg-mainBg">
      {carouselProjects.map((p, i) => (
        <CarouselButton 
          key={p.id} 
          projectId={p.id} 
          projectName={p.name}  
          index={i} 
        />
      ))}
      </div>
    </div>
  );
};

export default Carousel






