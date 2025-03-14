import React from "react";

export const AboutPage = () => {
  return (
    <main className="main-wrapper">


      {/* Content */}
      <div className="content-wrapper">
        {/* Page Title */}
        <section className="page-title text-center py-20">
          <div className="container">
            <div className="page-title__holder">
              <h1 className="page-title__title text-4xl font-bold mb-4">Nosotros</h1>
              <p className="page-title__subtitle text-lg text-gray-600">
                En CookiePrint, nos enorgullece ser tu aliado creativo y tecnológico desde el año 2021. <br></br> Nacimos con la visión de ofrecer soluciones integrales en impresión, diseño gráfico y servicios tecnológicos, convirtiéndonos en un referente de calidad y confianza en la región.

                <br /> <br />Nos especializamos en impresiones personalizadas que dan vida a tus ideas, ya sea en tazas, playeras, viniles y mucho más. <br />Cada producto que sale de nuestras manos lleva el sello de la excelencia y la atención al detalle que nos caracteriza.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-wrap py-20">
  <div className="container">
    <div className="row justify-center">
      <div className="col-lg-10">
        <div className="benefits bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-center benefits__title text-2xl font-bold mb-6">
            Ofrecemos una amplia gama de servicios, como:
          </h3>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <ul className="benefits__list space-y-4">
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Trámites rápidos y eficientes</span>
              </li>
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Reparación de equipos de cómputo</span>
              </li>
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Venta de insumos de cómputo</span>
              </li>
            </ul>

            {/* Columna 2 */}
            <ul className="benefits__list space-y-4">
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Internet de fibra óptica</span>
              </li>
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Corte y grabado láser</span>
              </li>
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Impresiones 3D</span>
              </li>
            </ul>

            {/* Columna 3 */}
            <ul className="benefits__list space-y-4">
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Diseño gráfico personalizado</span>
              </li>
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Fotocopiado e impresión digital</span>
              </li>
              <li className="benefits__item flex items-center">
                <i className="ui-check benefits__item-icon mr-2">✔️</i>
                <span className="benefits__item-title">Asesoría técnica especializada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Otros */}
        <section className="section-wrap bg-cover bg-center py-20" style={{ backgroundImage: "url(img/statistic/statistic.jpg)" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="statistic text-center">
                <span className="statistic__number text-5xl font-bold">36</span>
                <h5 className="statistic__title text-xl mt-2">Successful Projects</h5>
              </div>
              <div className="statistic text-center">
                <span className="statistic__number text-5xl font-bold">100%</span>
                <h5 className="statistic__title text-xl mt-2">Achieved ROI</h5>
              </div>
              <div className="statistic text-center">
                <span className="statistic__number text-5xl font-bold">550</span>
                <h5 className="statistic__title text-xl mt-2">Happy Customers</h5>
              </div>
              <div className="statistic text-center">
                <span className="statistic__number text-5xl font-bold">3x</span>
                <h5 className="statistic__title text-xl mt-2">Increased Profits</h5>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="call-to-action text-center py-20 bg-gray-100">
          <div className="container">
            <h3 className="call-to-action__title text-3xl font-bold mb-6">
              Get, keep and grow more customers. We’re here to help.
            </h3>
            <a href="#" className="btn btn--lg bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Let’s Work Together
            </a>
          </div>
        </div>

        {/* Ir hacia arriba */}
        <div id="back-to-top" className="fixed bottom-8 right-8">
          <a href="#top" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
            <i className="ui-arrow-up">↑</i>
          </a>
        </div>
      </div>
    </main>
  );
};