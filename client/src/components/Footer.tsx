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
  // Filtrar solo las secciones que se muestran en la barra de navegación
  const navigationSections = sections.filter(
    (s) => s.id !== "home" && s.id !== "history"
  );

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <h4 className="text-xl font-bold mb-6">Deconotes</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-6 border-b border-gray-700 pb-8">
          {navigationSections.map((section) => (
            <div key={section.id} className="text-center">
              <a
                href={`#${section.id}`}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {section.name}
              </a>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Deconotes, Inc. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
