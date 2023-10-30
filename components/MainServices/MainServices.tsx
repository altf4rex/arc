"use client";
import { services } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const MainServices = () => {
  const headerVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
    hidden: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <section className="flex items-center flex-col mt-[210px]">
      <div className="container">
        <h2 className="text-5xl text-left font-bold text-mulish text-main">
          Services
        </h2>
        <div className="flex mt-[150px]">
          {services.map((s, i) => (
            <motion.div
              className="even:mx-[120px]"
              key={s.header}
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2, once: true}}
              custom={i}
              
            >
              <Image
                className="w-[70px] h-[100px]"
                src={s.img}
                alt={s.header}
                width={60}
                height={40}
              />
              <h3 className="mt-8 text-2xl font-bold text-mulish text-main">
                {s.header}
              </h3>
              <p className="mt-12 text-base font-normal text-sans text-textGray">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
