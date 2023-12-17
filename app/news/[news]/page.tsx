import { architectureNews } from "@/data/data";
import MotionImage from "@/components/MotionImage";
import MotionHeader from "@/components/MotionHeader";
import MotionText from "@/components/MotionText";
import MediaLinks from "@/components/MediaLinks";
import TextAnimation from "@/components/TextAnimation";

export default function Page({ params }: { params: { news: string } }) {
  let news = architectureNews.filter((a) => a.slug === `/news/${params.news}`)[0];
  
  return (
    <main className="py-[150px] max-xl:py-[80px] max-md:py-[40px]">
      <section>
        <MotionHeader>
          <p className="h1 max-w-[1200px] text-left text-mulish text-main font-bold">{news.title}</p>
        </MotionHeader>
        <div className="my-[100px] max-md:my-[60px]  mx-[60px] max-2xl:mx-[30px] max-md:mx-0">
          <MotionImage img={news.img} width={1800} height={900}/>
        </div>
      </section>
      <section className="my-[82px] flex container max-lg:flex-col max-lg:items-center">
        <div className="mr-12 max-2xl:mr-0 w-[640px] h-[775px] max-lg:order-2 max-lg:h-min max-lg:max-w-fit max-lg:mt-8">
            <MotionImage img={news.newsImage3} width={640} height={775}/>
        </div>
        <div className="container max-lg:order-1">
          <MotionText text={news.fullArticleTitle1} />
          <TextAnimation text={news.fullArticle1} />
        </div>
      </section>
      <section className="my-[82px] flex container max-lg:flex-col max-lg:items-center">
        <div className="container">
        <MotionText text={news.fullArticleTitle2} />
        <TextAnimation text={news.fullArticle2} />
        </div>
        <div className="ml-12 max-2xl:ml-0 w-[640px] h-[775px] max-lg:h-min max-lg:max-w-fit max-lg:mt-8">
          <MotionImage img={news.newsImage4} width={640} height={775}/>
        </div>
      </section>
      <section className="my-[82px] max-lg:mt-8 max-lg:flex max-lg:flex-col max-lg:my-0 max-lg:my-[82px]">
        <div className="mb-[82px] max-lg:mb-0 mx-[60px] max-2xl:mx-[30px] max-md:mx-0 max-lg:order-2 max-lg:mt-8">
          <MotionImage img={news.newsImage5} width={1800} height={900}/>
        </div>
        <div className="container max-lg:order-1">
        <MotionText text={news.fullArticleTitle3} />
        <TextAnimation text={news.fullArticle3} />
        </div>
      </section>
      <div className="container">
        <div className="py-12 border-b-2 border-textGray max-lg:py-2"></div>
        <div className="mt-8 text-lg text-left text-mulish text-main font-bold">Tags: <span className="text-sans text-textGray font-base">Inspiration, Workspace, Minimal, Decoation</span></div>
        <div className="flex items-center mt-8 text-lg text-left text-mulish text-main font-bold">Share:  <span className="ml-6 text-sans text-textGray font-base"><MediaLinks/></span></div>
      </div>
    </main>
  );
}