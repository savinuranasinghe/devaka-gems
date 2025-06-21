const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {/* Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="luxury-heading text-4xl">Master Craftsmanship Since 1989</h2>
            
            <div className="space-y-6 luxury-text text-lg">
              <p>
                For over three decades, Radiant Dazzles has been synonymous with exceptional quality 
                and unparalleled artistry in Sri Lankan fine jewelry. Our master craftsmen combine 
                time-honored traditional techniques with modern precision to create pieces that honor 
                our island's rich heritage while transcending generations.
              </p>
              
              <p>
                Every gemstone in our collection is hand-selected from Sri Lanka's renowned mines, 
                including the legendary blue sapphires of Ratnapura and the vibrant gems of our 
                highland regions. We ensure each Ceylon stone meets our exacting standards before 
                it finds its way into our exclusive designs.
              </p>
              
              <p>
                Our commitment extends beyond beautiful jewelry to preserving Sri Lankan craftsmanship 
                traditions and building lasting relationships with our clients. When you choose Radiant 
                Dazzles, you're investing in authentic Ceylon luxury and a guarantee of lifetime 
                satisfaction from Kandy's premier jewelry house.
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

          {/* Image - 40% */}
          <div className="lg:col-span-2">
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
    </section>
  );
};

export default AboutSection;