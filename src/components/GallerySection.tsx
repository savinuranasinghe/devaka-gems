import { useState } from 'react';
import Lightbox from './Lightbox';

const gemImages = [
  {
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Brilliant Cut Diamond',
    title: 'Brilliant Cut Diamond'
  },
  {
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Ruby Gemstone',
    title: 'Burma Ruby'
  },
  {
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Emerald Stone',
    title: 'Colombian Emerald'
  },
  {
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Sapphire Gemstone',
    title: 'Ceylon Sapphire'
  }
];

const signaturePieces = [
  {
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80',
    alt: 'Diamond Engagement Ring',
    title: 'Eternal Promise Ring'
  },
  {
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80',
    alt: 'Ruby Necklace',
    title: 'Royal Heritage Necklace'
  },
  {
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80',
    alt: 'Emerald Earrings',
    title: 'Garden of Eden Earrings'
  }
];

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<'gems' | 'signature'>('gems');

  const openLightbox = (index: number, gallery: 'gems' | 'signature') => {
    setCurrentImage(index);
    setCurrentGallery(gallery);
    setLightboxOpen(true);
  };

  const currentImages = currentGallery === 'gems' ? gemImages : signaturePieces;

  return (
    <section className="py-24 bg-luxury-light-gray">
      <div className="container mx-auto px-6">
        {/* Precious Gems Gallery */}
        <div className="mb-20">
          <h2 className="luxury-heading text-4xl text-center mb-12">Featured Gemstones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {gemImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item aspect-square"
                onClick={() => openLightbox(index, 'gems')}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="gallery-overlay flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Pieces Gallery */}
        <div>
          <h2 className="luxury-heading text-4xl text-center mb-12">Signature Creations</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {signaturePieces.map((piece, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index, 'signature')}
              >
                <div className="bg-white overflow-hidden shadow-lg">
                  <img
                    src={piece.src}
                    alt={piece.alt}
                    className="w-full h-80 object-cover"
                  />
                  <div className="gallery-overlay"></div>
                </div>
                <h3 className="text-center mt-4 text-luxury-gold font-medium">
                  {piece.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          currentIndex={currentImage}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImage}
        />
      )}
    </section>
  );
};

export default GallerySection;
