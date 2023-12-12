"use client"

import { motion } from "framer-motion";

    
const MainTeam = ({team, header}) => {
    const headerVariants = {
        visible: (i: number) => ({
          y: 0,
          opacity: 1,
          transition: {
            delay: i < 3 ? (i + 1) * 0.1 : 0,
            duration: 0.6,
          },
        }),
        hidden: (i: number) => ({
          y: 250,
          opacity: 0,
        }),
    }

   

  return (
    
    <section className="container mt-[210px] max-2xl:mt-[150px] max-md:mt-[100px]">
<div className="overflow-hidden pb-2">
<motion.div
      className="h2 text-left font-bold text-mulish text-main"
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0  }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      
      {header}
    </motion.div>
</div>
        <div className="grid grid-cols-3 mt-[142px] gap-x-44 gap-y-20 max-2xl:mt-[100px] max-md:mt-[50px] max-lg:flex max-lg:flex-col ">
        {
            team.map((t, i) => 
            <div 
              key={i}
              className="group relative w-max h-max max-lg:mx-auto"
              
            >
              <motion.img 
                className="w-[351px] h-[542px]"
                src={t.img}
                alt={t.alt}
                width={351}
                height={542}
                whileHover={{ scale: 1.2, opacity: 0.2}}
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                custom={i}
              />
              <div className="hidden absolute bottom-[1%] left-[4%] group-hover:inline-block pointer-events-none">
                <p className="pt-6 max-w-[300px] text-3xl text-left text-mulish text-main font-bold">{t.name}</p>
                <p className="pt-12 max-w-[350px] text-base text-sans text-textGray font-normal">{t.post}</p>
              </div>
            </div>
          )
        }
        </div>
    </section>
  )
}

export default MainTeam