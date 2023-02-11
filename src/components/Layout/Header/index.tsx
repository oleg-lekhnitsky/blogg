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
    
      className={`nav m-0 w-full flex flex-row justify-between items-bottom md:mb-8 pt-4 bg-opacity-100 max-w-6x2 ${
        fullWidth && "px-2 md:px-24"
      }`}
      id="sticky-nav"
      ref={navRef}
    > 
      <Logo />
      
      <div className={`pr-0 flex gap-4 items-bottom md:pr-4`}>
        <ThemeToggle />
        <NavBar />
      </div>
    </div>
  )
}

export default Header
