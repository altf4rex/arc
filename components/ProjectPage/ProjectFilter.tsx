"use client"
import {motion} from "framer-motion"

const ProjectFilter = ({filter}: {filter: string[]}) => {

    const variants = {
        visible: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.1,
            duration: 1
          },
        }),
        hidden: { 
          opacity: 0,
          x: -50
        },
      };

  return (
        <ul className="mt-[92px] flex">
            {
              filter.map((f, i) => 
                <motion.li 
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={i + 1}
                className="mr-16 text-base text-sans text-main font-normal hover:text-primaryHover">{f}</motion.li>
              )
            }
        </ul>
  )
}

export default ProjectFilter

