export default function Politicas() {
    return (

        
      <div className="max-w-6xl mx-auto px-4 py-8">
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-8 text-center">Política de Privacidad</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Introducción */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Introducción</h2>
            <p className="mb-4">
              En CookiePrint, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos,
              utilizamos, divulgamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.
            </p>
          </div>
  
          {/* Card 2: Información que Recopilamos */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Información que Recopilamos</h2>
            <p className="mb-2">Podemos recopilar los siguientes tipos de información:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
              <li>Información de facturación y pago</li>
              <li>Detalles de la cuenta</li>
              <li>Historial de compras</li>
              <li>Información del dispositivo y navegación</li>
            </ul>
          </div>
  
          {/* Card 3: Cómo Utilizamos su Información */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Cómo Utilizamos su Información</h2>
            <p className="mb-2">Utilizamos su información personal para:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Procesar y completar sus pedidos</li>
              <li>Comunicarnos con usted sobre su cuenta o pedidos</li>
              <li>Enviarle actualizaciones y promociones (con su consentimiento)</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>
  
          {/* Card 4: Compartir su Información */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Compartir su Información</h2>
            <p className="mb-4">
              No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>Socios comerciales con su consentimiento</li>
              <li>Autoridades legales cuando sea requerido por ley</li>
            </ul>
          </div>
  
          {/* Card 5: Cookies y Tecnologías Similares */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Cookies y Tecnologías Similares</h2>
            <p className="mb-4">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el
              tráfico y personalizar el contenido. Puede gestionar sus preferencias de cookies a través de la
              configuración de su navegador.
            </p>
          </div>
  
          {/* Card 6: Sus Derechos */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Sus Derechos</h2>
            <p className="mb-2">Dependiendo de su ubicación, puede tener derecho a:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Corregir información inexacta</li>
              <li>Eliminar su información</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Retirar su consentimiento</li>
            </ul>
          </div>
  
          {/* Card 7: Seguridad de la Información */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Seguridad de la Información</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra
              acceso no autorizado, pérdida o alteración.
            </p>
          </div>
  
          {/* Card 8: Cambios a esta Política */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Cambios a esta Política</h2>
            <p className="mb-4">
              Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio
              significativo publicando la nueva política en nuestro sitio web.
            </p>
          </div>
        </div>
  
        {/* Card de Contacto - Ancho completo */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Contacto</h2>
          <p className="mb-4">Si tiene preguntas o inquietudes sobre nuestra Política de Privacidad, contáctenos en:</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: privacy@cookieprint.com</p>
            <p>Teléfono: +1 (555) 123-4567</p>
            <p>Dirección: Av. Tecnología 123, Ciudad Innovación</p>
          </div>
        </div>
  
        {/* Iconos informativos */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-center">Datos Protegidos</p>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p className="text-center">Conexión Segura</p>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-center">Actualizado 2025</p>
          </div>
        </div>
      </div>
    )
  }
  
  