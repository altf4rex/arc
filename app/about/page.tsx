import Image from "next/image";
import { about } from "@/constants";
import MainTeam from "@/components/MainTeam/MainTeam";
import {team} from "@/constants"

export default function Page() {

  return (
    <main className="my-[150px]">
      <h1 className="container h1 text-left text-mulish text-main font-bold">
        Strategy-led <br />
        <span className="text-primary">design</span> in every detail
      </h1>
      <Image
        className="mx-auto w-[1800px] h-[769px] mt-[100px] object-cover"
        src={"/aboutTeam1.jpg"}
        alt="team"
        width={1800}
        height={769}
      />
      <div className="container mt-[200px]">
        <h2 className="h2 text-left text-mulish text-main font-bold">
          A few words <span className="text-primary">About us</span> 
        </h2>
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
            <h3 className="h3 font-semibold text-sans text-white">{about[0].header}</h3>
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
            <h3 className="h3 font-semibold text-sans text-white">{about[1].header}</h3>
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
