interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface FooterProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

const Footer = ({ sections, scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-6">Deconotes</h4>
            <p className="text-gray-300 mb-6">Soluciones innovadoras para capturar y organizar ideas, mejorando la productividad y la creatividad.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Compañía</h4>
            <ul className="space-y-3">
              {sections.filter(s => ['about', 'history', 'campaign', 'investors'].includes(s.id)).map(section => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className="text-gray-300 hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-gray-300 hover:text-white">Carreras</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Prensa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Productos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#catalog" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('catalog');
                  }}
                >
                  DecoNote Pro
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('catalog');
                  }}
                >
                  DecoTablet
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('catalog');
                  }}
                >
                  DecoCloud
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('catalog');
                  }}
                >
                  DecoMind
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('catalog');
                  }}
                >
                  DecoPen
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('catalog');
                  }}
                >
                  DecoTeam
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Soporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Comunidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">API para Desarrolladores</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Estado</a></li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Deconotes, Inc. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Política de Privacidad</a>
              <a href="#" className="hover:text-white">Términos de Servicio</a>
              <a href="#" className="hover:text-white">Política de Cookies</a>
              <a href="#" className="hover:text-white">Accesibilidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
