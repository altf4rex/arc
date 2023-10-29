import {Project} from "@/types"
import Image from "next/image";
import ButtonLink from "../ButtonLink";
import Link from "next/link";
import React from "react";

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
      <Link href={project.slug} className={`hover-project-text block pl-[50px] pt-[50px] pb-[50px] w-full h-full bg-mainBg  border border-primary`}>
        <h3 className="pt-6 w-[115px] text-3xl text-left text-mulish text-main font-bold">
          {project.name}
        </h3>
        <p className="pt-12 mb-[160px] w-[338px] text-base text-sans text-textGray font-normal">
          {project.description}
        </p>
        <div
        className="main-link relative flex"
        >
      <p className="mr-10 font-bold whitespace-nowrap text-sans text-main text-base ">
        See project
      </p>
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.322 11.0245L1.00001 0.999995" stroke="white" />
        <path d="M1 21L12.322 10.9755" stroke="white" />
      </svg>
    </div>
      </Link>
    </div>
  );
};
