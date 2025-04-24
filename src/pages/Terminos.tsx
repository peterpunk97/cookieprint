export default function Terminos() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <br />
        <br />
        <h1 className="text-3xl font-bold mb-8 text-center">Términos y Condiciones</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Aceptación de Términos */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Aceptación de Términos</h2>
            <p className="mb-4">
              Al acceder y utilizar el sitio web de CookiePrint, usted acepta cumplir y quedar obligado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, no debe utilizar este sitio.
            </p>
          </div>
  
          {/* Card 2: Uso del Sitio */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Uso del Sitio</h2>
            <p className="mb-4">
              Usted se compromete a utilizar el sitio web únicamente para fines legales y de manera que no infrinja los derechos de otros usuarios ni restrinja su disfrute del sitio.
            </p>
          </div>
  
          {/* Card 3: Propiedad Intelectual */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido del sitio, incluyendo textos, imágenes, logotipos, y software, es propiedad de CookiePrint y está protegido por leyes de derechos de autor.
            </p>
          </div>
  
          {/* Card 4: Pedidos y Pagos */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Pedidos y Pagos</h2>
            <p className="mb-4">
              Al realizar un pedido, usted acepta proporcionar información veraz y completa. Los pagos se procesan de forma segura a través de nuestras plataformas autorizadas.
            </p>
          </div>
  
          {/* Card 5: Limitación de Responsabilidad */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Limitación de Responsabilidad</h2>
            <p className="mb-4">
              CookiePrint no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso del sitio.
            </p>
          </div>
  
          {/* Card 6: Modificaciones */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Modificaciones</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones se harán efectivas una vez publicadas en este sitio.
            </p>
          </div>
  
          {/* Card 7: Ley Aplicable */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Ley Aplicable</h2>
            <p className="mb-4">
              Estos Términos y Condiciones se rigen por las leyes de México, sin perjuicio de los principios de conflicto de leyes.
            </p>
          </div>
        </div>
  
        {/* Contacto */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4 text-[#2563EB]">Contacto</h2>
          <p className="mb-4">Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos:</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: galletitasdigitales@gmail.com</p>
            <p>Teléfono: 443 942 5742</p>
            <p>Dirección: Calle Hidalgo #14-B, Queréndaro Michoacán, México.</p>
          </div>
        </div>
      </div>
    );
  }
  