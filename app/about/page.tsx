'use client'
import Image from "next/image";
import { about } from "@/constants";
import MainTeam from "@/components/MainTeam/MainTeam";
import {team} from "@/constants"
import { motion } from "framer-motion";

export default function Page() {

  const customEase = [.08,.89,.92,1.02];
 
  return (
    <main className="my-[150px]">
      <div className="overflow-hidden pb-2 container">
<motion.div
      className="h1 text-left text-mulish text-main font-bold"
      initial={{ opacity: 0, translateY: "100%" }}
      animate={{ opacity: 1, translateY: 0  }}
      transition={{ duration: 1 }}
    >
      
      Strategy-led <br />
        <span className="text-primary">design</span> in every detail
    </motion.div>
</div>
      <motion.img
        className="w-[1800px] h-[900px] mt-[100px] mx-[60px] object-cover"
        src={"/aboutTeam1.jpg"}
        alt="team"
        width={1800}
        height={769}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ ease: customEase, duration: 1 }}
      />
      <div className="container mt-[200px]">
      <div className="overflow-hidden pb-2 container">
<motion.div
      className="h2 text-left font-bold text-mulish text-main"
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0  }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >    
      A few words <span className="text-primary">About us</span> 
    </motion.div>
</div>
        
        <div className="">
          <div key={about[0].id} className="flex mt-20">
            <Image
              className="w-[640px] h-[780px]"
              src={about[0].img}
              alt="team"
              width={640}
              height={960}
            />
            <div className="ml-12">
            <h3 className="h4 font-semibold text-sans text-white">{about[0].header}</h3>
            <p className="text-3xl leading-[48px] font-semibold text-sans text-textGray">
              <br />
              {about[0].text.split("\n").map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
            </p>
            </div>
          </div>
          <div key={about[1].id} className="flex mt-[150px]">
            <div className="">
            <h3 className="h4 font-semibold text-sans text-white">{about[1].header}</h3>
            <p className="mt-12 mr-12 text-3xl leading-[48px] font-medium text-sans text-textGray">
              {about[1].text.split("<br><br>").map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
            </p>
            </div>
            <Image
              className="w-[640px] h-[419px]"
              src={about[1].img}
              alt="team"
              width={640}
              height={419}
            />
          </div>
        </div>
      </div>
      <MainTeam team={team} header={"Our team"}/>
    </main>
  );
}
