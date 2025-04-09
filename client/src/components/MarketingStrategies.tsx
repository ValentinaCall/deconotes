import React, { useState, useRef, useEffect } from 'react';

const MarketingStrategies = () => {
  type ModalType = 'video' | 'image1' | 'image2' | 'image3';
  
  const mediaConfig = {
    video: {
      type: 'video',
      poster: '/images/video-poster.jpg',
      src: '/videos/promotional-video.mp4',
      title: 'Video Promocional'
    },
    image1: {
      type: 'image',
      thumbnail: '/images/magazine.jpeg',
      src: '/images/magazine.jpeg',
      title: 'Revista'
    },
    image2: {
      type: 'image',
      thumbnail: '/images/board.jpeg',
      src: '/images/board.jpeg',
      title: 'Anuncio'
    },
    image3: {
      type: 'image',
      thumbnail: '/images/flyer.jpeg',
      src: '/images/flyer.jpeg',
      title: 'Flyer Promocional'
    },
  };
  
  const [isModalOpen, setIsModalOpen] = useState({
    video: false,
    image1: false,
    image2: false,
    image3: false
  });

  const closeModal = (modalType: ModalType) => {
    setIsModalOpen(prev => ({...prev, [modalType]: false}));
  };

  const openModal = (modalType: ModalType) => {
    setIsModalOpen(prev => ({...prev, [modalType]: true}));
  };

  // Función para manejar clics fuera del modal
  const handleOutsideClick = (e: React.MouseEvent, modalType: ModalType) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      closeModal(modalType);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Estrategias de comercialización</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Nuestro enfoque para llegar a los clientes y construir relaciones duraderas a través de un marketing innovador.</p>
        </div>
        
        {/* Grid de Contenido Multimedia */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Elemento 1 - Video */}
            <div 
              className="md:col-span-5 md:h-[202px] aspect-video md:aspect-auto bg-blue-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden group"
              onClick={() => openModal('video')}
            >
              <img 
                src={mediaConfig.video.poster}
                alt="Vista previa del video"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <i className="fas fa-play text-4xl"></i>
                </div>
              </div>
            </div>

            {/* Elemento 2 - Imagen */}
            <div 
              className="md:col-span-7 md:h-[202px] aspect-video md:aspect-auto bg-blue-400 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden group"
              onClick={() => openModal('image1')}
            >
              <img 
                src={mediaConfig.image1.thumbnail}
                alt={mediaConfig.image1.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <i className="fas fa-image text-4xl"></i>
                </div>
              </div>
            </div>

            {/* Elemento 3 - Imagen */}
            <div 
              className="md:col-span-7 md:h-[202px] aspect-video md:aspect-auto bg-blue-400 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden group"
              onClick={() => openModal('image2')}
            >
              <img 
                src={mediaConfig.image2.thumbnail}
                alt={mediaConfig.image2.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <i className="fas fa-image text-4xl"></i>
                </div>
              </div>
            </div>

            {/* Elemento 4 - Imagen */}
            <div 
              className="md:col-span-5 md:h-[202px] aspect-video md:aspect-auto bg-blue-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden group"
              onClick={() => openModal('image3')}
            >
              <img 
                src={mediaConfig.image3.thumbnail}
                alt={mediaConfig.image3.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <i className="fas fa-image text-4xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Video */}
        {isModalOpen.video && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center modal-overlay"
            onClick={(e) => handleOutsideClick(e, 'video')}
          >
            <div className="bg-black bg-opacity-50 rounded-lg w-full max-w-4xl h-screen max-h-[85vh] mx-4 flex flex-col overflow-visible relative">
              <button 
                onClick={() => closeModal('video')}
                className="absolute -top-4 -right-4 w-8 h-8 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="relative flex-1 overflow-hidden">
                <video 
                  className="absolute inset-0 w-full h-full object-contain"
                  autoPlay 
                  controls
                  poster={mediaConfig.video.poster}
                >
                  <source src={mediaConfig.video.src} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Imagen 1 */}
        {isModalOpen.image1 && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={(e) => handleOutsideClick(e, 'image1')}
          >
            <div className="inline-block relative">
              <button 
                onClick={() => closeModal('image1')}
                className="absolute -top-4 -right-4 w-8 h-8 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
              <img 
                src={mediaConfig.image1.src}
                alt={mediaConfig.image1.title}
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Modal de Imagen 2 */}
        {isModalOpen.image2 && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={(e) => handleOutsideClick(e, 'image2')}
          >
            <div className="inline-block relative">
              <button 
                onClick={() => closeModal('image2')}
                className="absolute -top-4 -right-4 w-8 h-8 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
              <img 
                src={mediaConfig.image2.src}
                alt={mediaConfig.image2.title}
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Modal de Imagen 3 */}
        {isModalOpen.image3 && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={(e) => handleOutsideClick(e, 'image3')}
          >
            <div className="inline-block relative">
              <button 
                onClick={() => closeModal('image3')}
                className="absolute -top-4 -right-4 w-8 h-8 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
              <img 
                src={mediaConfig.image3.src}
                alt={mediaConfig.image3.title}
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketingStrategies;
