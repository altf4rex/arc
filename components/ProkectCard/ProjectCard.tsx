import {Project} from "@/types"
import Image from "next/image";
import ButtonLink from "../ButtonLink";

export const ProjectCard = ({ project, scale }: { project: Project; scale?: string }) => {
  return (
    <div key={project.id} className={`${project?.type || ''} hover-project-block relative flex-wrap inline-block overflow-hidden`}>
      <Image
        style={{ transform: scale || 'scale(1)' }}
        className={`hover-project-img absolute block overflow-hidden top-0 w-[${project?.formatOfImg?.width}px] h-[${project?.formatOfImg?.height}px]`}
        src={project?.formatOfImg?.src || ''}
        alt="project"
        width={project?.formatOfImg?.width }
        height={project?.formatOfImg?.height}
      />
      <div className={`hover-project-text pl-[50px] pt-[50px] w-[${project?.formatOfImg?.width}px] h-[${project?.formatOfImg?.height}px] bg-mainBg  border border-primary`}>
        <h3 className="pt-6 w-[115px] text-3xl text-left text-mulish text-main font-bold">
          {project.name}
        </h3>
        <p className="pt-12 mb-[160px] w-[338px] text-base text-sans text-textGray font-normal">
          {project.description}
        </p>
        <ButtonLink slug={project.slug} text={'See project'} />
      </div>
    </div>
  );
};