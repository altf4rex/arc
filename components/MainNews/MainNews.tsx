'use client'
import { news } from "@/data/data"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import ButtonLink from "../ButtonLink"
import {motion} from "framer-motion"

const headerVariants = {
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  }),
  hidden: (i: number) => ({
    x: i === 3 ? -200 : (i === 1 ? 200 : 0),
    opacity: 0,
  }),
}

const MainNews = () => {
  return (
    <section className="container mt-[216px]">
      <div className="flex justify-between text-center">
      <h2 className="text-5xl text-left font-bold text-mulish text-main">
      Latest news
      </h2>
      <ButtonLink slug={"/news"} text={"View all news"}/>
      </div>
    <div 
    className="mt-[69px] flex justify-between">
        {
            news.map((n) => 
            <motion.div
            className="w-[380px] h-[380px]"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.1, once: true }}
            transition={{duration: 2}}>
                <ProjectCard project={n}/>
            </motion.div>
            )
        }
    </div>
    </section>
  )
}

export default MainNews