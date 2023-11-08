"use client"

import { motion } from "framer-motion";

    
const MainTeam = ({team, header}) => {
    const headerVariants = {
        visible: (i: number) => ({
          y: 0,
          opacity: 1,
          transition: {
            delay: (i + 1) * 0.1,
            duration: 0.6,
          },
        }),
        hidden: (i: number) => ({
          y: 250,
          opacity: 0,
        }),
    }

   

  return (
    
    <section className="container mt-[210px]">
        <h2 className="text-5xl text-left font-bold text-mulish text-main">{header}</h2>
        <div className="mt-[150px] grid grid-cols-3">
        {
            team.map((t, i) => 
            <motion.div 
              key={i}
              className="group relative w-max h-max"
              whileHover={{ scale: 1.2, opacity: 0.2}}
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              custom={i}
            >
              <img 
                className="w-[351px] h-[542px]"
                src={t.img}
                alt={t.alt}
                width={351}
                height={542}
                
              />
              <div className="hidden absolute bottom-[1%] left-[4%] group-hover:inline-block">
                <p className="pt-6 max-w-[300px] text-3xl text-left text-mulish text-main font-bold">{t.name}</p>
                <p className="pt-12 max-w-[350px] text-base text-sans text-textGray font-normal">{t.post}</p>
              </div>
            </motion.div>
          )
        }
        </div>
    </section>
  )
}

export default MainTeam