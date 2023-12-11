"use client"
import { useState } from "react"

import Logo from "./Logo"
import Navigation from "./Navigation"

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
 
  return (
    <>
    <button
        className="hidden z-40 text-mulish text-main text-base font-normal font-semibold absolute right-3 max-lg:block"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >button</button>
   <nav
        className={`max-lg:${isMenuOpen ? 'flex' : 'hidden'} flex justify-between items-center py-6 px-[60px] max-xl:px-[30px] max-lg:px-0 max-lg:flex-col max-lg:absolute max-lg:z-30 max-lg:w-screen max-lg:h-screen max-lg:justify-start max-lg:bg-mainBg`}
      >
        <Logo/>
        <Navigation/>
        <p className="text-mulish text-main text-base font-normal font-semibold">+999 (234) 672-22-10</p>
    </nav>
    </>
  )
}

export default Header