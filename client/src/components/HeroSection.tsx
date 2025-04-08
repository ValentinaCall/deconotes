interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section className="relative">
      <div className="container mx-auto px-4 py-10 relative z-10">
        <h1>Plasma tus ideas naturalmente</h1>
        <div className="photos-container">
          <div className="photo photo-1"></div>
          <div className="photo photo-2"></div>
          <div className="photo photo-3"></div>
        </div>
      </div>
      </section>
      <section className="relative bg-[#3498db] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3498db] to-[#2ecc71] opacity-90"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Deconotes
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Soluciones innovadoras para un mejor mañana
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-white text-[#3498db] hover:bg-gray-100 py-3 px-6 rounded-lg font-medium transition duration-300"
                onClick={() => scrollToSection("about")}
              >
                Saber más
              </button>
              <button
                className="bg-[#f39c12] hover:bg-yellow-500 py-3 px-6 rounded-lg font-medium transition duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
