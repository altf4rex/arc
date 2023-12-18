import MainServices from "@/components/MainServices/MainServices";
import MotionHeader from "@/components/MotionHeader";
import MotionImage from "@/components/MotionImage";
import TextAnimation from "@/components/TextAnimation";
import {projects} from "@/data/data"

export default function Page({params}:{params: { project: string }}){
    let filteredProject = projects.filter((a) => a.slug === `projects/${params.project}`)[0];
return (
    <main className="py-[150px] max-xl:py-[80px] max-md:py-[40px] ">
        <MotionHeader>
            <h2 className="h2 text-left text-mulish text-main font-bold">{filteredProject.name}</h2>
        </MotionHeader>
        <div className="container flex justify-between mt-[100px] max-xl:mt-[80px] max-md:mt-[60px] max-sm:mt-[20px] max-sm:flex-wrap max-sm:justify-between">
            {
                filteredProject.details?.map((d) => 
                    <div className="max-sm:mt-12 max-sm:w-[160px]" key={d.header}>
                        <p className="text-base text-mulish text-main font-semibold">{d.header}</p>
                        <p className="pt-5 text-base text-sans text-textGray font-normal max-sm:pt-4">{d.text}</p>
                    </div>
                )
            }    
        </div> 
        <div className="mt-[100px] mx-[60px] object-cover max-2xl:mx-[30px] max-md:mx-0 max-2xl:mt-[80px] max-md:mt-[50px]">
            <MotionImage img={filteredProject.img} width={1800} height={900}/>
        </div>
        <div className="container mt-[150px] pt-8 text-2xl leading-10 text-sans text-textGray font-normal max-2xl:mt-[80px] max-md:mt-[50px]">
            <span className="text-white font-medium">{filteredProject.headOfFullDescription}</span>
            <TextAnimation text={filteredProject.fullDescription}/>
        </div>
        <div className="mx-[60px] max-2xl:mx-[30px] max-md:mx-0 mt-[150px] max-2xl:mt-[100px] max-md:mt-[50px] flex justify-between max-2xl:flex-wrap">
            <div className="max-sm:mx-2">
                <MotionImage img={filteredProject?.photos[0]?.url} width={filteredProject?.photos[0]?.width || 428} height={filteredProject?.photos[0]?.height || 428}/>
            </div>
            <div className="flex flex-col justify-between ml-2 max-2xl:flex-row max-2xl:mt-4 max-2xl:ml-0 max-sm:flex-col max-sm:mt-0 ">
                <div className="max-2xl:w-1/3 max-sm:w-fit max-sm:mx-2 max-sm:mt-2 max-2xl:overflow-hidden max-2xl:h-[79%]">
                    <MotionImage img={filteredProject?.photos[1]?.url} width={filteredProject?.photos[1]?.width || 428} height={filteredProject?.photos[1]?.height || 428}/>
                </div>
                <div className="flex justify-between max-2xl:w-2/3 max-sm:w-fit max-sm:flex-col">
                    <div className="max-2xl:w-1/2 max-2xl:mx-2 max-sm:w-fit max-sm:mt-2 max-2xl:overflow-hidden max-2xl:h-[90%] max-sm:h-[62%]">
                        <MotionImage img={filteredProject?.photos[3]?.url} width={filteredProject?.photos[2]?.width || 428} height={filteredProject?.photos[2]?.height || 428}/>
                    </div>
                    <div className="max-2xl:w-1/2 max-sm:w-fit max-sm:mx-2 max-sm:mt-2 max-2xl:overflow-hidden max-2xl:h-[79%] ">
                        <MotionImage img={filteredProject?.photos[2]?.url} width={filteredProject?.photos[3]?.width || 428} height={filteredProject?.photos[3]?.height || 428}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container ">
            {/* <h3 className="h4 text-left text-mulish text-main font-bold">Services provided</h3> */}
            <div className="flex justify-between">
                <MainServices services={filteredProject.servicesProvided}/>
            </div>
        </div>
    </main>
)

}