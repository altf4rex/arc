"use client"
import { services } from "@/constants"
import Image from "next/image";
import { motion } from "framer-motion"

const MainServices = () => {
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

  return (
    <section className="flex items-center flex-col mt-[210px]">
       <h2 className="text-5xl inline-block text-left font-bold text-mulish text-main">Services</h2>
       <div className="flex mt-[140px] max-w-[1200px]">
        {
           services.map((s, i) => 
            <motion.div 
                className="mt-10 even:mx-[120px]"
                key={s.header}
                variants={headerVariants}
                custom={i}
            >
                <Image
                    className=""
                    src={s.img}
                    alt={s.header}
                    width={60}
                    height={40}
                />
                <h3 className="mt-8 text-2xl font-bold text-mulish text-main">{s.header}</h3>
                <p className="mt-12 text-base font-normal text-sans text-textGray">{s.text}</p>
            </motion.div>
           )
        }
        </div>
    </section>
  )
}

export default MainServices