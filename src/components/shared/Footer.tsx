import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { socialLinks } from "../../constants/links";
import { Logo } from "./Logo";
import { useState, FormEvent } from "react";

export const Footer = () => {
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Por favor ingresa un número válido de 10 dígitos.");
      return;
    }

    // Aquí procesarías el número telefónico (puedes enviar a backend, etc.)
    console.log("Número válido enviado:", phone);
    setPhone(""); // Limpia el campo después de enviar
  };

  return (
    <footer className="py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-12 flex justify-between gap-10 text-white text-sm flex-wrap mt-10 md:flex-nowrap relative">
      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDI1QzIwIDI1IDIwIDUwIDQwIDUwQzYwIDUwIDYwIDI1IDgwIDI1QzEwMCAyNSAxMDAgNTAgMTIwIDUwQzE0MCA1MCAxNDAgMjUgMTYwIDI1QzE4MCAyNSAxODAgNTAgMjAwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <Link to="/" className="text-2xl font-bold tracking-tighter transition-all flex-1 hover:scale-105 duration-300">
        <Logo />
      </Link>

      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter text-yellow-300">Suscríbete</p>

        <p className="text-xs font-medium">Recibe promociones y novedades exclusivas</p>

        <form
          onSubmit={handleSubmit}
          className="border border-white/70 flex items-center gap-2 px-3 py-2 rounded-full transition-all hover:border-yellow-300 focus-within:border-yellow-300 focus-within:shadow-[0_0_10px_rgba(253,224,71,0.3)] group"
        >
          <input
            type="tel"
            placeholder="Número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} // solo números
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            inputMode="numeric"
            required
            className="pl-2 bg-transparent text-white w-full focus:outline-none"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-yellow-300 hover:text-blue-700 p-1 rounded-full transition-all duration-300"
          >
            <BiChevronRight size={20} />
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter text-yellow-300">Políticas</p>
        <nav className="flex flex-col gap-2 text-xs font-medium">
          <Link to="/productos" className="hover:text-yellow-300 transition-colors duration-200 flex items-center">
            <span className="transform translate-x-0 hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
              Productos
            </span>
          </Link>
          <Link to="#" className="hover:text-yellow-300 transition-colors duration-200 flex items-center">
            <span className="transform translate-x-0 hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
              Políticas de privacidad
            </span>
          </Link>
          <Link to="#" className="hover:text-yellow-300 transition-colors duration-200 flex items-center">
            <span className="transform translate-x-0 hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
              Términos de uso
            </span>
          </Link>
        </nav>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter text-yellow-300">Síguenos</p>
        <p className="text-xs leading-6">No te pierdas las novedades que Cookie Print tiene para ti</p>

        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-white border border-white/70 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                            hover:border-yellow-300 hover:text-yellow-300 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)] hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"></div>
    </footer>
  );
};
