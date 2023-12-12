'use client'
import { skills } from "@/constants";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const MainSkills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const [counters, setCounters] = useState(skills.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = prevCounters.map((count, index) => {
            const difference = skills[index].count - count;
            const step = Math.max(1, Math.floor(difference / 2));
            
            if (difference > 0) {
              return count + step;
            }
            return count;
          });
          return newCounters;
        });
      }, 150);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isInView]);

  return (
    <div ref={ref} className="container mt-[210px] flex justify-between max-2xl:mt-[90px] max-md:mt-[40px] max-sm:flex-col max-sm:items-center">
      {skills.map((s, index) => (
        <div className="flex items-center max-sm:mt-[60px]" key={s.skill}>
          <div className="text-6xl font-bold text-primary">
            {Math.min(counters[index], s.count)}
          </div>
          <p className="max-w-[110px] ml-6 mt-2 text-left text-sans text-base text-white">
            {s.skill}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainSkills;