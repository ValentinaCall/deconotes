import { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompanyHistory from '@/components/CompanyHistory';
import AboutUs from '@/components/AboutUs';
import Catalog from '@/components/Catalog';
import OrganizationalStructure from '@/components/OrganizationalStructure';
import Quality from '@/components/Quality';
import AwarenessCampaign from '@/components/AwarenessCampaign';
import Investors from '@/components/Investors';
import MarketingStrategies from '@/components/MarketingStrategies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  const homeRef = useRef<HTMLElement>(null);
  const historyRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const catalogRef = useRef<HTMLElement>(null);
  const structureRef = useRef<HTMLElement>(null);
  const qualityRef = useRef<HTMLElement>(null);
  const campaignRef = useRef<HTMLElement>(null);
  const investorsRef = useRef<HTMLElement>(null);
  const marketingRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = [
    { id: 'home', name: 'Historia', ref: homeRef },
    { id: 'history', name: 'History', ref: historyRef },
    { id: 'about', name: 'Quienes somos', ref: aboutRef },
    { id: 'catalog', name: 'Catálogo', ref: catalogRef },
    { id: 'structure', name: 'Estructura', ref: structureRef },
    { id: 'quality', name: 'Calidad', ref: qualityRef },
    { id: 'campaign', name: 'Campaña', ref: campaignRef },
    { id: 'investors', name: 'Inversionistas', ref: investorsRef },
    { id: 'marketing', name: 'Estrategias', ref: marketingRef },
    { id: 'contact', name: 'Contacto', ref: contactRef }
  ];

  const scrollToSection = (id: string) => {
    const section = sections.find(s => s.id === id);
    if (section && section.ref.current) {
      section.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-inter text-gray-800 bg-gray-50">
      <Header sections={sections} scrollToSection={scrollToSection} />
      
      <main>
        <section ref={homeRef} id="home">
          <HeroSection scrollToSection={scrollToSection} />
        </section>
        
        <section ref={historyRef} id="history">
          <CompanyHistory />
        </section>
        
        <section ref={aboutRef} id="about">
          <AboutUs />
        </section>
        
        <section ref={catalogRef} id="catalog">
          <Catalog />
        </section>
        
        <section ref={structureRef} id="structure">
          <OrganizationalStructure />
        </section>
        
        <section ref={qualityRef} id="quality">
          <Quality />
        </section>
        
        <section ref={campaignRef} id="campaign">
          <AwarenessCampaign />
        </section>
        
        <section ref={investorsRef} id="investors">
          <Investors />
        </section>
        
        <section ref={marketingRef} id="marketing">
          <MarketingStrategies />
        </section>
        
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer sections={sections} scrollToSection={scrollToSection} />
    </div>
  );
};

export default Home;
