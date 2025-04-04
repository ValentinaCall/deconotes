import { timelineItems } from '@/lib/data';

const CompanyHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Descubre cómo Deconotes evolucionó de una pequeña startup a un líder de la industria a través de la innovación y la dedicación.</p>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="mb-16 flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">{item.year}: {item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="bg-[#3498db] w-10 h-10 rounded-full flex items-center justify-center z-10">
                      <i className={`fas ${item.icon} text-white`}></i>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block">
                      <img src={item.image} alt={item.title} className="rounded-lg shadow-md w-full h-48 object-cover" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 text-right hidden md:block">
                      <img src={item.image} alt={item.title} className="rounded-lg shadow-md w-full h-48 object-cover" />
                    </div>
                    <div className="bg-[#3498db] w-10 h-10 rounded-full flex items-center justify-center z-10">
                      <i className={`fas ${item.icon} text-white`}></i>
                    </div>
                    <div className="md:w-1/2 md:pl-12 text-left mb-6 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">{item.year}: {item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
