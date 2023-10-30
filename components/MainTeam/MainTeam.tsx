"use client"
import {team} from "@/constants"
import { motion } from "framer-motion";

    
const MainTeam = () => {
    const headerVariants = {
        visible: (i: number) => ({
          x: 0,
          opacity: 1,
          transition: {
            delay: (i + 1) * 0.3,
            duration: 0.6,
          },
        }),
        hidden: (i: number) => ({
          x: -250 * (i + 1),
          opacity: 0,
        }),
    }
  return (
    <section className="container mt-[210px]">
        <h2 className="text-5xl text-left font-bold text-mulish text-main">Our magic team</h2>
        <div className="mt-[150px] flex justify-between">
        {
            team.map((t, i) => 
            <motion.img 
                style={{ zIndex: -i }}
                className="relative w-[351px] h-[542px]"
                src={t.img}
                alt={t.alt}
                width={351}
                height={542}
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2, once: true}}
                custom={i}
            />
            )
        }
        </div>
    </section>
  )
}

export default MainTeam