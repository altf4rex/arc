import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import {project} from "@/data/data"
import Image from "next/image";

const filteredProject = project.slice(0, 1)[0];

export default function Page({params}:{params: { project: string }}){

return (
    <main className="mt-[200px]">
        <h2 className="container text-[55px] text-left text-mulish text-main font-bold">{filteredProject.name}</h2>
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
        <Image 
        className="w-[1800px] h-[768px] mx-[60px] mt-[100px] object-cover bg-textGray"
            src={filteredProject.imgDetails}
            alt="project"
            width={1800}
            height={768}
        />
        <p className="max-w-[780px] mx-auto mt-[150px] pt-8 text-base text-sans text-textGray font-normal">
            <span className="text-white font-medium">{filteredProject.headeOfFullDescription} </span>
            {filteredProject.fullDescription}
        </p>
        <div className="details-container mt-[150px]">
            {
                filteredProject.photos?.map((p) => 
                    <Image 
                    key={p.type} 
                    className={`${p?.type || ''} object-cover bg-textGray`}
                    src={p.url}
                    alt="project"
                    width={p?.width || 428 }
                    height={p?.height || 428}
                    />
                )
            }
        </div>
        <div className="container mt-[200px]">
            <h3 className="text-3xl text-left text-mulish text-main font-bold">Services provided</h3>
            <div className="mt-[100px] flex justify-between">
            {
                filteredProject.servicesProvided?.map((p) => 
                    <div className="max-w-[300px]">
                        <h4 className="text-2xl font-bold text-mulish text-main">{p.title}</h4>
                        <p className="mt-8 text-base font-normal text-sans text-textGray">{p.description}</p>
                    </div>
                )
            }
            </div>
        </div>
    </main>
)
}