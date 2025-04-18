import { Link } from "react-router-dom"

interface Props {
  isDashboard?: boolean
}

export const Logo = ({ isDashboard }: Props) => {
  return (
    <Link to="/" className={`font-bold tracking-tighter transition-all ${isDashboard && "hover:scale-105"}`}>
      {/* Logo para pantallas medianas y grandes */}
      <div className="hidden md:block">
        <img
          src="/img/cookie-logo.png"
          alt="CookiePrint"
          className="h-10 w-auto transition-all duration-300"
        />
      </div>

      {/* Logo para pantallas pequeñas*/}
      <div className="md:hidden flex items-center justify-center">
        <img src="/img/logos/GALLETITA.svg" alt="CookiePrint" className="h-9 w-auto transition-all duration-300" />
      </div>
    </Link>
  )
}
