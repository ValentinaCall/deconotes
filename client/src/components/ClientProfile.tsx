import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const ClientProfile = () => {
  // Opciones del carrusel con autoplay activado
  const options = {
    loop: true,
    align: "center" as const, // Forzar el tipo correcto
    skipSnaps: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplayRef, setAutoplayRef] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  // Función para avanzar al siguiente slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Función para manejar cada vez que el carrusel se desplaza a una nueva diapositiva
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  // Configuración de los eventos del carrusel
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  // Implementación robusta del autoplay sin eventos de pausa
  useEffect(() => {
    if (!emblaApi) return;

    // Limpiar cualquier timeout anterior
    if (autoplayRef) clearTimeout(autoplayRef);

    // Implementación recursiva para garantizar que siempre avance
    const autoplay = () => {
      const timeout = setTimeout(() => {
        emblaApi.scrollNext();
        autoplay();
      }, 3000);

      setAutoplayRef(timeout);
    };

    // Iniciar el autoplay
    autoplay();

    // Limpieza al desmontar
    return () => {
      if (autoplayRef) clearTimeout(autoplayRef);
    };
  }, [emblaApi]);

  // Rutas de las imágenes del perfil del cliente
  const clientImages = [
    "images/client-profile/client-profile-0.jpg",
    "images/client-profile/client-profile-1.jpg",
    "images/client-profile/client-profile-2.jpg",
    "images/client-profile/client-profile-3.jpg",
  ];

  const base = import.meta.env.DEV ? "/" : import.meta.env.BASE_URL;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perfil del Cliente
        </h2>

        <div className="mx-auto mb-10">
          <p className="text-gray-600 max-w-4xl mx-auto text-center">
            Todo público interesado en la creatividad, escritura y organización.
            Puede ser estudiante, artista, amante de la papelería o simplemente
            alguien que busque opciones creativas que den funcionalidad.
            Personas que se preocupen por el medio ambiente.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Carousel ref={emblaRef} className="w-full">
              <CarouselContent>
                {clientImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={`${base}${image}`}
                          alt={`Cliente tipo ${index + 1}`}
                          className="w-full h-[400px] object-cover rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProfile;
