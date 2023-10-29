import Slider from "@/components/Carousel/Carousel";
import MainProjects from "@/components/MainProjects/MainProjects";
import MainServices from "@/components/MainServices/MainServices";

export default function Home() {
  return (
    <main>
      <Slider/>
      <MainProjects />
      <MainServices />
    </main>
  )
}

