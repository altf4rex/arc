import { news } from "@/data/data"
import { ProjectCard } from "../ProjectCard/ProjectCard"


const MainNews = () => {
  return (
    <div  className="container mb-[350px] flex justify-between">
        {
            news.map((n) => 
                <ProjectCard project={n}/>
            )
        }
    </div>
  )
}

export default MainNews