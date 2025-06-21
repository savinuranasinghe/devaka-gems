
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

const gemCategories = ['All', 'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Tanzanite', 'Opal'];

const gemsData = [
  {
    id: 1,
    name: 'Brilliant Cut Diamond',
    category: 'Diamond',
    carat: '2.5',
    clarity: 'VVS1',
    color: 'D',
    price: '$15,000 - $25,000',
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Brilliant Cut Diamond'
  },
  {
    id: 2,
    name: 'Burma Ruby',
    category: 'Ruby',
    carat: '3.2',
    clarity: 'Eye Clean',
    color: 'Pigeon Blood',
    price: '$12,000 - $18,000',
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Burma Ruby'
  },
  {
    id: 3,
    name: 'Ceylon Sapphire',
    category: 'Sapphire',
    carat: '4.1',
    clarity: 'VVS',
    color: 'Royal Blue',
    price: '$8,000 - $14,000',
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Ceylon Sapphire'
  },
  {
    id: 4,
    name: 'Colombian Emerald',
    category: 'Emerald',
    carat: '2.8',
    clarity: 'VS',
    color: 'Vivid Green',
    price: '$10,000 - $16,000',
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Colombian Emerald'
  },
  {
    id: 5,
    name: 'AAA Tanzanite',
    category: 'Tanzanite',
    carat: '5.5',
    clarity: 'Eye Clean',
    color: 'Violet Blue',
    price: '$6,000 - $9,000',
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'AAA Tanzanite'
  },
  {
    id: 6,
    name: 'Australian Opal',
    category: 'Opal',
    carat: '12.3',
    clarity: 'AAA',
    color: 'Multi-Color',
    price: '$3,000 - $5,000',
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Australian Opal'
  }
];

const Gems = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGemIndex, setCurrentGemIndex] = useState(0);

  const filteredGems = selectedCategory === 'All' 
    ? gemsData 
    : gemsData.filter(gem => gem.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentGemIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = filteredGems.map(gem => ({
    src: gem.src,
    alt: gem.alt,
    title: gem.name
  }));

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Precious gems collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-teal bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl font-bold mb-4">Precious Gems</h1>
            <p className="text-xl text-luxury-gold">Discover Earth's Most Magnificent Treasures</p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {gemCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-luxury-gold text-luxury-teal'
                    : 'bg-gray-100 text-gray-600 hover:bg-luxury-gold hover:text-luxury-teal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gems Grid */}
      <section className="py-16 bg-luxury-light-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredGems.map((gem, index) => (
              <div key={gem.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="gallery-item cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={gem.src}
                    alt={gem.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="gallery-overlay"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="luxury-heading text-lg mb-3">{gem.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Carat:</span>
                      <span className="font-medium">{gem.carat} ct</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clarity:</span>
                      <span className="font-medium">{gem.clarity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Color:</span>
                      <span className="font-medium">{gem.color}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-luxury-gold font-semibold mb-3">{gem.price}</p>
                    <button className="w-full luxury-button-outline py-2">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentGemIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentGemIndex}
        />
      )}

      <Footer />
    </div>
  );
};

export default Gems;
