"use client"
import { useContext } from 'react';
import {Context} from "@/components/provider"

const CarouselButton = ({projectId, projectName}: {projectId: number, projectName: string}) => {

const context = useContext(Context);

  return (
    <button
    onClick={() => context?.current(projectId)}
    >
     {projectName}
    </button>
  )
}

export default CarouselButton