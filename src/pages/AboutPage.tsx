"use client"

import { useEffect, useState } from "react"
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
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa"
import { Brands } from "../components/home/Brands"

export const AboutPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    {
      title: "Trámites rápidos y eficientes",
      icon: <FaClipboardList />,
      description: "Gestión de documentos oficiales con rapidez y eficacia.",
    },
    {
      title: "Reparación de equipos de cómputo",
      icon: <FaTools />,
      description: "Soluciones técnicas para todo tipo de problemas informáticos.",
    },
    {
      title: "Venta de insumos de cómputo",
      icon: <FaLaptop />,
      description: "Equipos y accesorios de las mejores marcas del mercado.",
    },
    {
      title: "Internet de fibra óptica",
      icon: <FaWifi />,
      description: "Conexión estable y de alta velocidad para tu hogar o negocio.",
    },
    {
      title: "Corte y grabado láser",
      icon: <FaCut />,
      description: "Precisión milimétrica para tus proyectos personalizados.",
    },
    {
      title: "Impresiones 3D",
      icon: <FaBoxOpen />,
      description: "Da vida a tus diseños con nuestra tecnología de impresión 3D.",
    },
    {
      title: "Diseño gráfico personalizado",
      icon: <FaLightbulb />,
      description: "Creatividad y profesionalismo para tu marca o proyecto.",
    },
    {
      title: "Fotocopiado e impresión digital",
      icon: <FaPrint />,
      description: "Servicios de alta calidad para documentos y materiales.",
    },
    {
      title: "Asesoría técnica especializada",
      icon: <FaCheckCircle />,
      description: "Orientación profesional para tus proyectos tecnológicos.",
    },
  ]

  const stats = [
    { number: "4", label: "Años brindando servicios", description: "Experiencia y confianza desde 2021" },
    { number: "100%", label: "Clientes Satisfechos", description: "Compromiso con la excelencia" },
    { number: "1000+", label: "Clientes Felices", description: "Confianza de la comunidad" },
    { number: "3x", label: "Crecimiento en Ventas", description: "Expansión constante" },
  ]

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Card de Nosotros */}
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl font-bold text-blue-600 mb-6 relative">
                Nosotros
                <span className="block h-1 w-20 bg-blue-600 mt-4"></span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                En <span className="font-semibold text-blue-600">CookiePrint</span>, nos enorgullece ser mucho más que una empresa: somos tu <strong>aliado creativo y tecnológico</strong> desde el año <strong>2021</strong>. Nacimos con una visión clara: <strong>ofrecer soluciones integrales</strong> en impresión, diseño gráfico y servicios tecnológicos que superen expectativas y transformen ideas en realidades palpables. Desde nuestros inicios, hemos trabajado con pasión y compromiso para convertirnos en un <strong>referente de calidad, innovación y confianza</strong> en la región.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Nuestra especialidad son las <strong>impresiones personalizadas</strong> que reflejan la esencia de cada cliente. Ya sea en <strong>tazas, playeras, viniles, gorras, pines u otros productos</strong>, cada pieza que producimos es única, cuidada al detalle y elaborada con materiales de primera calidad. Nos emociona formar parte de momentos especiales, ideas de negocio, proyectos personales y campañas corporativas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                En CookiePrint, entendemos que cada diseño cuenta una historia, por eso combinamos <strong>creatividad, tecnología de vanguardia y atención personalizada</strong> para asegurar que cada producto hable por sí mismo. Seguimos creciendo contigo, renovando nuestro compromiso día a día para ofrecerte soluciones creativas, efectivas y con ese toque especial que nos distingue.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="h-full overflow-hidden">
                <img
                  src="/img/fachada.jpg"
                  alt="Fachada de CookiePrint"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-600/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-3">Nuestros Servicios</h2>
          <div className="flex justify-center mb-10">
            <span className="block h-1 w-20 bg-blue-600"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-t-4 border-transparent hover:border-blue-500"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Estadísticas */}
        <section className="mt-24 relative overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-8 rounded-xl shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            <h2 className="text-center text-3xl font-bold mb-12">Nuestros Logros</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <span className="text-5xl font-bold block mb-2">{stat.number}</span>
                  <h5 className="text-xl font-medium mb-2">{stat.label}</h5>
                  <p className="text-blue-100">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center py-16 bg-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">¿Listo para trabajar juntos?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a hacer realidad tus proyectos con soluciones
            personalizadas y de alta calidad.
          </p>
          <a
            href="https://wa.link/dpqbra"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Contáctanos por WhatsApp
          </a>
        </section>
      </div>

      {/* Marcas */}
      <div className="mt-24">
        <Brands />
      </div>

      {/* Botón subir */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg z-50 hover:transform hover:scale-110"
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}
