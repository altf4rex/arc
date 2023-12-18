"use client"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ProjectType } from "@/types";
import { motion } from "framer-motion";

const Projects = ({ project }: { project: ProjectType[] }) => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: (i % 4) * 0.2,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      x: -30,
    },
  };

  return (
    <div className="mt-[52px] max-w-[1920px] flex flex-wrap justify-start max-[1900px]:justify-center">
      {project.map((p, i) => (
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          key={p.id}
          className="mr-[27px] mb-[30px] max-sm:mr-0"
          custom={i}
        >
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
