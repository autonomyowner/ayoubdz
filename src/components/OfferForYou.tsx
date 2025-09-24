const Services = () => {
  const services = [
    {
      image: "/pics/templates/tom ford tobaco vanila.jpg",
      title: "Luxury Perfumes",
      description: "Premium designer fragrances from top brands like Tom Ford, Armani, and Dior. Authentic products with guaranteed quality and elegant presentation."
    },
    {
      image: "/pics/templates/initio.jpg",
      title: "Niche Fragrances",
      description: "Exclusive and rare perfumes from artisanal houses like Initio, Xerjoff, and Maison Francis Kurkdjian. Unique scents for discerning customers."
    },
    {
      image: "/pics/templates/by the fireplace.jpg",
      title: "Signature Collections",
      description: "Curated collections of seasonal and themed fragrances. From warm winter scents to fresh summer perfumes, we have the perfect scent for every occasion."
    }
  ]

  return (
    <section id="services" className="py-16 px-4 parfumerie-bg section-mobile">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold parfumerie-text mb-6 title-mobile">
            Our Collections
          </h2>
          
          {/* Professional Mission Statement */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed subtitle-mobile">
            We are passionate about bringing you the finest fragrances from around the world, carefully curated for the discerning Algerian customer!
          </p>
          
          {/* Quality Badge */}
          <div className="inline-flex items-center px-6 py-3 parfumerie-card rounded-full parfumerie-text text-sm font-medium mb-8 badge-mobile">
            <span className="text-center">
              ✨ Authentic & Premium Quality Guaranteed: 
              <span className="parfumerie-orange-text mx-1 font-semibold">Only Original Products</span>
              with 
              <span className="parfumerie-orange-text mx-1 font-semibold">Expert Fragrance Advice</span>
            </span>
          </div>
        </div>

          {/* Services Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
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
              <h3 className="text-xl font-bold parfumerie-text mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Button */}
              <button 
                className="parfumerie-blue-button"
                onClick={() => window.open('/contact', '_self')}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Services Grid - Mobile */}
        <div className="md:hidden grid-mobile mb-16">
            {services.map((service, index) => (
            <div key={index} className="service-card-mobile">
              {/* Circular Image */}
              <div className="service-image-mobile">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
          </div>

              {/* Content */}
              <h3 className="text-xl font-bold parfumerie-text mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Button */}
              <button 
                className="parfumerie-blue-button"
                onClick={() => window.open('/contact', '_self')}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Premium Collection Showcase Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-16">
          <div 
            className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/pics/templates/bg price (1).jpg')",
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-6">
                <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 text-sm font-semibold mb-6 shadow-lg">
                  <span className="text-center">✨ Premium Collection Showcase</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Discover Our
                  <span className="block text-amber-400">Luxury Fragrance Collection</span>
                </h3>
                
                <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  Experience the finest selection of premium perfumes from world-renowned brands. 
                  Each fragrance is carefully curated to bring you the ultimate luxury scent experience.
                </p>
                
                <div className="flex justify-center">
                  <button 
                    className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-white/30"
                    style={{
                      background: 'linear-gradient(to right, #03045e, #023e8a)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #023e8a, #0077b6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #03045e, #023e8a)';
                    }}
                    onClick={() => window.open('/contact', '_self')}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 