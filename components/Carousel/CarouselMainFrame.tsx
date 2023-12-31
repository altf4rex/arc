'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { carouselProjects } from "@/data/data";
import ButtonLink from "../ButtonLink";

const headerVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { 
    y: -50,
    opacity: 0 
  },
};

const customEase = [.08,.89,.92,1.02];

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const wrap = (min: number, max: number, value: number) => {
    const range = max - min + 1;
    if (value < min) {
      return value + range;
    } else if (value > max) {
      return value - range;
    } else {
      return value;
    }
  };
  const imageIndex = wrap(0, carouselProjects.length - 1, page);

const paginate = (newDirection: number) => {
  setPage(([prevPage, prevDirection]) => {
    const nextPage = prevPage + newDirection;
    return [wrap(0, carouselProjects.length - 1, nextPage), newDirection];
  });
};

const startAutoPlay = () => {
  const intervalId = setInterval(() => {
    paginate(1);
  }, 8000);

  return () => clearInterval(intervalId);
};

useEffect(() => {
  const stopAutoPlay = startAutoPlay();

  return stopAutoPlay;
}, []);

  return (
    <div className="relative">
{carouselProjects.map((project, index) => 
        <motion.div
        style={{display: imageIndex + 1 === project.id ? "block" : "none" }}
        className="relative z-10"
        key={project.id} 
        initial={{ opacity: 0.2}}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        >
          <motion.img
          src={project.img} 
          alt={project.name}  
          className="brightness-75 object-cover w-screen h-screen max-md:h-screen max-md:h-screen max-md:w-screen max-md:object-cover"/>
              <div className="absolute top-[20%] left-[20%] z-10 max-xl:top-[15%] max-md:left-[10%] max-md:top-[20%] max-sm:left-[5%] max-[400px]:left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="158"
                  height="521"
                  viewBox="0 0 158 521"
                  fill="none"
                  className="line-main max-2xl:h-[430px] max-lg:h-[360px] max-md:h-[310px]"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ ease: "easeOut", duration: 1.2 }}
                    d="M158 2L2 2V260.5V519H158"
                    stroke="#C47F3F"
                    strokeWidth="4"
                    className="line-slider"
                  />
                </svg>
                <div className="mt-12 ml-12 max-lg:mt-6 max-md:mt-4">
                  <h3 className="mb-6 text-left text-sans text-main text-base font-normal uppercase max-lg:text-sm max-md:mb-4">
                    Architecture
                  </h3>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="mb-[60px] text-left text-mulish text-main text-8xl font-normal max-2xl:mb-[30px] max-2xl:text-7xl max-md:text-6xl max-sm:text-5xl max-sm:leading-[60px]"
                  >
                    {project.name.split(" ").map((w, i) => (
                      <motion.p key={w} className="even:text-primary" variants={headerVariants} custom={i + 1}>
                        {w}
                      </motion.p>
                    ))}
                  </motion.div>
                  <ButtonLink slug={project.slug} text={"See project"} />
                </div>
              </div>
            </motion.div>
)}
      <div className="absolute z-20 left-5 md:top-1/2 -translate-y-1/2 w-16 h-[150px] flex items-center justify-center cursor-pointer group  max-md:bottom-4 max-[400px]:bottom-[-50px]" onClick={() => paginate(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="42" width="32"  viewBox="0 0 320 512" className="fill-current text-white group-hover:scale-150 duration-200 max-md:group-hover:scale-100"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      </div>
      <div className="absolute z-20 right-5 md:top-1/2 -translate-y-1/2 w-16 h-[150px] flex items-center justify-center cursor-pointer group max-md:bottom-4  max-[400px]:bottom-[-50px]" onClick={() => paginate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="42" width="32" viewBox="0 0 320 512" className="fill-current text-white group-hover:scale-150 duration-200 max-md:group-hover:scale-100"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
      </div>
    </div>
  );
};
export default Carousel;