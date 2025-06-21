
import { Link } from 'react-router-dom';
import { Gem } from 'lucide-react';

const ServicesOverview = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Gems Card */}
          <Link to="/gems" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border hover:border-luxury-gold">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full">
                  <Gem className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="luxury-heading text-2xl">Precious Gems</h3>
                <p className="luxury-text">
                  Discover our curated collection of rare and exquisite gemstones, each carefully selected for its exceptional beauty and quality. From brilliant diamonds to vibrant sapphires, each stone tells a story of Earth's magnificent artistry.
                </p>
                <button className="luxury-button-outline">
                  Explore Gems
                </button>
              </div>
            </div>
          </Link>

          {/* Custom Jewelry Card */}
          <Link to="/custom" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border hover:border-luxury-gold">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full">
                  <svg className="w-8 h-8 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="luxury-heading text-2xl">Custom Jewelry</h3>
                <p className="luxury-text">
                  Transform your vision into reality with our bespoke jewelry design service, crafted by master artisans. From engagement rings to statement pieces, we bring your dreams to life with unparalleled craftsmanship.
                </p>
                <button className="luxury-button-outline">
                  View Portfolio
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
