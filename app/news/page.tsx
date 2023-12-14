
import MotionHeader from "@/components/MotionHeader"
import NewsCard from "@/components/NewsCards/NewsCard"
import {architectureNews} from "@/data/data"


const page = () => {
  return (
    <main className="container py-[150px] max-xl:py-[80px] max-md:py-[40px]">
       <MotionHeader>
          <p className="h1 max-w-[1200px] text-left text-mulish text-main font-bold">News</p>
        </MotionHeader> 
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