import MotionHeader from "@/components/MotionHeader";
import MotionImage from "@/components/MotionImage";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import TextAnimation from "@/components/TextAnimation";
import {project} from "@/data/data"
import Image from "next/image";

const filteredProject = project.slice(0, 1)[0];

export default function Page({params}:{params: { project: string }}){

return (
    <main className="my-[150px]">
        <MotionHeader>
            <h2 className="container h2 text-left text-mulish text-main font-bold">{filteredProject.name}</h2>
        </MotionHeader>
        <div className="container flex justify-between mt-[100px]">
            {
                filteredProject.details?.map((d) => 
                    <div>
                        <p className="text-base text-mulish text-main font-semibold">{d.header}</p>
                        <p className="pt-8 text-base text-sans text-textGray font-normal">{d.text}</p>
                    </div>
                )
            }    
        </div> 
        <div className="mt-[100px] mx-[60px] object-cover">
            <MotionImage img={filteredProject.img} width={1800} height={900}/>
        </div>
          
        <div className="container mt-[150px] pt-8 text-2xl leading-10 text-sans text-textGray font-normal">
            <span className="text-white font-medium">{filteredProject.headeOfFullDescription} </span>
            <TextAnimation text={filteredProject.fullDescription}/>
        </div>
        <div className="mx-[60px] details-container mt-[150px]">
            {
                filteredProject.photos?.map((p) => 
                <div 
                    className={`${p?.type || ''}`}>
                    <MotionImage img={p.url} width={p?.width || 428} height={p?.height || 428}/>
                </div>
                    
              
                )
            }
        </div>
        <div className="container mt-[150px]">
            <h3 className="h4 text-left text-mulish text-main font-bold">Services provided</h3>
            <div className="mt-[100px] flex justify-between">
            {
                filteredProject.servicesProvided?.map((p) => 
                    <div className="max-w-[350px]">
                        <h4 className="text-2xl font-bold text-mulish text-main">{p.title}</h4>
                        <p className="mt-8 text-2xl font-normal text-sans text-textGray">{p.description}</p>
                    </div>
                )
            }
            </div>
        </div>
    </main>
)

}