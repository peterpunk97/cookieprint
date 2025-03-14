import { AiFillLike } from "react-icons/ai";
import { FaCheck, FaStar } from "react-icons/fa6";

export const FeatureGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-6 mb-16 lg:grid-cols-3 lg:gap-8 justify-items-center">
            {[
                { icon: <AiFillLike />, title: "LA MEJOR OPCIÓN", text: "5 años de crecimiento constante nos han posicionado como la mejor opción a nivel regional." },
                { icon: <FaCheck />, title: "CALIDAD", text: "Solo vendemos y creamos productos con la mejor calidad utilizando los mejores materiales y tecnología reciente." },
                { icon: <FaStar />, title: "GARANTÍA", text: "Queremos que ames tus productos personalizados tanto como a nosotros, contamos con la mejor garantía de satisfacción al cliente." }
            ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-4 bg-white shadow-lg p-6 rounded-2xl border border-gray-200 transition-transform transform hover:scale-105">
                    <div className="text-blue-600 text-5xl">{feature.icon}</div>
                    <div className="text-center">
                        <p className="font-semibold text-gray-800 text-lg">{feature.title}</p>
                        <p className="text-sm text-gray-600">{feature.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
