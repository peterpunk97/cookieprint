import { Link } from "react-router-dom";
import bannerImg from "/public/img/img-banner.png"; // solo si estás usando CRA
// ⚠️ En Vite usa: import bannerImg from '@/assets/img-banner.png' (ajusta según tu estructura)

export const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* IMAGEN DE FONDO */}
      <img
        src={bannerImg}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY CON DEGRADADO AZUL Y OPACIDAD */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-700/30" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
        <h1 className="h1 text-4xl font-bold mb-4 lg:text-6xl">
          Bienvenido
        </h1>

        <p className="text-lg lg:text-2xl">
          Convierte tus ideas en productos
        </p>
        <br />

        {/* BOTÓN CON DEGRADADO AMARILLO */}
        <Link
          to="/productos"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out text-shadow-60"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
};
