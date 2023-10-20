import { mainProjects } from "@/data/data";
import Image from "next/image";

const MainProjects = () => {
    return (
      <div className="flex">
        {mainProjects.map((project) => (
          <div key={project.id} className="project-container">
            {project.verticalImage && (
              <div className="vertical-image-container">
                <Image
                  src={project.verticalImage.src}
                  alt="project"
                  width={project.verticalImage.width}
                  height={project.verticalImage.height}
                />
              </div>
            )}
            {project.squareImages && (
              <div className="horizontal-image-container">
              <Image
                src={project.squareImages.src}
                alt="project"
                width={project.squareImages.width}
                height={project.squareImages.height}
              />
            </div>
            )}
            {project.horizontalImage && (
              <div className="horizontal-image-container">
                <Image
                  src={project.horizontalImage.src}
                  alt="project"
                  width={project.horizontalImage.width}
                  height={project.horizontalImage.height}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default MainProjects;