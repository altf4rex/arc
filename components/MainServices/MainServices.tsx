"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MainServices = ({services}) => {

  const headerVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
      },
    }),
    hidden: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <section className="flex items-center flex-col mt-[210px] max-2xl:mt-[150px] max-md:mt-[100px] max-sm:mt-[50px]">
      <div className="container">
      <div className="overflow-hidden pb-2">
      <motion.div
      className="h2 text-left font-bold text-mulish text-main"
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0  }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      Services
    </motion.div>
   </div>
        <div className="flex mt-[150px] max-2xl:mt-[100px] max-md:mt-[50px] max-lg:flex-col">
          {services.map((s, i) => (
            <motion.div
              className="even:mx-[120px] max-xl:even:mx-[60px] max-lg:even:mx-auto max-lg:mx-auto max-lg:mb-[60px]"
              key={s.header}
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.5, once: true}}
              custom={i}
              
            >
              <motion.img
                className="w-[70px] h-[100px]"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                src={s.img}
                alt={s.header}
                width={60}
                height={40}
              />
              <motion.div 
              className="mt-8 text-2xl font-bold text-mulish text-main max-lg:max-w-[400px]"
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: (0.3 * (i + 1))}}
              >

                {s.header}
              </motion.div>
              <motion.div 
              className="mt-12 text-xl font-normal text-sans text-textGray max-lg:max-w-[400px]"
              initial={{opacity: 0, y: -60}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: (0.4 * (i + 1))}}
              >
                {s.text}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
