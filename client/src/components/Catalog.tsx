import { useState } from 'react';

const Catalog = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    `${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}images/gallery/gallery-item-1.jpeg`,
    `${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}images/gallery/gallery-item-2.jpeg`,
    `${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}images/gallery/gallery-item-3.jpeg`,
    `${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}images/gallery/gallery-item-4.jpeg`,
    `${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}images/gallery/gallery-item-5.jpeg`,
  ];
  const base = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('modal-overlay')) {
      setIsGalleryOpen(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 xl:max-w-[1174px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Nuestra libreta Deconotes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Descubre nuestras soluciones innovadoras diseñadas para mejorar la productividad y la organización.</p>
        </div>

        <div className='deconote-counter-shop'>
          <div className="item-container">
            <div className="item">
              <div className="item-image">
                <div className="price-container">
                  <span className="price-symbol">$</span>
                  <span className="price-number">69</span>
                </div>
                <img className='notebook-image' src={`${base}images/deconotes_icon.png`} alt="Libreta Deconotes" />
                <img className='hand-image' src={`${base}images/hand.png`} alt="Una mano sosteniendo algo" />
              </div>
              <div className="item-details">
                <h3 className="item-name">Deconotes</h3>
                <p className="item-description">La solución perfecta para organizar tus ideas y tareas.</p>
                <button 
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mt-4 mx-auto block"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  Ver galería
                </button>
              </div>
            </div>
          </div>
        </div>

        {isGalleryOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center modal-overlay"
            onClick={(e) => handleOutsideClick(e)}
          >
            <div className="bg-transparent rounded-lg w-full max-w-4xl p-4 relative">
                <button 
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-2 right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                style={{ zIndex: 100 }}
                >
                <i className="fas fa-times"></i>
              </button>
              <div className="slider-container relative max-h-[90vh] overflow-hidden">
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <img 
                  src={images[currentImage]} 
                  alt={`Imagen ${currentImage + 1}`} 
                  className="w-full h-auto max-h-[90vh] object-contain" 
                />
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
