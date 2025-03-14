import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { socialLinks } from '../../constants/links';

export const Footer = () => {
    return (
        <footer className="py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-12 flex justify-between gap-10 text-white text-sm flex-wrap mt-10 md:flex-nowrap">
            <Link
                to="/"
                className="text-2xl font-bold tracking-tighter transition-all flex-1"
            >
                Cookie Print
            </Link>

            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Suscríbete
                </p>

                <p className="text-xs font-medium">
                    Recibe promociones y novedades exclusivas
                </p>

                <div className="border border-white flex items-center gap-2 px-3 py-2 rounded-full">
                    <input
                        type="tel"
                        placeholder="Número de teléfono"
                        className="pl-2 bg-transparent text-white w-full focus:outline-none"
                    />
                    <button className="text-white">
                        <BiChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Políticas
                </p>
                <nav className="flex flex-col gap-2 text-xs font-medium">
                    <Link to='/productos' className="hover:text-yellow-300">Productos</Link>
                    <Link to='#' className="hover:text-yellow-300">Políticas de privacidad</Link>
                    <Link to='#' className="hover:text-yellow-300">Términos de uso</Link>
                </nav>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Síguenos
                </p>
                <p className="text-xs leading-6">
                    No te pierdas las novedades que Cookie Print tiene para ti
                </p>

                <div className="flex gap-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white border border-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white hover:text-blue-600"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};