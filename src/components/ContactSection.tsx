
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-luxury-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-4xl text-center mb-16">Contact Us</h2>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - 60% */}
            <div className="lg:col-span-3">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                  />
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

            {/* Contact Info - 40% */}
            <div className="lg:col-span-2">
              <div className="bg-luxury-teal text-white p-8 rounded-lg h-full">
                <h3 className="font-playfair text-2xl font-semibold mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-luxury-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium mb-1">Visit Our Showroom</h4>
                      <p className="text-gray-300 text-sm">
                        No. 45, Queen's Road<br />
                        Kandy, Central Province<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-luxury-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-gray-300 text-sm">
                        +94 81 222 3456<br />
                        +94 71 123 4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-luxury-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-gray-300 text-sm">
                        info@radiantdazzles.com<br />
                        custom@radiantdazzles.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-luxury-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <p className="text-gray-300 text-sm">
                        Monday - Friday: 10:00 AM - 7:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-luxury-gold border-opacity-30">
                  <button className="w-full bg-luxury-gold text-luxury-teal py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300">
                    WhatsApp Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
