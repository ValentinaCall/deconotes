const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Quienes somos</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Nuestra misión, nuestra visión y los valores que guían todas nuestras decisiones conforman nuestra identidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="bg-[#3498db] rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">Empoderar a individuos y organizaciones con soluciones innovadoras para tomar notas que mejoren la productividad, la creatividad y la gestión del conocimiento.</p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="bg-[#2ecc71] rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-gray-600">Ser el líder global en gestión inteligente de información, creando herramientas que transformen cómo las personas capturan, organizan y utilizan el conocimiento.</p>
          </div>

          {/* Philosophy */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="bg-[#f39c12] rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Filosofía</h3>
            <p className="text-gray-600">Creemos en el poder de las ideas y que las herramientas adecuadas pueden desbloquear el potencial humano. La innovación, la calidad y la experiencia del usuario están en el corazón de todo lo que hacemos.</p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center">Nuestros objetivos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#3498db]">Corto plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#3498db] mt-1 mr-2"></i>
                  <span>Ampliar la línea de productos con tres nuevas ofertas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#3498db] mt-1 mr-2"></i>
                  <span>Aumentar la cuota de mercado en un 15% en las regiones clave</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#3498db] mt-1 mr-2"></i>
                  <span>Implementar funciones avanzadas de IA en productos existentes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#2ecc71]">Mediano plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Establecer presencia en cinco nuevos mercados internacionales</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Desarrollar un ecosistema de integración multiplataforma</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Lograr operaciones neutras en carbono en todas las instalaciones</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#f39c12]">Largo plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Convertirse en líder de la industria en gestión digital del conocimiento</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Revolucionar el aprendizaje a través de plataformas educativas integradas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Crear un centro global de innovación en tecnología de la información</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategies and Actions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center">Estrategias y Acciones</h3>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Estrategia de Innovación</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-[#3498db] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span>Asignar el 20% de los recursos a iniciativas de I+D</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#3498db] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span>Establecer laboratorios de innovación en los principales centros tecnológicos globales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#3498db] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span>Colaborar con universidades líderes en investigación aplicada</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Estrategia de Expansión de Mercado</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-[#2ecc71] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span>Apuntar a mercados emergentes con ofertas de productos localizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#2ecc71] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span>Desarrollar asociaciones estratégicas con servicios complementarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#2ecc71] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span>Implementar campañas agresivas de marketing digital</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
