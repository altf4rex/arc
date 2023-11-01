"use client"
import { useContext } from 'react';
import {Context} from "@/components/provider"

const CarouselButton = ({projectId, projectName, index}: {projectId: number, projectName: string, index: number}) => {

const context = useContext(Context);
  return (
    <button 
    className='group flex items-center mx-12 my-4'
    onClick={() => context?.current(projectId)}
    >
      <p className={`text-6xl font-bold group-hover:text-primaryHover ${context?.currentIndex === projectId? 'text-primary' : 'text-white'}`}>{`0${index + 1} `}</p>
      <p className={`max-w-[110px] ml-6 mt-2 text-left text-sans text-base group-hover:text-primaryHover ${context?.currentIndex === projectId? 'text-primary' : 'text-white'}`}>{projectName}</p>
    </button>
  )
}

export default CarouselButton