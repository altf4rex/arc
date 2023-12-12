import { footerLinks } from "@/constants";
import Link from "next/link";
import MediaLinks from "../MediaLinks";

const Footer = () => {
  return (
    <footer className="relative py-16 flex justify-between items-center mx-[60px] max-lg:flex-col max-lg:mx-[30px] max-lg:mx-[10px] max-[520px]:pt-6">
      <div className="max-lg:absolute max-lg:bottom-6 max-lg:left-2">
        <Link href="/" className="flex items-center mb-[150px] max-lg:mb-[20px] ">
          <div>
            <p className="text-mulish text-main text-2xl font-bold">Larson</p>
            <p className="text-sans text-main text-[10px] font-normal opacity-60">
              Architecture studio
            </p>
          </div>
        </Link>
        <div>
          <p className="text-sans text-main text-base font-normal">
            Copyright © 2020
          </p>
        </div>
      </div>
      <div className="flex w-[700px] mt-8 justify-between items-end flex-wrap max-lg:mb-20 max-md:w-screen max-md:px-[20px] max-[520px]:flex-col max-[520px]:items-center">
        {footerLinks.map((m) => (
          <div className="flex flex-col max-[520px]:items-center max-[520px]:mt-8">
            {m.array.map((a) => (
              <Link
                href="/"
                key={a}
                className="text-sans mb-5 text-main text-base font-normal hover:text-primaryHover"
              >
                {a}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="max-lg:absolute max-lg:right-8 max-lg:bottom-8">
        <MediaLinks />
      </div>
      
    </footer>
  );
};

export default Footer;
