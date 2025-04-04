const OrganizationalStructure = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Estructura Organizacional</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Nuestra estructura de equipo está diseñada para fomentar la innovación, la colaboración y una respuesta rápida a las necesidades del mercado.</p>
        </div>

        {/* Org Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Organigrama de la Empresa</h3>
          
          <div className="org-chart min-w-[800px]">
            {/* CEO */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#3498db] text-white rounded-lg p-4 w-64 text-center">
                <h4 className="font-bold">CEO</h4>
                <p className="text-sm">Valentina Calleja</p>
              </div>
            </div>
            
            {/* Second Level */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">CTO</h4>
                  <p className="text-sm">Michael Johnson</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">CFO</h4>
                  <p className="text-sm">Sarah Williams</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#2ecc71] text-white rounded-lg p-3 w-48 text-center">
                  <h4 className="font-bold">CMO</h4>
                  <p className="text-sm">David Chen</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>
            </div>
            
            {/* Third Level */}
            <div className="flex justify-between gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg p-2 w-36 text-center">
                  <h4 className="font-bold text-sm">Desarrollo</h4>
                  <p className="text-xs">25 miembros</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg p-2 w-36 text-center">
                  <h4 className="font-bold text-sm">Investigación</h4>
                  <p className="text-xs">12 miembros</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg p-2 w-36 text-center">
                  <h4 className="font-bold text-sm">Finanzas</h4>
                  <p className="text-xs">8 miembros</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg p-2 w-36 text-center">
                  <h4 className="font-bold text-sm">Contabilidad</h4>
                  <p className="text-xs">6 miembros</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg p-2 w-36 text-center">
                  <h4 className="font-bold text-sm">Digital</h4>
                  <p className="text-xs">10 miembros</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg p-2 w-36 text-center">
                  <h4 className="font-bold text-sm">Ventas</h4>
                  <p className="text-xs">15 miembros</p>
                </div>
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
                <h4 className="font-bold text-[#3498db] mb-2">Desarrollo de Productos</h4>
                <p className="text-gray-600">Responsable de diseñar, desarrollar y mejorar nuestros productos de software y hardware utilizando metodologías ágiles.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">Investigación e Innovación</h4>
                <p className="text-gray-600">Explora tecnologías emergentes y necesidades de los usuarios para desarrollar la próxima generación de soluciones para tomar notas.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">Marketing y Ventas</h4>
                <p className="text-gray-600">Crea y ejecuta estrategias para construir reconocimiento de marca, generar prospectos y fomentar la adopción de productos.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-bold text-[#3498db] mb-2">Atención al Cliente</h4>
                <p className="text-gray-600">Proporciona asistencia técnica y orientación sobre productos para garantizar la satisfacción y retención del cliente.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Recursos de la Empresa</h3>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3498db] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">110+</h4>
                    <p className="text-sm text-gray-600">Empleados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ecc71] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-building text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">5</h4>
                    <p className="text-sm text-gray-600">Oficinas Globales</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#f39c12] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-laptop-code text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">15+</h4>
                    <p className="text-sm text-gray-600">Productos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-award text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">12</h4>
                    <p className="text-sm text-gray-600">Premios de la Industria</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#3498db] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-globe text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">25+</h4>
                    <p className="text-sm text-gray-600">Países Servidos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ecc71] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-flask text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">3</h4>
                    <p className="text-sm text-gray-600">Laboratorios de Investigación</p>
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
