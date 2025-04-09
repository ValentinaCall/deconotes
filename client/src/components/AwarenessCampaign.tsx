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
            <div className="relative aspect-[988/1280]">
              <img 
                src="images/awareness.jpeg" 
                alt="Campaña #SaveTheWorld de Deconotes para reciclaje de papel" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <span className="bg-[#2ecc71] text-white text-sm py-1 px-3 rounded-full mb-4 inline-block">Iniciativa actual</span>
              <h3 className="text-2xl font-bold mb-4">Cada hoja cuenta.</h3>
              <p className="text-gray-600 mb-6">Con nuestra campaña #SaveTheWorld, te invitamos a ser parte del cambio: dona las hojas usadas de tus antiguas libretas y ayúdanos a darles una segunda vida. En Deconotes, recolectamos papel reciclado para transformarlo en nuevas libretas ecológicas, reduciendo el desperdicio y fomentando una cultura de reutilización y conciencia ambiental.
              Juntos, podemos escribir un futuro más verde, una página a la vez.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessCampaign;
