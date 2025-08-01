import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll contact you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Coordinates for Kandy, Sri Lanka (approximate location for Queen's Road)
  const latitude = 7.2906;
  const longitude = 80.6337;
  const address = "No. 45, Queen's Road, Kandy, Central Province 20000, Sri Lanka";

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-60 overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Contact us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-teal bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-4xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="luxury-heading text-3xl mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+94 77 123 4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="custom-design">Custom Design Inquiry</option>
                        <option value="gem-consultation">Gem Consultation</option>
                        <option value="appointment">Schedule Appointment</option>
                        <option value="repair">Repair Service</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream piece or any questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-teal text-white py-4 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="luxury-heading text-3xl mb-8">Visit Our Showroom</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-luxury-gold mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium text-luxury-teal mb-2">Address</h3>
                        <p className="text-gray-600">
                          No. 45, Queen's Road<br />
                          Kandy, Central Province 20000<br />
                          Sri Lanka
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="text-luxury-gold mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium text-luxury-teal mb-2">Phone</h3>
                        <p className="text-gray-600">
                          Landline: +94 81 222 3456<br />
                          Mobile: +94 77 123 4567<br />
                          WhatsApp: +94 77 123 4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="text-luxury-gold mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium text-luxury-teal mb-2">Email</h3>
                        <p className="text-gray-600">
                          General: info@radiantdazzles.com<br />
                          Custom Design: custom@radiantdazzles.com<br />
                          Sales: sales@radiantdazzles.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="text-luxury-gold mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium text-luxury-teal mb-2">Business Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                          <p>Saturday: 10:00 AM - 6:00 PM</p>
                          <p>Sunday: 12:00 PM - 5:00 PM</p>
                          <p className="text-sm text-luxury-gold mt-2">
                            *Appointments available outside business hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="space-y-4">
                  <h3 className="font-medium text-luxury-teal text-lg">Find Us On Map</h3>
                  
                  {/* Option 1: Google Maps Embed */}
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTcnMjYuMiJOIDgwwrAzOCcwMS4zIkU!5e0!3m2!1sen!2slk!4v1629789456789!5m2!1sen!2slk&q=${encodeURIComponent(address)}`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Radiant Dazzles Location"
                      className="w-full h-64 md:h-80"
                    ></iframe>
                  </div>

                  {/* Map Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 bg-luxury-gold text-luxury-teal rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View in Google Maps
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 border-2 border-luxury-teal text-luxury-teal rounded-lg font-medium hover:bg-luxury-teal hover:text-white transition-all duration-300"
                    >
                      <MapPin size={16} className="mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;