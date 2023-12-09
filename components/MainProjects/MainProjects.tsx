"use client"
import { mainProjects } from "@/data/data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import ButtonLink from "../ButtonLink";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
const MainProjects = () => {

  // const vertical = mainProjects.slice(0,1)
  // const square = mainProjects.slice(1,3)
  // const horizontal = mainProjects.slice(3,4)
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0.9);

  const isInView = useInView(ref)


  useEffect(() => {
    if (isInView) {
      const handleScroll = () => {
        if (ref.current) {
          const containerHeight = ref.current.offsetHeight;
          const scrollPosition = window.scrollY;
          const scaleFactor = 0.07;
          const maxScale = 1.12;
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
    <section className="mt-[300px] mx-[60px]" >
<div className="overflow-hidden pb-2 container">
<motion.div
      className="h2 text-left font-bold text-mulish text-main"
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0  }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      
      Latest projects
    </motion.div>
</div>
      <div
        ref={ref}
        className="grid-container mt-[150px]"
      >
        {
        mainProjects.map((p) => (
          <ProjectCard project={p} scale={`scale(${scale})`}/>
        ))
      }
      </div>
      <div className="container mt-[80px] mr-[60px] flex justify-end">
        <ButtonLink slug={'/projects'} text={"View all projects"} />
      </div>
    </section>
  );
};

export default MainProjects;
