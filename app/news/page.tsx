import AnimeHeader from "@/components/AnimeHeader"
import NewsCard from "@/components/NewsCards/NewsCard"
import {architectureNews} from "@/data/data"


const page = () => {
  return (
    <main className="container my-[150px]">
      <AnimeHeader header={"News"}/>
      <div className="mt-[100px]">
        {
          architectureNews.map(a => 
              <NewsCard news={a}/>
            ) 
        }
      </div> 
    </main>
  )
}

export default page