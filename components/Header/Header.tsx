import Logo from "./Logo"
import Navigation from "./Navigation"

export const Header = () => {
  return (
    <nav className="flex justify-between items-center py-6">
        <Logo/>
        <Navigation/>
        <p className="font-mulish text-main text-base font-normal">+999 (234) 672-22-10</p>
    </nav>
  )
}

export default Header