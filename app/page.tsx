import Slider from "@/components/Carousel/Carousel";
import MainContact from "@/components/MainContact/MainContact";
import MainNews from "@/components/MainNews/MainNews";
import MainProjects from "@/components/MainProjects/MainProjects";
import MainServices from "@/components/MainServices/MainServices";
import MainSkills from "@/components/MainSkills/MainSkills";
import MainTeam from "@/components/MainTeam/MainTeam";

export default function Home() {
  return (
    <main>
      <Slider/>
      <MainProjects />
      <MainServices />
      <MainTeam />
      <MainSkills />
      <MainNews />
      <MainContact />
    </main>
  )
}

