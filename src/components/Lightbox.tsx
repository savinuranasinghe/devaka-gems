
import { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(Math.max(0, currentIndex - 1));
      if (e.key === 'ArrowRight') onNavigate(Math.min(images.length - 1, currentIndex + 1));
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-luxury-gold transition-colors duration-300 z-10"
      >
        <X size={32} />
      </button>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 text-white hover:text-luxury-gold transition-colors duration-300 z-10"
        >
          <ArrowLeft size={32} />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 text-white hover:text-luxury-gold transition-colors duration-300 z-10"
        >
          <ArrowRight size={32} />
        </button>
      )}

      {/* Image */}
      <div className="max-w-4xl max-h-full mx-4">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Image Info */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
        <h3 className="text-xl font-medium mb-2">{currentImage.title}</h3>
        <p className="text-sm text-gray-300">
          {currentIndex + 1} of {images.length}
        </p>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex ? 'border-luxury-gold' : 'border-transparent'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
