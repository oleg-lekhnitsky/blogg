import { useRef } from "react"
import CONFIG from "site.config"
import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const navRef = useRef(null)

  return (
    <div
      className={`sticky-nav m-0 w-full h-3 flex flex-row justify-between items-center mb-2 md:mb-4 py-8 bg-opacity-100 max-w-6x2 px-4 ${
        fullWidth && "px-2 md:px-24"
      }`}
      id="sticky-nav"
      ref={navRef}
    >
      <Logo />
      <div className={`pr-0 font-bold text-xl flex gap-4 items-center md:pr-4`}>
        <ThemeToggle />
        <NavBar />
      </div>
    </div>
  )
}

export default Header
