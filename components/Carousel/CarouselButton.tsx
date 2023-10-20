"use client"
import { useContext } from 'react';
import {Context} from "@/components/provider"

const CarouselButton = ({projectId, projectName, index}: {projectId: number, projectName: string, index: number}) => {

const context = useContext(Context);
  return (
    <button 
    className='flex items-center px-12 py-4 hover:bg-primaryHover'
    onClick={() => context?.current(projectId)}
    >
      <p className={`text-6xl font-bold ${context?.currentIndex === projectId? 'text-primary' : 'text-white'}`}>{`0${index + 1} `}</p>
      <p className='max-w-[90px] ml-6 mt-2 text-sans text-base text-white text-left'>{projectName}</p>
    </button>
  )
}

export default CarouselButton