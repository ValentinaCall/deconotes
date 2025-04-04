const MarketingStrategies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Estrategias de comercialización</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Nuestro enfoque para llegar a los clientes y construir relaciones duraderas a través de un marketing innovador.</p>
        </div>

        {/* Canales de Marketing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Nuestros Canales de Marketing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#3498db] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i className="fas fa-globe text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-bold">Marketing Digital</h4>
              </div>
              <p className="text-gray-600 mb-4">Estrategia digital integral en búsqueda, redes sociales y marketing de contenido para llegar a las audiencias donde están.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">SEO</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">PPC</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Email</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Contenido</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#2ecc71] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-bold">Construcción de Comunidad</h4>
              </div>
              <p className="text-gray-600 mb-4">Fomentar comunidades de usuarios sólidas a través de eventos, foros y programas de embajadores para impulsar el compromiso y la lealtad.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Grupos de Usuarios</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Foros</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Webinars</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Encuentros</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#f39c12] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <i className="fas fa-handshake text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-bold">Marketing de Alianzas</h4>
              </div>
              <p className="text-gray-600 mb-4">Alianzas estratégicas con marcas e influencers complementarios para ampliar el alcance y mejorar la credibilidad.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Co-marketing</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Influencers</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Integraciones</span>
                <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">Referencias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estrategias de Ventas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Enfoque de Ventas</h3>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4">Nuestra Metodología de Ventas</h4>
                <p className="text-gray-600 mb-6">Empleamos un enfoque de ventas consultivo centrado en comprender las necesidades del cliente y proporcionar soluciones personalizadas.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#3498db] text-white rounded-full w-8 h-8 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-bold mb-1">Descubrimiento</h5>
                      <p className="text-gray-600 text-sm">Comprender los desafíos, objetivos y requisitos del cliente a través de una consulta en profundidad.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#3498db] text-white rounded-full w-8 h-8 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-bold mb-1">Diseño de Solución</h5>
                      <p className="text-gray-600 text-sm">Crear una recomendación personalizada basada en las necesidades específicas del cliente.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#3498db] text-white rounded-full w-8 h-8 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-bold mb-1">Demostración</h5>
                      <p className="text-gray-600 text-sm">Mostrar el valor y la funcionalidad de nuestros productos en el contexto del cliente.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#3498db] text-white rounded-full w-8 h-8 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">4</div>
                    <div>
                      <h5 className="font-bold mb-1">Implementación</h5>
                      <p className="text-gray-600 text-sm">Asegurar una incorporación fluida y una adopción exitosa de nuestras soluciones.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gray-50">
                <h4 className="text-xl font-bold mb-4">Canales de Ventas</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-shopping-cart text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Ventas Directas en Línea</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Nuestra plataforma de comercio electrónico ofrece una experiencia de compra fluida para consumidores individuales y pequeñas empresas.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-store text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Alianzas Minoristas</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Presencia estratégica en minoristas seleccionados para proporcionar una experiencia práctica con nuestros productos de hardware.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-briefcase text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Equipo de Ventas Empresariales</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Ejecutivos de cuentas dedicados para grandes organizaciones que requieren soluciones personalizadas y precios empresariales.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-handshake text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Socios de Canal</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Red de revendedores certificados y socios de implementación para extender nuestro alcance globalmente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estrategias Promocionales */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Actividades Promocionales</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold mb-4">Promociones Actuales</h4>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold">Paquete de Productividad de Verano</h5>
                    <span className="bg-[#f39c12] text-white text-xs py-1 px-2 rounded-full">Tiempo Limitado</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Obtén DecoNote Pro y DecoTablet juntos con un 25% de descuento sobre el precio regular.</p>
                  <p className="text-[#3498db] font-medium text-sm">Usa el código: SUMMER25</p>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold">Programa de Descuento Educativo</h5>
                    <span className="bg-[#2ecc71] text-white text-xs py-1 px-2 rounded-full">En Curso</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Precios especiales para estudiantes, profesores e instituciones educativas.</p>
                  <p className="text-[#3498db] font-medium text-sm">15-30% de descuento con verificación</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold">Recompensas por Referencias</h5>
                    <span className="bg-[#2ecc71] text-white text-xs py-1 px-2 rounded-full">En Curso</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Recomienda a un amigo y ambos recibirán 3 meses de DecoCloud premium gratis.</p>
                  <p className="text-[#3498db] font-medium text-sm">Disponible en tu panel de cuenta</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold mb-4">Canales de Publicidad</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <i className="fab fa-google text-2xl text-[#3498db]"></i>
                  </div>
                  <h5 className="font-bold mb-2">Marketing en Búsqueda</h5>
                  <p className="text-gray-600 text-sm">Búsqueda pagada dirigida en plataformas principales para captar tráfico de alta intención.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <i className="fab fa-instagram text-2xl text-[#3498db]"></i>
                  </div>
                  <h5 className="font-bold mb-2">Redes Sociales</h5>
                  <p className="text-gray-600 text-sm">Presencia estratégica en plataformas donde nuestra audiencia más interactúa.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <i className="fas fa-podcast text-2xl text-[#3498db]"></i>
                  </div>
                  <h5 className="font-bold mb-2">Patrocinios de Podcasts</h5>
                  <p className="text-gray-600 text-sm">Alianzas con podcasts de productividad y tecnología alineados con nuestra audiencia.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <i className="fas fa-newspaper text-2xl text-[#3498db]"></i>
                  </div>
                  <h5 className="font-bold mb-2">Publicaciones de la Industria</h5>
                  <p className="text-gray-600 text-sm">Publicidad dirigida en publicaciones de tecnología y negocios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategies;
