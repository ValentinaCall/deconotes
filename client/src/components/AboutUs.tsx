const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Quienes somos</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Somos un equipo comprometido con el cambio, apasionados por el diseño sostenible y convencidos de que cada acción, por pequeña que sea, puede marcar la diferencia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="bg-[#3498db] rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">Crear libretas ecológica que permitan escribir, decorar y personalizar con estilo.</p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="bg-[#2ecc71] rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-gray-600">Ser una opción creativa y sustentable para quienes buscan papelería única y amigable con el planeta.</p>
          </div>

          {/* Philosophy */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="bg-[#f39c12] rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Filosofía</h3>
            <p className="text-gray-600">Creemos en la creatividad sin desperdicio, transformando materiales reciclados como papel, en libretas únicas que inspiran y cuidan el planeta. Buscamos innovar con cada libreta que creamos, haciendo así que nuestro cliente exprese su creatividad en cada hoja.</p>
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
                  <span>Diseñar y desarrollar los primeros prototipos de la libreta con papel reciclado.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#3498db] mt-1 mr-2"></i>
                  <span>Definir el diseño estético y funcional, alineado con la temática ecológica.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#2ecc71]">Mediano plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Expandir la distribución a tiendas locales, papelerías y plataformas en línea.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Implementar estrategias para posicionar la libreta como un producto ecológico y sostenible.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#f39c12]">Largo plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Expandir la marca a nivel nacional o internacional.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Colaborar con organizaciones ambientales para fomentar el reciclaje y la reforestación.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategies and Actions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center">Acciones</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#3498db]">Corto plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#3498db] mt-1 mr-2"></i>
                  <span>Investigación de materiales: Buscar papel reciclado de calidad, resistente y con colores atractivos.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#3498db] mt-1 mr-2"></i>
                  <span>Pruebas de diseño: Crear distintos prototipos para evaluar cuál es el más funcional y atractivo.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#2ecc71]">Mediano plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Estrategia de ventas: Contactar tiendas locales, papelerías y plataformas en línea para distribuir la libreta.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Marketing ecológico: Resaltar los beneficios sostenibles del producto en redes sociales y empaques.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#2ecc71] mt-1 mr-2"></i>
                  <span>Colaboraciones: Trabajar con influencers o activistas ecológicos para aumentar la visibilidad del producto.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-bold mb-3 text-[#f39c12]">Largo plazo</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Escalar la producción: Mejorar procesos para fabricar más libretas sin perder calidad ni sostenibilidad.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#f39c12] mt-1 mr-2"></i>
                  <span>Expansión del catálogo: Incluir otros productos ecológicos como cuadernos más grandes, agendas o lápices reciclados.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
