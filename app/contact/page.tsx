import Image from "next/image"
import MediaLinks from "@/components/MediaLinks";
import { ContactForm } from "@/components/MainContact/ContactForm";
import MotionHeader from "@/components/MotionHeader";

const Contact = () => {
  return (
    <div className="py-[150px] max-xl:py-[80px] max-md:py-[40px]">
      <div className="overflow-hidden pb-2 container">
        <MotionHeader>
          <h1 className="h1 text-left text-mulish text-main font-bold">Contact</h1>
        </MotionHeader>
    </div>
    <div className="relative max-sm:mt-[50px]">
      <Image 
      className="w-[1800px] h-[900px] mx-[60px] max-2xl:mx-[30px] max-md:mx-0 mt-[100px] object-cover brightness-[.65] max-sm:hidden"
        src={"/ContactPage.jpg"}
        alt="Contact"
        width={1800}
        height={900} 
      />
    <div className="absolute top-[15%] left-[13%] bg-mainBg max-2xl:left-[10%] max-md:left-[5%] max-sm:left-0 max-sm:relative">
      <div className="px-[90px] py-[82px] max-lg:px-[45px] max-lg:py-[41px] max-sm:px-[20px] max-sm:py-[20px]">
        <p className="h4 text-left text-mulish text-main font-bold">
        Melbourne, <span className="text-primary">Australia</span>
        </p>
        <p className="mt-8 text-base text-left text-sans text-textGray font-base">269 King Str, 05th Floor, Utral Hosue Building, <br/> Melbourne, VIC 3000, Australia.</p>
        <p className="mt-16 text-2xl text-left text-mulish text-main font-bold">+900 (0) 344 956 4050</p>
        <div className="mt-16 text-lg text-left text-mulish text-main font-bold">Email: <span className="text-sans text-textGray font-base">info@sparch.co</span></div>
        <div className="flex items-center mt-8 text-lg text-left text-mulish text-main font-bold">Follow us: <span className="ml-6 text-sans text-textGray font-base"><MediaLinks/></span></div>
        <div className="mt-8 text-lg text-left text-mulish text-main font-bold">Work Hours: <span className="text-sans text-textGray font-base">Monday - Friday : 08h00 - 17h30</span></div>
      </div>
    </div>
    </div>
    <div className="container ml-[140px] my-[100px] max-xl:my-[80px] max-md:my-[40px]">
            <p className="mt-8 text-3xl text-left text-mulish text-main font-bold">Let's grab a coffee and jump on<br/>conversation <span className="text-primary">chat with us.</span></p>
            <form className="flex flex-col max-w-[600px]">
                <ContactForm place={"Name"}/>
                <ContactForm place={"Email*"}/>
                <ContactForm place={"Message"}/>
                <button type="submit" className="mt-10 px-8 py-4 w-max bg-primary text-mainBg text-sans text-base font-medium">SEND MESSAGE</button>
            </form>
           
          </div>
    </div>
  )
}

export default Contact