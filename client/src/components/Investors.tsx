import { financialReports, companyNews } from '@/lib/data';
import RevenueChart from './charts/RevenueChart';
import MarketShareChart from './charts/MarketShareChart';
import InvestmentChart from './charts/InvestmentChart';

const Investors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Inversionistas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Información y recursos para inversores actuales y potenciales interesados en el desempeño financiero y el crecimiento de Deconotes.</p>
        </div>

        {/* Aspectos Destacados Financieros */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Crecimiento de Ingresos</h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <RevenueChart />
            </div>
            <p className="text-gray-600 text-sm">Crecimiento constante de ingresos año tras año impulsado por la innovación de productos y la expansión del mercado.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Participación de Mercado</h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <MarketShareChart />
            </div>
            <p className="text-gray-600 text-sm">Creciente presencia en el mercado de los segmentos de software y hardware de productividad.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Inversión en I+D</h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <InvestmentChart />
            </div>
            <p className="text-gray-600 text-sm">Inversiones estratégicas en investigación y desarrollo para mantener la ventaja competitiva.</p>
          </div>
        </div>

        {/* Informes y Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informes Financieros</h3>
            
            <div className="space-y-4">
              {financialReports.map(report => (
                <div key={report.id} className="bg-white rounded-lg shadow border border-gray-100 p-4 hover:shadow-md transition duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">{report.title}</h4>
                      <p className="text-gray-600 text-sm">Publicado: {report.date}</p>
                    </div>
                    <a 
                      href="#" 
                      className="bg-[#3498db] hover:bg-blue-600 text-white text-sm py-2 px-4 rounded transition duration-300"
                    >
                      Descargar PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Noticias de la Empresa</h3>
            
            <div className="space-y-6">
              {companyNews.map(news => (
                <div key={news.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <span className="text-xs text-gray-500 mb-2 block">{news.date}</span>
                    <h4 className="font-bold text-lg mb-2">{news.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                    <a href="#" className="text-[#3498db] font-medium hover:underline text-sm flex items-center">
                      <span>Leer el Comunicado Completo</span>
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
