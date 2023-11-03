import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import {filter} from "@/constants";
import {project} from "@/data/data";

const page = () => {
  return (
    <main className="mt-[150px] ml-[60px] mr-[30px]">
        <h1 className="text-5xl text-left text-mulish text-main font-bold">Projects</h1>
        <ul className="mt-[92px] flex">
            {
              filter.map((f) => 
                <li className="mr-16 text-base text-sans text-main font-normal hover:text-primaryHover">{f}</li>
              )
            }
        </ul>
        <div className="mt-[52px] max-w-[1920px] flex flex-wrap justify-start"> 
            {
              project.map((p) => 
                <div key={p.id} className="mr-[27px] mb-[30px]">
                  <ProjectCard project={p}/>
                </div>
              )
            }
        </div>
    </main>
  )
}

export default page