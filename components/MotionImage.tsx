"use client"

import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

const MotionImage = ({img, width, height}: {img: string, width: number, height: number}) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const isInView = useInView(ref)


  useEffect(() => {
    if (isInView) {
      const handleScroll = () => {
        if (ref.current) {
          const containerHeight = ref.current.offsetHeight;
          const scrollPosition = window.scrollY;
          const scaleFactor = 0.07;
          const maxScale = 1.12;
          const newScale = Math.min(maxScale, 1 + scaleFactor * scrollPosition / containerHeight);
          setScale(newScale);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isInView]);
  
  return (
    <section className="my-[100px] mx-[60px]" ref={ref}>
        <div className="overflow-hidden bg">
        <Image 
        style={{ transform: `scale(${scale})` || 'scale(1)'}}
        className={` w-[${width || 1800}px] h-[${height || 900}px] object-cover max-[1800px]:object-contain`}
        src={img}
        alt="news"
        width={1800}
        height={900}
        />
        </div>
        
    </section>
  );
};

export default MotionImage;
