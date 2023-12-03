"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

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
    <div>
        <div className="overflow-hidden bg " ref={ref}>
        <motion.img 
        style={{ scale: scroll}}
        //style={{ transform: `scale(${scale})` || 'scale(1)'}}
        className={`w-[${width || 1800}px] h-[${height || 900}px] object-cover max-[1470px]:object-contain`}
        src={img}
        alt="news"
        width={width || 1800}
        height={height || 900}
        />
        </div>
    </div>
  );
};

export default MotionImage;


// const [scale, setScale] = useState(1);

// const isInView = useInView(ref)


  // useEffect(() => {
   
  //   if (isInView) {
      
  //     const handleScroll = () => {
      
  //       if (ref.current) {
         
  //         const containerHeight = ref.current.offsetHeight;
  //         const scrollPosition = window.scrollY;
  //         const scaleFactor = 0.2;
  //         const maxScale = 1.6;
  //         const newScale = Math.min(maxScale, 1 + scaleFactor * scrollPosition / containerHeight);
  //         setScale(newScale);
  //       }
  //     } 

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }
    
    
  // }, [isInView]);