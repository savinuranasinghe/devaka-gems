
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';

const portfolioCategories = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'];

const portfolioItems = [
  {
    id: 1,
    name: 'Eternal Promise Ring',
    category: 'Rings',
    description: 'Custom diamond engagement ring with vintage-inspired setting',
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Custom engagement ring'
  },
  {
    id: 2,
    name: 'Royal Heritage Necklace',
    category: 'Necklaces',
    description: 'Handcrafted ruby and diamond statement necklace',
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Custom ruby necklace'
  },
  {
    id: 3,
    name: 'Garden of Eden Earrings',
    category: 'Earrings',
    description: 'Emerald drop earrings with delicate leaf motifs',
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Custom emerald earrings'
  },
  {
    id: 4,
    name: 'Ocean Waves Bracelet',
    category: 'Bracelets',
    description: 'Sapphire tennis bracelet with flowing wave design',
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Custom sapphire bracelet'
  },
  {
    id: 5,
    name: 'Art Deco Ring',
    category: 'Rings',
    description: 'Vintage-inspired ring with geometric diamond setting',
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Art deco style ring'
  },
  {
    id: 6,
    name: 'Celestial Necklace',
    category: 'Necklaces',
    description: 'Star and moon motif necklace with mixed gemstones',
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Celestial themed necklace'
  }
];

const processSteps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'We discuss your vision, preferences, budget, and timeline during a personalized consultation.',
    duration: '1-2 hours'
  },
  {
    step: '2',
    title: 'Concept Development',
    description: 'Our designers create initial sketches and mood boards based on your requirements.',
    duration: '3-5 days'
  },
  {
    step: '3',
    title: '3D Design & Rendering',
    description: 'Detailed 3D models and photorealistic renderings bring your piece to life.',
    duration: '1-2 weeks'
  },
  {
    step: '4',
    title: 'Material Selection',
    description: 'Choose your precious metals and gemstones from our curated collection.',
    duration: '1 week'
  },
  {
    step: '5',
    title: 'Final Approval',
    description: 'Review and approve the final design with any last-minute refinements.',
    duration: '2-3 days'
  },
  {
    step: '6',
    title: 'Master Crafting',
    description: 'Our skilled artisans bring your vision to reality using traditional techniques.',
    duration: '4-8 weeks'
  }
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    piece: 'Diamond Engagement Ring',
    rating: 5,
    text: 'The process was incredible from start to finish. They captured exactly what I envisioned and the quality is outstanding.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Michael Chen',
    piece: 'Anniversary Necklace',
    rating: 5,
    text: 'Working with Radiant Dazzles was a dream. The attention to detail and craftsmanship exceeded all expectations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Emma Rodriguez',
    piece: 'Custom Earrings',
    rating: 5,
    text: 'They transformed my grandmother\'s vintage stones into the most beautiful modern earrings. Absolutely perfect.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const Custom = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = filteredItems.map(item => ({
    src: item.src,
    alt: item.alt,
    title: item.name
  }));

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Custom jewelry design process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-teal bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl font-bold mb-4">Custom Jewelry</h1>
            <p className="text-xl text-luxury-gold">Transform Your Dreams into Reality</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-luxury-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="luxury-heading text-4xl text-center mb-12">Our Portfolio</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-luxury-gold text-luxury-teal'
                    : 'bg-white text-gray-600 hover:bg-luxury-gold hover:text-luxury-teal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="gallery-item cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="gallery-overlay"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="luxury-heading text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="luxury-heading text-4xl text-center mb-12">Our Design Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 rounded-lg bg-luxury-light-gray">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-luxury-teal font-bold">{step.step}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="luxury-heading text-xl">{step.title}</h3>
                      <span className="text-luxury-gold text-sm font-medium">{step.duration}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-luxury-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="luxury-heading text-4xl text-center mb-12">Client Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-luxury-teal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.piece}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-luxury-gold">★</span>
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury-teal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-semibold text-white mb-4">
            Ready to Start Your Design Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create a unique piece that tells your story and captures your most precious moments.
          </p>
          <button className="luxury-button-primary text-lg px-10 py-4">
            Start Your Design
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}

      <Footer />
    </div>
  );
};

export default Custom;
