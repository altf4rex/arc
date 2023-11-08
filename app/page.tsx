import Slider from "@/components/Carousel/Carousel";
import MainContact from "@/components/MainContact/MainContact";
import MainNews from "@/components/MainNews/MainNews";
import MainProjects from "@/components/MainProjects/MainProjects";
import MainServices from "@/components/MainServices/MainServices";
import MainSkills from "@/components/MainSkills/MainSkills";
import MainTeam from "@/components/MainTeam/MainTeam";
import { team } from "@/constants";

export default function Home() {
  const mainTeam = team.slice(0, 3);
  return (
    <main>
      <Slider/>
      <MainProjects />
      <MainServices />
      <MainTeam team={mainTeam} header={"Our magic team"}/>
      <MainSkills />
      <MainNews />
      <MainContact />
    </main>
  )
}

