import MotionHeader from "@/components/MotionHeader";
import ProjectFilter from "@/components/ProjectPage/ProjectFilter";
import Projects from "@/components/ProjectPage/Projects";
import {filter} from "@/constants";
import {project} from "@/data/data";

const page = () => {
  return (
    <main className="pt-[150px] max-xl:pt-[80px] max-md:pt-[40px] ml-[60px] mr-[30px] max-sm:ml-[10px] max-sm:mr-[10px]">
      <div className="container">
        <MotionHeader>
          <p className="h1 max-w-[1200px] text-left text-mulish text-main font-bold">Projects</p>
        </MotionHeader>
        <ProjectFilter filter={filter} />
      </div>
      <Projects project={project}/> 
    </main>
  )
}

export default page