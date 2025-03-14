import { AiFillLike } from "react-icons/ai";
import { FaCheck, FaRegHandshake, FaStar } from "react-icons/fa6";

export const FeatureGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-6 mb-16 lg:grid-cols-3 lg:gap-5 justify-items-center">
            <div className="flex flex-col items-center gap-4">
                <AiFillLike size={50} className="text-slate-600" />
                <div className="text-center">
                    <p className="font-semibold">
                        LA MEJOR OPCIÓN
                    </p>
                    <p className="text-sm">5 años de crecimiento constante nos han posicionado
                        como la mejor opción a nivel regional.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <FaCheck  size={50} className="text-slate-600" />
                <div className="text-center">
                    <p className="font-semibold">
                        CALIDAD
                    </p>
                    <p className="text-sm">Solo vendemos y creamos productos con la mejor calidad
                        utilizando los mejores materiales y tecnología reciente.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <FaStar size={50} className="text-slate-600" />
                <div className="text-center">
                    <p className="font-semibold">
                        GARANTÍA
                    </p>
                    <p className="text-sm">Queremos que ames tus productos personalizados tanto como a nosotros,
                        contamos con la mejor garantía de satisfacción al cliente.
                    </p>
                </div>
            </div>
        </div>
    );
};