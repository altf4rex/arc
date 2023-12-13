import MainServices from "@/components/MainServices/MainServices";

import MotionHeader from "@/components/MotionHeader";
import MotionImage from "@/components/MotionImage";
;
import TextAnimation from "@/components/TextAnimation";
import {project} from "@/data/data"


const filteredProject = project.slice(0, 1)[0];

export default function Page({params}:{params: { project: string }}){

return (
    <main className="pt-[150px] max-xl:pt-[80px] max-md:pt-[40px] ">
        <MotionHeader>
            <h2 className="container h2 text-left text-mulish text-main font-bold">{filteredProject.name}</h2>
        </MotionHeader>
        <div className="container flex justify-between mt-[100px] max-xl:mt-[80px] max-md:mt-[20px] max-sm:flex-wrap max-sm:justify-between ">
            {
                filteredProject.details?.map((d) => 
                    <div className="max-sm:mt-12 max-sm:w-[160px]">
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
            <span className="text-white font-medium">{filteredProject.headeOfFullDescription}</span>
            <TextAnimation text={filteredProject.fullDescription}/>
        </div>
        <div className="mx-[60px] mt-[150px] flex justify-between max-2xl:flex-wrap">
            {/* // details-container */}
            {/* {
                filteredProject.photos?.map((p, i) => 
                <div 
                    className={`${p?.type || ''} `}>
                    <MotionImage img={p.url} width={p?.width || 428} height={p?.height || 428}/>
                </div>
                )
            } */}
            <div className="">
                <MotionImage img={filteredProject?.photos[0]?.url} width={filteredProject?.photos[0]?.width || 428} height={filteredProject?.photos[0]?.height || 428}/>
            </div>
            <div className="flex flex-col justify-between ml-2 max-2xl:flex-row ">
                <div className="max-2xl:flex-1">
                    <MotionImage img={filteredProject?.photos[1]?.url} width={filteredProject?.photos[1]?.width || 428} height={filteredProject?.photos[1]?.height || 428}/>
                </div>
                <div className="flex justify-between max-2xl:flex-1 max-2xl:flex-col">
                    <div className="max-2xl:flex-1 ">
                        <MotionImage img={filteredProject?.photos[3]?.url} width={filteredProject?.photos[2]?.width || 428} height={filteredProject?.photos[2]?.height || 428}/>
                    </div>
                    <div className="max-2xl:flex-1 ">
                        <MotionImage img={filteredProject?.photos[2]?.url} width={filteredProject?.photos[3]?.width || 428} height={filteredProject?.photos[3]?.height || 428}/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="container mt-[150px]">
            <h3 className="h4 text-left text-mulish text-main font-bold">Services provided</h3>
            <div className="mt-[100px] flex justify-between">
            <MainServices services={filteredProject.servicesProvided}/>
            </div>
        </div>
    </main>
)

}