import MotionHeader from "@/components/MotionHeader"
import NewsCard from "@/components/NewsCards/NewsCard"
import {newsPage} from "@/data/data"

const page = () => {
  return (
    <main className="containerpy-[150px] max-xl:py-[80px] max-md:py-[40px]">
       <MotionHeader>
          <p className="h1 max-w-[1200px] text-left text-mulish text-main font-bold">News</p>
        </MotionHeader> 
      <div className="container mt-[100px]">
        {
          newsPage.map(a => 
              <NewsCard news={a} key={a.id}/>
            ) 
        }
      </div> 
    </main>
  )
}

export default page