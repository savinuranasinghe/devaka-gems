
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-teal text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">Contact Information</h3>
            <div className="space-y-3 text-gray-300">
              <p>123 Luxury Row, Diamond District</p>
              <p>Beverly Hills, CA 90210</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@radiantdazzles.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Home
              </Link>
              <Link to="/gems" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Precious Gems
              </Link>
              <Link to="/custom" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Custom Jewelry
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-luxury-gold">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                <Youtube size={24} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Stay updated with our latest collections and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-luxury-gold border-opacity-30 pt-8 mt-12 text-center">
          <p className="text-gray-300 mb-2">
            © 2024 Radiant Dazzles. All rights reserved.
          </p>
          <p className="text-luxury-gold text-sm">
            Developed by www.divgaze.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
