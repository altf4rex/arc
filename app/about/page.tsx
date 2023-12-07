
import Image from "next/image";
import { about } from "@/constants";
import MainTeam from "@/components/MainTeam/MainTeam";
import {team} from "@/constants"
import MotionImage from "@/components/MotionImage";
import MotionHeader from "@/components/MotionHeader";
import MotionText from "@/components/MotionText";

export default function Page() {

  const customEase = [.08,.89,.92,1.02];
 
  return (
    <main className="my-[150px]">
      <div className="overflow-hidden pb-2 container">
        <MotionHeader>
          <p className="h1 max-w-[1200px] text-left text-mulish text-main font-bold">Strategy-led <br />
          <span className="text-primary">design</span> in every detail</p>
        </MotionHeader> 
      </div>
      <div className="my-[100px] mx-[60px]">
          <MotionImage img={"/aboutTeam1.jpg"} width={1800} height={900}/>
      </div>
      <div className="container mt-[200px]">
      <div className="overflow-hidden pb-2 container">
      <MotionHeader>
          <p className="h2 text-left font-bold text-mulish text-main">A few words <span className="text-primary">About us</span></p>
      </MotionHeader>
      </div>
        
        <div className="">
          <div key={about[0].id} className="flex mt-20">
          <div className="w-[640px] h-[780px]">
            <MotionImage img={about[0].img} width={640} height={780}/>
          </div>
            
            <div className="ml-12">
            <MotionText>
            <h3 className="text-3xl font-bold text-mulish text-main">{about[0].header}</h3>
            <p className="mt-8 text-2xl font-normal text-sans text-textGray">
              <br />
              {about[0].text.split("\n").map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
            </p>
            </MotionText> 
            </div>
          </div>
          <div key={about[1].id} className="flex mt-[150px]">
            <div className="">
            <MotionText>
            <h3 className="text-3xl font-bold text-mulish text-main">{about[1].header}</h3>
            <p className="mt-8 text-2xl font-normal text-sans text-textGray">
              {about[1].text.split("<br><br>").map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
            </p>
            </MotionText>
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
