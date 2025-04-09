const OrganizationalStructure = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Estructura Organizacional
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nuestra estructura de equipo está diseñada para fomentar la
            innovación, la colaboración y una respuesta rápida a las necesidades
            del mercado.
          </p>
        </div>

        {/* Org Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6 text-center">
            Organigrama de la Empresa
          </h3>

          <div className="org-chart min-w-[800px]">
            {/* CEO */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#3498db] text-white rounded-lg p-4 w-64 text-center">
                <h4 className="font-bold">Gerente General</h4>
                <p className="text-sm">Valentina Calleja</p>
              </div>
            </div>

            {/* Second Level */}
            <div className="flex justify-start gap-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">Gerente de Calidad</h4>
                  <p className="text-sm">Morelia</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">Producción</h4>
                  <p className="text-sm">Pablo</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">Finanzas</h4>
                  <p className="text-sm">Patricio</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>

              {/* Updated Personal */}
              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">Personal</h4>
                  <p className="text-sm">Morena</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>

              {/* Updated Mercadotecnia */}
              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">Mercadotecnia</h4>
                  <p className="text-sm">Nicolás</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Áreas Funcionales</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">Producción</h4>
                <p className="text-gray-600">
                  Supervisa el proceso de fabricación de libretas ecológicas,
                  desde la selección de materiales reciclados hasta el
                  ensamblaje final, asegurando altos estándares de calidad y
                  sostenibilidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">Diseño</h4>
                <p className="text-gray-600">
                  Desarrolla conceptos creativos y estéticos para nuestras
                  libretas, enfocándose en diseños atractivos y funcionales que
                  reflejen nuestro compromiso con la sostenibilidad y la
                  innovación.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">
                  Marketing y Ventas
                </h4>
                <p className="text-gray-600">
                  Crea y ejecuta estrategias para construir reconocimiento de
                  marca, generar prospectos y fomentar la adopción de productos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">
                  Administrativa
                </h4>
                <p className="text-gray-600">
                  Gestiona los recursos financieros, humanos y materiales de la
                  empresa, asegurando una operación eficiente y el cumplimiento
                  de objetivos organizacionales. Supervisa la contabilidad,
                  nómina y procesos administrativos.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Recursos de la Empresa</h3>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF6634] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-recycle text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Materiales</h4>
                    <p className="text-sm text-gray-600">
                      Para elaborar nuestras libretas necesitamos hojas usadas o
                      papel reciclado, agua, pinturas, marcos o moldes,
                      electricidad, tijeras o guillotina y espirales o
                      engargolados.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#2ecc71] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-money-bill text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Financieros</h4>
                    <p className="text-sm text-gray-600">
                      Compra de materiales iniciales, costos de producción,
                      algunos costos de marketing y costos de engargolados.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#3498db] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Humanos</h4>
                    <p className="text-sm text-gray-600">
                      Diseñador gráfico, encargados de producción, persona de
                      ventas, gerentes y administradores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalStructure;
