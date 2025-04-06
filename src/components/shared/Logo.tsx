import { Link } from "react-router-dom"

interface Props {
    isDashboard?: boolean
}

export const Logo = ({isDashboard}: Props) => {
  return (
    <Link to="/" className={`text-2xl text-white font-bold tracking-tighter transition-all ${isDashboard && 'hover:scale-105'}`}>

      {/* Logo para pantallas medianas y grandes */}
      <p className="hidden md:block">
        Cookie
        <span className="text-yellow-400">Print</span>
      </p>

      {/* Logo para pantallas pequeñas*/}
      <div className="md:hidden flex items-center justify-center">
        <img src="/img/logos/GALLETITA.svg" alt="CookiePrint" className="h-9 w-auto transition-all duration-300" />
      </div>
    </Link>
  )
}

