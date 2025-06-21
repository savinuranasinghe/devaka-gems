
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import GallerySection from '../components/GallerySection';
import CustomDesignProcess from '../components/CustomDesignProcess';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesOverview />
      <GallerySection />
      <CustomDesignProcess />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
