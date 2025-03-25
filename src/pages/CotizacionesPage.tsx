"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useEffect, useState } from "react"

export const CotizacionesPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  // Mostrar botón de scroll solo cuando se ha desplazado hacia abajo
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

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-blue-200 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-100 border-b border-blue-200 p-4 flex items-center">
            <span className="text-blue-700 mr-2">🛠️</span>
            <h1 className="text-2xl font-bold text-blue-800">Módulo de Cotizaciones</h1>
          </div>
          <div className="p-6">
            <div className="space-y-6 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900">Esta sección continúa en desarrollo</h2>

              <p className="text-blue-700">
                Estamos trabajando para ofrecerte la mejor experiencia en la gestión de cotizaciones. Pronto tendrás
                acceso a todas las funcionalidades.
              </p>

              <div className="max-w-xs mx-auto">
                <DotLottieReact
                  src="https://lottie.host/c4407925-be46-47c7-aae3-74bb5baaf7d0/MxvCtv8l18.lottie"
                  loop
                  autoplay
                  className="w-full"
                />
              </div>

              <div className="pt-4">
                <button
                  className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-md hover:bg-blue-100"
                  onClick={() => window.history.back()}
                >
                  Volver atrás
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para ir hacia arriba - solo visible al hacer scroll */}
      {showScrollButton && (
        <button
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-md bg-yellow-400 hover:bg-yellow-500 text-black"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  )
}

