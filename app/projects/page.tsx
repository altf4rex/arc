import MotionHeader from "@/components/MotionHeader";
import ProjectFilter from "@/components/ProjectPage/ProjectFilter";
import Projects from "@/components/ProjectPage/Projects";
import {filter} from "@/constants";
import {project} from "@/data/data";

const page = () => {
  return (
    <main className="mt-[150px] ml-[60px] mr-[30px]">
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