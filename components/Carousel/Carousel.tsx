"use client"
import Image from "next/image";
import { carouselProjects } from "@/data/data";
import Link from "next/link"
import { useContext } from 'react';
import {Context} from "@/components/provider"
import CarouselButton from "./CarouselButton";

const Carousel = () => {
  const context = useContext(Context);
  return (
    <div className="flex w-max relative duration-500">
      {carouselProjects.map((p) => (
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
            <h3 className="mb-6 text-left text-sans text-main text-base font-normal uppercase">Architecture</h3>
            <h1 className="text-left text-mulish text-main text-8xl font-normal">
              Home
              <br />
              <span className="even:text-primary">
                In
                <br />
              </span>
              Forest
            </h1>
            <Link href={p.slug} className="main-link absolute flex justify-between mt-10 w-[140px]">
              <p className="font-bold whitespace-nowrap text-sans text-main text-base ">See project</p>
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.322 11.0245L1.00001 0.999995" stroke="white"/>
                <path d="M1 21L12.322 10.9755" stroke="white"/>
              </svg>
            </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="flex absolute bottom-0 right-0 bg-mainBg">
      {carouselProjects.map((p, i) => (
        <CarouselButton key={p.id} projectId={p.id} projectName={p.name} index={i}/>
      ))}
      </div>
    </div>
  );
};

export default Carousel






