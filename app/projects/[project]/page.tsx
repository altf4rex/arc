import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import {project} from "@/data/data"
import Image from "next/image";

const filteredProject = project.slice(0, 1)[0];

export default function Page({params}:{params: { project: string }}){

return (
    <main className="my-[150px]">
        <h2 className="container h2 text-left text-mulish text-main font-bold">{filteredProject.name}</h2>
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
        className="w-[1800px] h-[900px] mt-[100px] mx-[60px] object-cover bg-textGray"
            src={filteredProject.img}
            alt="project"
            width={1920}
            height={1200}
        />
        <p className="container mt-[150px] pt-8 text-2xl leading-10 text-sans text-textGray font-normal">
            <span className="text-white font-medium">{filteredProject.headeOfFullDescription} </span>
            {filteredProject.fullDescription}
        </p>
        <div className="mx-[60px] details-container mt-[150px]">
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
        <div className="container mt-[150px]">
            <h3 className="h4 text-left text-mulish text-main font-bold">Services provided</h3>
            <div className="mt-[100px] flex justify-between">
            {
                filteredProject.servicesProvided?.map((p) => 
                    <div className="max-w-[400px]">
                        <h4 className="text-3xl font-bold text-mulish text-main">{p.title}</h4>
                        <p className="mt-8 text-2xl font-normal text-sans text-textGray">{p.description}</p>
                    </div>
                )
            }
            </div>
        </div>
    </main>
)

}