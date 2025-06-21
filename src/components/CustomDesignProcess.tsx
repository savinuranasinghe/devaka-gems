
const processSteps = [
  {
    number: '1',
    title: 'CONSULTATION',
    description: 'We begin with a personal consultation to understand your vision, preferences, and requirements.',
    icon: '💬'
  },
  {
    number: '2',
    title: 'DESIGN',
    description: 'Our master designers create detailed sketches and 3D renderings of your custom piece.',
    icon: '✏️'
  },
  {
    number: '3',
    title: 'APPROVAL',
    description: 'Review and approve the final design, with any adjustments made to your satisfaction.',
    icon: '✓'
  },
  {
    number: '4',
    title: 'CREATION',
    description: 'Expert craftsmen bring your vision to life using traditional techniques and premium materials.',
    icon: '⚒️'
  }
];

const CustomDesignProcess = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-luxury-teal">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl font-semibold text-white text-center mb-16">
          Your Design Journey
        </h2>

        {/* Desktop Process Steps */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-luxury-gold"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Step Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-2xl font-bold text-luxury-gold">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="md:hidden space-y-8 max-w-md mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-luxury-gold">{step.number}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-16 bg-luxury-gold mx-auto mt-4"></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button 
            onClick={scrollToContact}
            className="luxury-button-primary text-lg px-10 py-4"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignProcess;
