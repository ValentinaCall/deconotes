import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Ponte en contacto con nuestro equipo para consultas, soporte o para obtener más información sobre nuestros productos y servicios.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Apellido</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Número de teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecciona un asunto</option>
                  <option value="general">Consulta general</option>
                  <option value="support">Soporte técnico</option>
                  <option value="sales">Información de ventas</option>
                  <option value="partnership">Oportunidades de asociación</option>
                  <option value="careers">Carreras</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mr-2"
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">Acepto la <a href="#" className="text-[#3498db] hover:underline">Política de Privacidad</a> y consiento ser contactado sobre los productos y servicios de Deconotes.</label>
              </div>
              
              <button 
                type="submit" 
                className="bg-[#3498db] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          
          {/* Contact Information & Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Nuestra información</h3>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-4">Oficina Central</h4>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#3498db] mt-1 mr-3"></i>
                      <span>123 Innovation Drive<br />San Francisco, CA 94103<br />United States</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-phone text-[#3498db] mr-3"></i>
                      <span>+1 (415) 555-0123</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-envelope text-[#3498db] mr-3"></i>
                      <span>info@deconotes.com</span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4">Oficina Europea</h4>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#3498db] mt-1 mr-3"></i>
                      <span>45 Tech Boulevard<br />Berlin, 10115<br />Germany</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-phone text-[#3498db] mr-3"></i>
                      <span>+49 30 1234567</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-envelope text-[#3498db] mr-3"></i>
                      <span>europe@deconotes.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-8">
              <div className="bg-gray-200 h-64 rounded">
                {/* Map would be integrated here in a real implementation */}
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    <i className="fas fa-map-marked-alt text-3xl mb-2"></i><br />
                    Mapa interactivo<br />
                    Mostrando nuestras ubicaciones
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-bold mb-4">Conéctate con nosotros</h4>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-[#3b5998] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                
                <a href="#" className="bg-[#1da1f2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                
                <a href="#" className="bg-[#c32aa3] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                
                <a href="#" className="bg-[#0a66c2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                
                <a href="#" className="bg-[#ff0000] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
