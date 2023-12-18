"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

const MotionImage = ({img, width, height}: {img: string, width: number, height: number}) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-500px", "500px"]
  });

  const scroll = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.2]
  );


  return (
        <div className="overflow-hidden" ref={ref}>
        <motion.img 
        style={{ scale: scroll}}
        className={`w-[${width || 1800}px] h-[${height || 900}px] object-cover max-2xl:w-fit max-2xl:h-fit`}
        src={img}
        alt="news"
        width={width || 1800}
        height={height || 900}
        />
        </div>

  );
};

export default MotionImage;
