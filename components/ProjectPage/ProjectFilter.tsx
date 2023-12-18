"use client"
import {motion} from "framer-motion"
import { useRouter, useSearchParams } from 'next/navigation'

const ProjectFilter = ({filter}: {filter: string[]}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get('filter');

  const handleFilterClick = (filterValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentFilter === filterValue.toLocaleLowerCase()) {
      params.delete('filter');
    } else {
      params.set('filter', filterValue.toLocaleLowerCase());
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };
  
    const variants = {
        visible: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.1,
            duration: 1
          },
        }),
        hidden: { 
          opacity: 0,
          x: -50
        },
      };

      return (
        <ul className="mt-[72px] flex flex-wrap max-md:px-[14px] container">
          {filter.map((f, i) => (
            <motion.li
              key={f}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={i + 1}
              onClick={() => handleFilterClick(f)}
              className={`mr-16 text-base text-sans text-main font-normal hover:text-primaryHover mt-[20px] max-sm:mr-10 cursor-pointer ${currentFilter === f.toLocaleLowerCase() ? 'text-primary' : ''}`}
            >
              {f}
            </motion.li>
          ))}
        </ul>
      );
    };

export default ProjectFilter