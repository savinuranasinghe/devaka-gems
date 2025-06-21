import Header from '../components/Header';
import Footer from '../components/Footer';
import { Gem, Crown, Sparkles } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dewaka Embuldeniya',
      role: 'Master Jeweler & Founder',
      experience: '35+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Dewaka founded Radiant Dazzles with a vision to showcase Sri Lanka\'s rich jewelry-making heritage while creating modern masterpieces for discerning clients worldwide.'
    },
    {
      name: 'Priyani Wijeratne',
      role: 'Lead Designer',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Priyani specializes in contemporary designs inspired by Sri Lankan culture, seamlessly blending traditional motifs with modern elegance.'
    },
    {
      name: 'Chandana Fernando',
      role: 'Master Gemologist',
      experience: '25+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Chandana is an expert in Sri Lankan precious stones, with deep knowledge of our island\'s world-renowned sapphires, rubies, and other gems.'
    }
  ];

  const milestones = [
    { year: '1989', event: 'Dewaka Embuldeniya establishes Radiant Dazzles in the heart of Kandy' },
    { year: '1995', event: 'Opened our flagship showroom on prestigious Queen\'s Road' },
    { year: '2003', event: 'Became the first certified Sri Lankan jeweler for international gem authentication' },
    { year: '2008', event: 'Launched our custom design atelier featuring traditional Sri Lankan craftsmanship' },
    { year: '2015', event: 'Received the National Craftsmanship Excellence Award from the Government of Sri Lanka' },
    { year: '2020', event: 'Celebrated our 2,500th custom creation and expanded to serve international clients' },
    { year: '2024', event: 'Continues to be Kandy\'s premier destination for luxury jewelry and precious gems' }
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
            <p className="text-xl text-luxury-gold">Crafting Excellence Since 1989</p>
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
                What began as a passionate young Sri Lankan craftsman's dream in 1989 has evolved into 
                Kandy's most prestigious jewelry house. Dewaka Embuldeniya started Radiant Dazzles with 
                a vision to showcase the extraordinary beauty of Sri Lankan gemstones and the island's 
                rich tradition of jewelry craftsmanship to the world.
              </p>
              <p>
                Nestled in the cultural capital of Sri Lanka, our atelier draws inspiration from the 
                island's 2,500-year history of gem mining and jewelry making. Sri Lanka, known as the 
                "Gem Island," has been a source of the world's finest sapphires, rubies, and other 
                precious stones for millennia. We honor this heritage while creating contemporary 
                masterpieces for clients around the globe.
              </p>
              <p>
                For over three decades, Radiant Dazzles has been synonymous with exceptional quality, 
                authentic Sri Lankan craftsmanship, and personalized service. We've had the privilege 
                of creating engagement rings featuring Ceylon sapphires, designing traditional Kandyan 
                jewelry for cultural ceremonies, and crafting unique pieces that celebrate both Sri Lankan 
                heritage and modern luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-luxury-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="luxury-heading text-4xl text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="luxury-heading text-xl mb-4">Authenticity</h3>
              <p className="luxury-text">
                Every gemstone is sourced responsibly from Sri Lankan mines, certified for 
                authenticity and quality, ensuring you receive genuine Ceylon gems.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="luxury-heading text-xl mb-4">Heritage</h3>
              <p className="luxury-text">
                We preserve and celebrate Sri Lanka's ancient jewelry-making traditions, 
                passed down through generations of skilled artisans in Kandy.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="luxury-heading text-xl mb-4">Excellence</h3>
              <p className="luxury-text">
                From traditional Kandyan designs to contemporary pieces, we maintain 
                the highest standards of craftsmanship in every creation.
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

      {/* Sri Lankan Heritage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="luxury-heading text-4xl mb-6">The Ceylon Advantage</h2>
                <div className="space-y-4 luxury-text">
                  <p>
                    Sri Lanka, historically known as Ceylon, is world-renowned for producing some of 
                    the finest gemstones on Earth. Our island nation has been a treasure trove of 
                    precious stones for over 2,000 years, with ancient trade routes bringing merchants 
                    from across the globe to seek our exceptional gems.
                  </p>
                  
                  <p>
                    From the legendary blue sapphires of Ratnapura to the vibrant star sapphires found 
                    in our highland regions, Ceylon gems are prized for their exceptional clarity, 
                    color, and brilliance. Each stone tells a story of our island's geological wonder 
                    and our craftsmen's expertise.
                  </p>
                  
                  <p>
                    At Radiant Dazzles, we work directly with responsible local miners and maintain 
                    strict ethical sourcing standards, ensuring that every gemstone in our collection 
                    represents the very best of Sri Lankan quality and craftsmanship heritage.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-gold mb-2">35+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-gold mb-2">2,500+</div>
                    <div className="text-sm text-gray-600">Custom Pieces</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
                    <div className="text-sm text-gray-600">Ceylon Authentic</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                    alt="Traditional Sri Lankan jewelry craftsmanship"
                    className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-luxury-teal bg-opacity-10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury-light-gray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="luxury-heading text-3xl mb-4">Experience Authentic Ceylon Luxury</h2>
          <p className="luxury-text text-lg mb-8 max-w-2xl mx-auto">
            Visit our showroom in the heart of Kandy and discover why discerning clients worldwide 
            choose Radiant Dazzles for their most treasured jewelry pieces featuring authentic Ceylon gems.
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