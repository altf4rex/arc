import { footerLinks } from "@/constants";
import Link from "next/link";
import MediaLinks from "../MediaLinks";

const Footer = () => {
  return (
    <footer className="py-16 flex justify-between items-center mx-[60px]">
      <div>
        <Link href="/" className="flex items-center mb-[150px]">
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
      <div className="flex w-[700px] mt-8 justify-between items-end flex-wrap">
        {footerLinks.map((m) => (
          <div className="flex flex-col">
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
      <MediaLinks />
    </footer>
  );
};

export default Footer;
