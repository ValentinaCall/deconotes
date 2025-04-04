import { initiatives } from '@/lib/data';

const AwarenessCampaign = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Campaña de Concientización</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">En Deconotes, creemos en generar un impacto positivo en la sociedad y el medio ambiente a través de nuestras prácticas comerciales e iniciativas.</p>
        </div>

        {/* Campaña Principal */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Campaña de Alfabetización Digital" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <span className="bg-[#2ecc71] text-white text-sm py-1 px-3 rounded-full mb-4 inline-block">Iniciativa Actual</span>
              <h3 className="text-2xl font-bold mb-4">Alfabetización Digital para Todos</h3>
              <p className="text-gray-600 mb-6">Nuestra iniciativa social insignia busca cerrar la brecha digital proporcionando educación tecnológica y recursos a comunidades desatendidas en todo el mundo.</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#3498db] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-users text-white text-sm"></i>
                  </div>
                  <span className="text-sm font-medium">Más de 15,000 Beneficiarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#3498db] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-globe text-white text-sm"></i>
                  </div>
                  <span className="text-sm font-medium">12 Países</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#3498db] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-laptop text-white text-sm"></i>
                  </div>
                  <span className="text-sm font-medium">Más de 5,000 Dispositivos Donados</span>
                </div>
              </div>
              <button className="bg-[#f39c12] hover:bg-yellow-500 text-white py-2 px-6 rounded-lg transition duration-300">Saber Más</button>
            </div>
          </div>
        </div>

        {/* Galería de la Campaña */}
        <h3 className="text-2xl font-bold mb-6">Nuestras Iniciativas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {initiatives.map(initiative => (
            <div key={initiative.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <img 
                  src={initiative.image} 
                  alt={initiative.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-2">{initiative.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{initiative.description}</p>
                <a href="#" className="text-[#3498db] font-medium hover:underline text-sm flex items-center">
                  <span>Leer Más</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Métricas de Impacto */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Nuestro Impacto en Números</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-[#3498db] text-4xl font-bold mb-2">35%</div>
              <p className="text-gray-600">Reducción de la huella de carbono en los últimos 2 años</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-[#3498db] text-4xl font-bold mb-2">$1.2M</div>
              <p className="text-gray-600">Invertidos anualmente en iniciativas de impacto social</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-[#3498db] text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-600">Escuelas equipadas con tecnología moderna</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-[#3498db] text-4xl font-bold mb-2">8,000+</div>
              <p className="text-gray-600">Horas de voluntariado aportadas por nuestro equipo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessCampaign;
