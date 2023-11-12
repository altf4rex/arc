"use client"
import Image from "next/image";
import ButtonLink from "../ButtonLink";
import { useContext } from "react";
import { Context } from "@/components/provider";
import { Project } from "@/types";
import { motion } from "framer-motion";

const CarouselMainFrame = ({ project }: { project: Project }) => {
  const headerVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { 
      y: -50,
      opacity: 0 
    },
  };
  
  const context = useContext(Context);

  return (
    context!.currentIndex === project.id && (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: 500}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: [.08,.89,.92,1.02], duration: 1 }}
      >
        <Image
          className="relative z-0 brightness-[.65]"
          src={project.img}
          alt="project"
          width={1804}
          height={971}
        />
        <div className="absolute top-[20%] left-[20%] z-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="521"
            viewBox="0 0 158 521"
            fill="none"
            className="line-main"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ ease: "easeOut", duration: 1.2}}
              d="M158 2L2 2V260.5V519H158"
              stroke="#C47F3F"
              strokeWidth="4"
              className="line-slider"
            />
          </svg>
          <div className="mt-12 ml-12">
            <h3 className="mb-6 text-left text-sans text-main text-base font-normal uppercase">
              Architecture
            </h3>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ ease: "easeOut", duration: 1 }}
              className="mb-[60px] text-left text-mulish text-main text-8xl font-normal "
            >
              {project.name.split(" ").map((w, i) => (
                <motion.p
                  key={w}
                  className="even:text-primary"
                  variants={headerVariants}
                  custom={i + 1}
                >
                  {w}
                </motion.p>
              ))}
            </motion.div>
            <ButtonLink slug={project.slug} text={"See project"} />
          </div>
        </div>
      </motion.div>
    )
  );
};

export default CarouselMainFrame;
