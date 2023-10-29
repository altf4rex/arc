"use client"
import { mainProjects } from "@/data/data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import ButtonLink from "../ButtonLink";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
const MainProjects = () => {

  // const vertical = mainProjects.slice(0,1)
  // const square = mainProjects.slice(1,3)
  // const horizontal = mainProjects.slice(3,4)
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0.7);

  const isInView = useInView(ref)


  useEffect(() => {
    if (isInView) {
      const handleScroll = () => {
        if (ref.current) {
          const containerHeight = ref.current.offsetHeight;
          const scrollPosition = window.scrollY;
          const scaleFactor = 0.1;
          const maxScale = 1.15;

          const newScale = Math.min(maxScale, 1 + scaleFactor * scrollPosition / containerHeight);
          setScale(newScale);

        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isInView]);

  return (
    <section className="mt-[300px]" >
      <div className="my-[144px] flex justify-between">
        <h2 className="text-left text-5xl text-mulish text-main font-bold">Latest projects</h2>
      </div>
      <div
        ref={ref}
        className={`grid-container`}
      >
        {
        mainProjects.map((p) => (
          <ProjectCard project={p} scale={`scale(${scale})`}/>
        ))
      }
      </div>
      <div className="mt-[126px] mr-[60px] flex justify-end">
        <ButtonLink slug={'/projects'} text={"View all projects"} />
      </div>
    </section>
  );
};

export default MainProjects;
