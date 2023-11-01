import Image from "next/image"
import { ContactForm } from "./ContactForm"

const MainContact = () => {
  return (
    <div className="relative mt-[216px]">
        <Image 
            src="/contact.jpg"
            alt="contact"
            width="1920"
            height="1078"
        />
        <div className="absolute flex left-[30%] top-[30%]">
          <div>
          <h2 className="pt-6 text-3xl text-left text-mulish text-main font-bold">Contact</h2>
          <p className="pt-12 text-base text-sans text-textGray font-normal">You'll called for yielding male, so lights<br/> Stars abundantly, is their.</p>
          <p className="pt-6 text-3xl text-left text-mulish text-main font-bold">69 Queen St, Melbourne<br/> Australia</p>
          <p className="pt-6 text-3xl text-left text-mulish text-main font-bold">(+706) 8398-0751</p>
          <p className="pt-12 text-base text-sans text-textGray font-normal">Larson@mail.com</p>
          </div>
          <div>
            <p className="pt-6 text-3xl text-left text-mulish text-main font-bold">Let's grab a coffee and jump on<br/> conversation chat with us.</p>
            <ContactForm place={"Name"}/>
            <ContactForm place={"Email*"}/>
            <ContactForm place={"Message"}/>
          </div>
        </div>
    </div>
  )
}

export default MainContact