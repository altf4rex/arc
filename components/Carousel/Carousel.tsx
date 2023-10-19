"use client"
import Image from "next/image";
import { projects } from "@/data/data";
import Link from "next/link"
import { useContext } from 'react';
import {Context} from "@/components/provider"
import CarouselButton from "./CarouselButton";

const Carousel = () => {
  const context = useContext(Context);
  return (
    <div className="flex w-max overflow-hidden">
      {projects.map((p) => (
        <div key={p.id} className={`relative ${context?.currentIndex === p.id ? 'visible' : 'hidden'}`}>
          <Image
            className="relative z-0 brightness-[.65] "
            src={p.img}
            alt="project"
            width={1804}
            height={971}
          />
          <div className="absolute top-[20%] left-[20%] z-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="521"
              viewBox="0 0 158 521"
              fill="none"
              className="line-main"
            >
              <path
                d="M158 2L2 2V260.5V519H158"
                stroke="#C47F3F"
                strokeWidth="4"
                className="line-slider"
              />
            </svg>
            <div className="mt-12 ml-12">
            <h3 className="mb-6 text-left font-sans text-main text-base font-normal uppercase">Architecture</h3>
            <h1 className="text-left font-mulish text-main text-8xl font-normal">
              Home
              <br />
              <span className="even:text-primary">
                In
                <br />
              </span>
              Forest
            </h1>
            <Link href={p.slug} className="main-link mt-12 flex w-[140px] hover:bg-primaryHover">
              <p className="font-bold whitespace-nowrap font-sans text-main text-base">See project</p>
              <Image
              className="w-3 h-5"
                src="/white-arrow.svg"
                alt="arrow"
                width={12}
                height={20}
              />
            </Link>
            </div>
          </div>
          <CarouselButton projectId={1} projectName={p.name}/>
          <CarouselButton projectId={2} projectName={p.name}/>
          <CarouselButton projectId={3} projectName={p.name}/>
        </div>
      ))}
    </div>
  );
};

export default Carousel

// const Carousel = () => {
  

//   return (
//     <div className="carousel">
//       <div className="carousel-container">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
//           >
//             <img src={item.image} alt={item.alt} />
//           </div>
//         ))}
//       </div>
//       <button onClick={prevSlide}>Предыдущий</button>
//       <button onClick={nextSlide}>Следующий</button>
//     </div>
//   );
// };








