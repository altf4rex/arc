import { news } from "@/data/data"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import ButtonLink from "../ButtonLink"


const MainNews = () => {
  return (
    <section className="container mt-[216px]">
      <div className="flex justify-between text-center">
      <h2 className="text-5xl text-left font-bold text-mulish text-main">
      Latest news
      </h2>
      <ButtonLink slug={"/news"} text={"View all news"}/>
      </div>
    <div className="mt-[69px] flex justify-between">
        {
            news.map((n) => 
                <ProjectCard project={n}/>
            )
        }
    </div>
    </section>
  )
}

export default MainNews