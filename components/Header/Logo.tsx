import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/' className="logo flex items-center mr-[70px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="65" viewBox="0 0 41 65" fill="none">
        <path d="M41 1L1 1V32.5V64H41" stroke="#C47F3F" strokeWidth="2"/>
      </svg>
      <div className="ml-[-25px] mr-[-70px]">
          <p className="font-mulish text-main text-2xl font-bold">Larson</p>
          <p className="font-sans text-main text-[10px] font-normal opacity-60">Architecture studio</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="98" height="65" viewBox="0 0 98 65" fill="none">
          <path d="M1.90735e-06 1L97 1V32.5V64H1.90735e-06" stroke="#C47F3F" strokeWidth="2" className="logo-line"/>
      </svg>
    </Link>
  )
}

export default Logo
