import { useState } from 'react';
import SatisfactionChart from './charts/SatisfactionChart';
import NpsChart from './charts/NpsChart';
import ProductRatingsChart from './charts/ProductRatingsChart';

const Quality = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    satisfaction: '',
    recommend: '',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comentarios enviados:', formData);
    // Resetear formulario después del envío
    setFormData({
      name: '',
      email: '',
      satisfaction: '',
      recommend: '',
      comments: ''
    });
    alert('¡Gracias por tus comentarios!');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Aseguramiento de Calidad</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Estamos comprometidos a ofrecer productos y servicios de la más alta calidad. Tus comentarios nos ayudan a mejorar continuamente.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Encuesta */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Comentarios de Clientes</h3>
            
            <form id="feedback-form" className="bg-gray-50 rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Satisfacción con el Producto</label>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-600">No Satisfecho</span>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(value => (
                      <input 
                        key={value}
                        type="radio" 
                        name="satisfaction" 
                        id={`sat${value}`} 
                        value={value}
                        checked={formData.satisfaction === value.toString()}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-[#3498db]"
                        required
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Muy Satisfecho</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">¿Recomendarías nuestros productos?</label>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-600">Poco Probable</span>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                      <input 
                        key={value}
                        type="radio" 
                        name="recommend" 
                        id={`rec${value}`} 
                        value={value}
                        checked={formData.recommend === value.toString()}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-[#3498db]"
                        required
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Muy Probable</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Comentarios Adicionales</label>
                <textarea 
                  id="comments" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-[#3498db] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Enviar Comentarios
              </button>
            </form>
          </div>
          
          {/* Resultados de la Encuesta */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Satisfacción del Cliente</h3>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <div className="mb-8">
                <h4 className="font-bold mb-4">Satisfacción General</h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <SatisfactionChart />
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold mb-4">Puntaje Neto del Promotor</h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <NpsChart />
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Calificaciones del Producto</h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <ProductRatingsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
