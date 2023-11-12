'use client'
import { news } from "@/data/data"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import ButtonLink from "../ButtonLink"
import {motion} from "framer-motion"

const newsVariants = {
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [.08,.89,.92,1.02],
    },
  }),
  hidden: (i: number) => ({
    x: i === 3 ? -150 : (i === 1 ? 150 : 0),
    opacity: 0,
  }),
  
}

const MainNews = () => {
  return (
    <section className="container mt-[216px]">
      <div className="flex justify-between text-center">
      <div className="overflow-hidden pb-2">
<motion.div
      className="h2 text-left font-bold text-mulish text-main"
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0  }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      
      Latest news
    </motion.div>
</div>
      <ButtonLink slug={"/news"} text={"View all news"}/>
      </div>
    <div 
    className="mt-[150px] flex justify-between">
        {
            news.map((n, i) => 
            <motion.div
            style={{ zIndex: i === 1 ? i : 0 }}
            className="w-[380px] h-[380px]"
            variants={newsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.3, once: true }}
            
            custom={i + 1}
            >
                <ProjectCard project={n}/>
            </motion.div>
            )
        }
    </div>
    </section>
  )
}

export default MainNews