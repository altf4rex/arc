"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { pages } from "@/constants";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const pathname = usePathname();
  return (
    <>
<button
  className={`hidden z-40 text-mulish text-main text-base font-normal font-semibold absolute right-3 max-lg:block mt-6 mr-6 burger-button ${isMenuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!isMenuOpen)}
>
  <svg className="burger-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path className="burger-icon-path" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
  </svg> 
  <svg className="cross-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path className="cross-icon-path" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
</button>

      <nav
        className={`max-lg:absolute ${
          isMenuOpen ? "bottom-0" : "bottom-full"
        } flex justify-between items-center py-6 px-[60px] max-xl:px-[30px] max-lg:px-0 max-lg:flex-col max-lg:z-30 max-lg:w-screen max-lg:h-screen max-lg:bg-mainBg max-lg:items-center max-lg:justify-between duration-700`}
      >
        <Link href="/" className={`${isMenuOpen ? "header-up" : ""} logo flex items-center mr-[70px] max-lg:mr-0 max-lg:text-center`} onClick={() => setMenuOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="65"
            viewBox="0 0 41 65"
            fill="none"
            className="max-lg:hidden"
          >
            <path d="M41 1L1 1V32.5V64H41" stroke="#C47F3F" strokeWidth="2" />
          </svg>
          <div className="ml-[-25px] mr-[-70px] max-lg:ml-0 max-lg:mr-0">
            <p className="text-mulish text-main text-2xl font-bold">Larson</p>
            <p className="text-sans text-main text-[10px] font-normal opacity-60">
              Architecture studio
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="65"
            viewBox="0 0 98 65"
            fill="none"
            className="max-lg:hidden"
          >
            <path
              d="M1.90735e-06 1L97 1V32.5V64H1.90735e-06"
              stroke="#C47F3F"
              strokeWidth="2"
              className="logo-line"
            />
          </svg>
        </Link>
        <div className="flex max-lg:flex-col max-lg:py-12 max-lg:items-center">
          {pages.map((h) => (
            <Link
              onClick={() => setMenuOpen(false)}
              key={h.page}
              href={`${h.pageSlug}`}
              className={`link ${isMenuOpen ? "header-up" : "" }  
              ${
                pathname.split("/").includes(h.page.toLocaleLowerCase()) ? "text-primary" : "text-main"
              } mr-12 text-mulish text-main text-sm font-normal font-semibold hover:text-primaryHover max-lg:mb-8 max-lg:text-lg max-lg:mr-0`}
            >
              {h.page}
            </Link>
          ))}
        </div>
        <p className={`${isMenuOpen ? "header-up" : ""} text-mulish text-main text-base font-normal font-semibold`}>
          +999 (234) 672-22-10
        </p>
      </nav>
    </>
  );
};

export default Header;
