import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { Logo } from "./Logo";

export const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-4 flex items-center justify-between px-5 border-b border-blue-700 lg:px-12 shadow-lg">
            <Logo />

            <nav className="space-x-5 hidden md:flex">
                {navbarLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.href}
                        className={({ isActive }) => `${isActive ? 'text-yellow-300 underline' : ''} transition-all duration-300 font-medium hover:text-yellow-300 hover:underline`}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </nav>

            <div className="flex gap-5 items-center">
                <button className="hover:text-yellow-300 transition-all duration-300">
                    <HiOutlineSearch size={25} />
                </button>

                <div className="relative">
                    {/* User Nav */}
                    <Link to='/account' className='border-2 border-white w-9 h-9 rounded-full grid place-items-center text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300'>
                        p
                    </Link>
                </div>

                <button className="relative hover:text-yellow-300 transition-all duration-300">
                    <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-yellow-300 text-blue-600 text-xs rounded-full">0</span>
                    <HiOutlineShoppingBag size={25} />
                </button>
            </div>

            <button className="md:hidden hover:text-yellow-300 transition-all duration-300">
                <FaBarsStaggered size={25} />
            </button>
        </header>
    );
};