import { about } from "@/constants";
import MainTeam from "@/components/MainTeam/MainTeam";
import {team} from "@/constants"
import MotionImage from "@/components/MotionImage";
import MotionHeader from "@/components/MotionHeader";
import MotionText from "@/components/MotionText";
import TextAnimation from "@/components/TextAnimation";

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
        
        <div>
          <div key={about[0].id} className="flex mt-20">
            <div className="w-[640px] h-[780px]">
              <MotionImage img={about[0].img} width={640} height={780}/>
            </div>
          <div className="ml-12 max-w-[900px]">
            <MotionText text={about[0].header}/>
            <TextAnimation text={about[0].text} />
          </div>
          </div>
          <div key={about[1].id} className="flex mt-[150px]">
            <div className="max-w-[800px]">
              <MotionText text={about[1].header}/>
              <TextAnimation text={about[1].text} />
            </div>
            <MotionImage img={about[1].img} width={640} height={419}/>
          </div>
        </div>
      </div>
      <MainTeam team={team} header={"Our team"}/>
    </main>
  );
}
