import { financialReports, companyNews } from '@/lib/data';
import RevenueChart from './charts/RevenueChart';
import MarketShareChart from './charts/MarketShareChart';
import InvestmentChart from './charts/InvestmentChart';
import { assetPath } from '../utils/assetPath';

const Investors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Inversionistas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Información y recursos para inversores actuales y potenciales interesados en el desempeño financiero y el crecimiento de Deconotes.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gray-50">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-gears text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Producción</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Cada libreta ecológica cuesta $55 producirla.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-store text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Ventas</h5>
                    </div>
                    <p className="text-gray-600 text-sm">La vendemos a $69, generando una ganancia de $15 por libreta.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-money-bill-wave text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Inversión inicial</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Solo necesitamos vender 67 libretas para recuperar nuestra inversión inicial.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-hand-holding-dollar text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Ganancias</h5>
                    </div>
                    <p className="text-gray-600 text-sm">¡Desde la libreta 68, todo es ganancia y seguimos ayudando al planeta!</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-earth-americas text-[#3498db] mr-2"></i>
                      <h5 className="font-bold">Apoyo</h5>
                    </div>
                    <p className="text-gray-600 text-sm">Comprar una libreta ecológica no solo apoya al medio ambiente, también impulsa un emprendimiento joven y consciente.</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="h-full min-h-[400px] bg-cover bg-center" 
                style={{ backgroundImage: `url('${assetPath('/images/investors.jpeg')}')`}}
              ></div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Investors;
