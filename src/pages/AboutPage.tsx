import React from "react";
import {
  FaCheckCircle,
  FaLaptop,
  FaPrint,
  FaWifi,
  FaTools,
  FaCut,
  FaLightbulb,
  FaClipboardList,
  FaBoxOpen,
} from "react-icons/fa";
import { Brands } from "../components/home/Brands";

export const AboutPage = () => {
  return (

    <div className="content-wrapper py-20">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Card de Nosotros con imagen */}
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row items-center lg:items-start">
          {/* Texto */}
          <div className="lg:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Nosotros</h1>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              En <span className="font-semibold">CookiePrint</span>, nos enorgullece ser tu aliado creativo y tecnológico desde el año 2021.
              Nacimos con la visión de ofrecer soluciones integrales en impresión, diseño gráfico y servicios tecnológicos,
              convirtiéndonos en un referente de calidad y confianza en la región.
              <br />
              <br />
              Nos especializamos en impresiones personalizadas que dan vida a tus ideas, ya sea en tazas, playeras, viniles y más.
              Cada producto que sale de nuestras manos lleva el sello de la excelencia y la atención al detalle que nos caracteriza.
            </p>
          </div>
          {/* Imagen con filtro azul */}
          <div className="lg:w-1/2 p-6 flex justify-center relative">
            <div className="w-full lg:w-3/4 aspect-square overflow-hidden relative">
              <img
                src="public/img/fachada.jpg"
                alt="Nosotros"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* Capa azul con opacidad */}
              <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Nuestros Servicios */}
        <section className="mt-16">
          <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">
            Nuestros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjetas de Servicios con Íconos */}
            {[
              { title: "Trámites rápidos y eficientes", icon: <FaClipboardList /> },
              { title: "Reparación de equipos de cómputo", icon: <FaTools /> },
              { title: "Venta de insumos de cómputo", icon: <FaLaptop /> },
              { title: "Internet de fibra óptica", icon: <FaWifi /> },
              { title: "Corte y grabado láser", icon: <FaCut /> },
              { title: "Impresiones 3D", icon: <FaBoxOpen /> },
              { title: "Diseño gráfico personalizado", icon: <FaLightbulb /> },
              { title: "Fotocopiado e impresión digital", icon: <FaPrint /> },
              { title: "Asesoría técnica especializada", icon: <FaCheckCircle /> },
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg flex items-center">
                <span className="text-blue-500 text-2xl mr-3">{service.icon}</span>
                <p className="text-gray-700 font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Estadísticas */}
        <section className="mt-16 bg-blue-600 text-white py-16 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "4", label: "Años brindando servicios" },
              { number: "100%", label: "Clientes Satisfechos" },
              { number: "1000+", label: "Clientes Felices" },
              { number: "3x", label: "Crecimiento en Ventas" },
            ].map((stat, index) => (
              <div key={index} className="statistic">
                <span className="text-5xl font-bold">{stat.number}</span>
                <h5 className="text-lg mt-2">{stat.label}</h5>
              </div>
            ))}
          </div>
        </section>

        {/* Boton para enviar a WhatsApp */}
        <div className="text-center py-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Listo para trabajar juntos?
          </h3>
          <br />
          <a
            href="https://wa.link/dpqbra"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <Brands />

      {/* Ir hacia arriba */}
      <div id="back-to-top" className="fixed bottom-8 right-8">
          <a href="#top" className="bg-yellow-400 text-black p-3 rounded-full hover:bg-blue-700">
            <i className="ui-arrow-up">↑</i>
          </a>
        </div>
    
    </div>

  );
};
