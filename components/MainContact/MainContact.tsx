import Image from "next/image"
import { ContactForm } from "./ContactForm"

const MainContact = () => {
  return (
    <div className="relative mt-[216px] max-2xl:mt-[150px] max-md:mt-[100px]">
        <Image 
        className="object-cover"
            src="/contact.jpg"
            alt="contact"
            width="1920"
            height="1078"
        />
        <div className="absolute flex left-[30%] top-[30%] max-2xl:left-[15%] max-xl:left-[10%]  max-lg:left-[5%] max-lg:top-[5%] max-lg:flex-col">
          <div>
          <h2 className="text-[76px] text-left text-mulish text-main font-bold">Contact</h2>
            <p className="mt-6 text-base text-sans text-textGray font-normal">You&apos;ll called for yielding male, so lights<br/> Stars abundantly, is their.</p>
            <p className="mt-9 text-3xl text-left text-mulish text-main font-bold">69 Queen St, Melbourne<br/> Australia</p>
            <p className="mt-9 text-3xl text-left text-mulish text-main font-bold">(+706) 8398-0751</p>
            <p className="mt-9 text-base text-sans text-textGray font-normal">Larson@mail.com</p>
          </div>
          <div className="ml-[140px] max-xl:ml-[70px] max-lg:ml-0  max-lg:mt-[60px]">
            <p className="mt-8 text-3xl text-left text-mulish text-main font-bold">
              Let&apos;s grab a coffee and jump on<br/>conversation <span className="text-primary">chat with us.</span>
            </p>
            <form className="flex flex-col">
                <ContactForm place={"Name"}/>
                <ContactForm place={"Email*"}/>
                <ContactForm place={"Message"}/>
                <button type="submit" className="mt-10 px-8 py-4 w-max bg-primary text-mainBg text-sans text-base font-medium">SEND MESSAGE</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default MainContact
