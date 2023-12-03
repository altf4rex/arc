
import { architectureNews } from "@/data/data";
import MotionImage from "@/components/MotionImage";
import MotionHeader from "@/components/MotionHeader";
import MotionText from "@/components/MotionText";
import MediaLinks from "@/components/MediaLinks";

export default function Page({ params }: { params: { news: string } }) {
  let news = architectureNews.filter((a) => a.slug === `/news/${params.news}`)[0];
  
  return (
    <main className="my-[150px]">
      <section>
        <MotionHeader>
          <p className="h1 max-w-[1200px] text-left text-mulish text-main font-bold">{news.title}</p>
        </MotionHeader>
        <div className="my-[100px]">
          <MotionImage img={news.img} width={1800} height={900}/>
        </div>
        <MotionText>
        <h4 className="text-3xl font-bold text-mulish text-main">{news.fullArticleTitle1}</h4>
          <p className="mt-8 text-2xl font-normal text-sans text-textGray">{news.fullArticle1}</p>
        </MotionText>
      </section>
      <section className="my-[82px] flex container">
        <div className="mr-12">
            <MotionImage img={news.newsImage3} width={640} height={960}/>
        </div>
        <MotionText>
          <h4 className="text-3xl font-bold text-mulish text-main">{news.fullArticleTitle4}</h4>
          <p className="mt-8 text-2xl font-normal text-sans text-textGray">{news.fullArticle4}</p>
        </MotionText>
      </section>
      <section className="my-[82px] flex container">
        <MotionText>
          <h4 className="text-3xl font-bold text-mulish text-main">{news.fullArticleTitle2}</h4>
          <p className="mt-8 text-2xl font-normal text-sans text-textGray">{news.fullArticle2}</p>
        </MotionText>
        <div className="ml-12">
          <MotionImage img={news.newsImage4} width={640} height={775}/>
        </div>
      </section>
      <section className="my-[82px]">
        <div className="mb-[82px]">
          <MotionImage img={news.newsImage5} width={1800} height={900}/>
        </div>
        <MotionText>
          <h4 className="text-3xl font-bold text-mulish text-main">{news.fullArticleTitle3}</h4>
          <p className="mt-8 text-2xl font-normal text-sans text-textGray">{news.fullArticle3}</p>
        </MotionText>
      </section>
      <div className="container">
        <div className="py-12 border-b-2 border-textGray"></div>
        <div className="mt-8 text-lg text-left text-mulish text-main font-bold">Tags: <span className="text-sans text-textGray font-base">Inspiration, Workspace, Minimal, Decoation</span></div>
        <div className="flex items-center mt-8 text-lg text-left text-mulish text-main font-bold">Share:  <span className="ml-6 text-sans text-textGray font-base"><MediaLinks/></span></div>
      </div>
      
      
    </main>
  );
}
