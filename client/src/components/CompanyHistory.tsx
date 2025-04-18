import { timelineItems } from '@/lib/data';

const CompanyHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Nuestra Historia</h2>
          <p>En Deconotes creemos que cada página escrita puede contar más que palabras: puede contar historias de cambio. Nacimos con una idea sencilla pero poderosa —crear una libreta que inspire creatividad sin dejar huella negativa en el mundo.</p>
          <br />
          <p>Utilizando materiales reciclados y procesos responsables, diseñamos un producto que no solo acompaña tus ideas, sino que también respeta el entorno del que formamos parte.</p>
          <br />
          <p>Nuestra historia es la de muchas personas que creen que lo ecológico no está peleado con lo práctico ni con el diseño. Escribimos cada paso con propósito, y queremos que tú también seas parte de esta nueva forma de pensar, crear y cuidar.</p>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Timeline line - Stays centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 md:w-1"></div>

          {/* Timeline items container - Added padding top for first icon and spacing for mobile, removed for desktop */}
          <div className="relative z-10 pt-8 space-y-16 md:space-y-0 md:pt-0">
            {timelineItems.map((item, index) => (
              // Item Container: Flex for desktop, block default
              <div key={item.id} className="md:flex md:items-center md:justify-between md:mb-16 last:mb-0">

                {/* Text Content Block: Order adjusted */}
                <div className={`w-full mt-12 md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'}`}>
                  {/* Mobile styling wrapper */}
                  <div className="bg-white p-4 rounded shadow-md mx-4 md:bg-transparent md:p-0 md:shadow-none md:mx-0">
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Icon Container: Acts as spacer and holds icon */}
                {/* Mobile: Relative parent for absolute icon */}
                {/* Desktop: Centered flex item with fixed width */}
                <div className="relative md:order-2 md:w-auto md:flex-shrink-0">
                  {/* Mobile: Position icon absolutely centered top */}
                  {/* Desktop: Center icon within this container */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 md:relative md:left-auto md:top-auto md:transform-none z-20">
                    <div className="bg-[#3498db] w-10 h-10 rounded-full flex items-center justify-center">
                      <i className={`fas ${item.icon} text-white`}></i>
                    </div>
                  </div>
                </div>

                {/* Image Block: Order adjusted */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <img src={item.image} alt={item.title} className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
