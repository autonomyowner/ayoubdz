const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
      title: "E-commerce Websites",
      description: "Complete online stores for Algerian businesses. Secure payment integration, inventory management, and mobile-responsive design to boost your sales."
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center",
      title: "Business Websites",
      description: "Professional websites for clinics, restaurants, and service businesses. Modern design with booking systems and customer management tools."
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center",
      title: "Custom Solutions",
      description: "Tailored web applications and digital solutions. From CRM systems to booking platforms, we build exactly what your business needs."
    }
  ]

  return (
    <section id="services" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            Our Services
          </h2>
          
          {/* Professional Mission Statement */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            It was a pleasure helping you build a professional, working website that will generate quality leads for your business!
          </p>
          
          {/* Awards Winners Badge */}
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              🏆 Proud to be part of creation of awards winners startups: 
              <a href="https://elghella.com" target="_blank" rel="noopener noreferrer" className="luxora-green-text hover:underline mx-1 font-semibold">elghella.com</a>
              and 
              <a href="https://reachfood.co" target="_blank" rel="noopener noreferrer" className="luxora-green-text hover:underline mx-1 font-semibold">reachfood.co</a>
            </span>
          </div>
        </div>

          {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Circular Image */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
          </div>

              {/* Content */}
              <h3 className="text-xl font-bold luxora-text mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Button */}
              <button 
                className="luxora-green-button"
                onClick={() => window.open('/services', '_self')}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 