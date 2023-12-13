"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
const TextAnimation = ({ text }) => {

  const textArray = text.split('');

  const letterVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.0025,
      },
    }),
    hidden: { 
      opacity: 0.08
    },
  };

  return (
    <div
    
    className='mt-8'
    >
      {textArray.map((char, index) => (
        <motion.span
        
          key={index}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1}}
          custom={index}
          className='mt-8 text-2xl font-normal text-sans text-textGray max-md:text-xl '
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimation;