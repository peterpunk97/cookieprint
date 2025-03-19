"use client"

import { NavLink } from "react-router-dom"
import { navbarLinks } from "../../constants/links"
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi"
import { Link } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6"
import { Logo } from "./Logo"
import { useState, useEffect } from "react"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detect scroll to add shadow and backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-600/95 via-blue-700/95 to-blue-800/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="relative z-20">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 ${
                  isActive ? "text-yellow-300 bg-blue-800/40" : "text-white hover:text-yellow-300 hover:bg-blue-800/30"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 lg:gap-3 relative z-20">
          {/* Search Button */}
          <button
            className="p-2 rounded-full hover:bg-blue-800/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
            aria-label="Buscar"
          >
            <HiOutlineSearch className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </button>

          {/* User Account */}
          <Link to="/account" className="relative overflow-hidden group" aria-label="Mi cuenta">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white flex items-center justify-center text-lg font-bold bg-blue-700 text-white uppercase transition-all duration-300 group-hover:bg-white group-hover:text-blue-700">
              p
            </div>
            <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>

          {/* Shopping Cart */}
          <button
            className="p-2 rounded-full hover:bg-blue-800/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 relative"
            aria-label="Carrito de compras"
          >
            <HiOutlineShoppingBag className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-yellow-300 text-blue-700 text-xs font-bold rounded-full shadow-md transform transition-transform duration-300 hover:scale-110">
              0
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 rounded-full md:hidden hover:bg-blue-800/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <FaBarsStaggered
              className={`w-5 h-5 text-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-gradient-to-b from-blue-700 to-blue-800 shadow-lg transition-all duration-300 overflow-hidden md:hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col space-y-1">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                  isActive ? "text-yellow-300 bg-blue-900/40" : "text-white hover:text-yellow-300 hover:bg-blue-900/30"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

