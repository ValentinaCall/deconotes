import AnimatedTitle from './AnimatedTitle';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section className="relative">
        <div className="mx-auto px-4 md:px-8 py-10 relative z-10 hero-container h-screen md:h-[80vh] flex items-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 w-full">
            <AnimatedTitle text="Plasma tus ideas naturalmente" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
