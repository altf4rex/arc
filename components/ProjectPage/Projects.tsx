"use client"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const Projects = ({ project }) => {
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
    <div className="mt-[52px] max-w-[1920px] flex flex-wrap justify-start">
      {project.map((p, i) => (
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          key={p.id}
          className="mr-[27px] mb-[30px]"
          custom={i}
        >
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
