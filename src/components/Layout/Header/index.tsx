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
    
      className={`nav-wrapper ${
        fullWidth && "px-2 md:px-24"
      }`}
      id="sticky-nav"
      ref={navRef}
    > 
      <Logo />
      
      <div className={`nav-links`}>
        <NavBar />
        <ThemeToggle />
        
      </div>
    </div>
  )
}

export default Header
