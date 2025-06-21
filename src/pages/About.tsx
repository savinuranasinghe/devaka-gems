
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Alessandro Romano',
      role: 'Master Jeweler & Founder',
      experience: '35+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Alessandro founded Radiant Dazzles with a vision to create timeless pieces that capture life\'s most precious moments.'
    },
    {
      name: 'Isabella Chen',
      role: 'Lead Designer',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Isabella specializes in contemporary designs that blend modern aesthetics with classical craftsmanship techniques.'
    },
    {
      name: 'Marcus Thompson',
      role: 'Gemologist',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Marcus ensures every gemstone meets our exacting standards, bringing expertise from the world\'s finest mines.'
    }
  ];

  const milestones = [
    { year: '1985', event: 'Alessandro Romano establishes Radiant Dazzles in Beverly Hills' },
    { year: '1992', event: 'Opened our flagship showroom in the prestigious Diamond District' },
    { year: '2001', event: 'Launched our custom design atelier with in-house master craftsmen' },
    { year: '2010', event: 'Received recognition as "Outstanding Jeweler of the Year"' },
    { year: '2018', event: 'Celebrated our 2,000th custom creation milestone' },
    { year: '2024', event: 'Continues to set the standard for luxury jewelry excellence' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Master craftsman at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-teal bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl font-bold mb-4">About Radiant Dazzles</h1>
            <p className="text-xl text-luxury-gold">Crafting Excellence Since 1985</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="luxury-heading text-4xl mb-8">Our Story</h2>
            <div className="space-y-6 luxury-text text-lg">
              <p>
                What began as a young Italian craftsman's dream in 1985 has evolved into one of Beverly Hills' 
                most respected jewelry houses. Alessandro Romano arrived in America with nothing but his tools, 
                his heritage of traditional jewelry-making techniques, and an unwavering commitment to excellence.
              </p>
              <p>
                Over nearly four decades, Radiant Dazzles has become synonymous with exceptional quality, 
                innovative design, and personalized service. We've had the honor of creating engagement rings 
                for Hollywood celebrities, designing family heirlooms that span generations, and crafting 
                unique pieces that celebrate life's most precious moments.
              </p>
              <p>
                Today, our team of master craftsmen continues Alessandro's tradition of excellence, combining 
                time-honored techniques with modern precision to create jewelry that is both timeless and 
                contemporary. Every piece that leaves our atelier carries with it our promise of quality, 
                beauty, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-luxury-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="luxury-heading text-4xl text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="luxury-heading text-xl mb-4">Excellence</h3>
              <p className="luxury-text">
                We never compromise on quality. Every piece undergoes rigorous inspection to ensure 
                it meets our exacting standards for craftsmanship and beauty.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="luxury-heading text-xl mb-4">Trust</h3>
              <p className="luxury-text">
                Building lasting relationships with our clients is at the heart of everything we do. 
                Your trust is our most precious asset.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="luxury-heading text-xl mb-4">Innovation</h3>
              <p className="luxury-text">
                While honoring traditional techniques, we embrace new technologies and design 
                approaches to create truly unique pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="luxury-heading text-4xl text-center mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg"
                />
                <h3 className="luxury-heading text-xl mb-2">{member.name}</h3>
                <p className="text-luxury-gold font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                <p className="luxury-text text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-luxury-teal">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-4xl font-semibold text-white text-center mb-12">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-luxury-teal font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="luxury-heading text-3xl mb-4">Experience the Radiant Dazzles Difference</h2>
          <p className="luxury-text text-lg mb-8 max-w-2xl mx-auto">
            Visit our showroom and discover why discerning clients have trusted us for nearly four decades 
            to create their most treasured pieces.
          </p>
          <button className="luxury-button-primary text-lg px-10 py-4">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
