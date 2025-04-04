import { useState } from 'react';

interface Section {
  id: string;
  name: string;
  ref: React.RefObject<HTMLElement>;
}

interface HeaderProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

const Header = ({ sections, scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 rounded-navbar">
      <div className="container mx-auto px-8">
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img src="/images/deconotes-logo.png" alt="" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {sections
              .filter((s) => s.id !== "home" && s.id !== "history")
              .map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-700 hover:text-[#3498db] font-medium nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.name}
                </a>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} pb-4`}
        >
          <div className="flex flex-col space-y-3">
            {sections
              .filter((s) => s.id !== "home")
              .map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-700 hover:text-[#3498db] font-medium py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {section.name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
