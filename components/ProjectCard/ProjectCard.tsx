"use client"
import {Project} from "@/types"
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectCard = ({ project, scale }: { project: Project; scale?: string }) => {
  
  return (
    <div key={project.id} className={`${project?.type || 'default-block'} w-[${project?.formatOfImg?.width || 428}px] h-[${project?.formatOfImg?.height || 428}px] hover-project-block relative flex flex-wrap  overflow-hidden max-xl:w-fit max-xl:h-fit`}>
      <Image
        style={{ transform: scale || 'scale(1)' }}
        className={` hover-project-img top-0 object-cover `}
        src={project?.formatOfImg?.src || project.img}
        alt="project"
        width={project?.formatOfImg?.width || 428}
        height={project?.formatOfImg?.height || 428}
      />
      <Link href={project.slug} className={`hover-project-text block absolute pt-[6%] pl-[8%] w-full h-full bg-mainBg  border border-primary`}>
        <h3 className="pt-6 max-w-[300px] text-3xl text-left text-mulish text-main font-bold">
          {project.name}
        </h3>
        <p className="pt-12 pr-8 text-base text-sans text-textGray font-normal">
          {project.description}
        </p>
        <div
        className="main-link  absolute flex bottom-16"
        >
      <p className="font-semibold mr-4 whitespace-nowrap text-sans text-main text-base">
        See more
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
