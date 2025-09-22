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
    <section id="services" className="py-16 px-4 parfumerie-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold parfumerie-text mb-6">
            Our Collections
          </h2>
          
          {/* Professional Mission Statement */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are passionate about bringing you the finest fragrances from around the world, carefully curated for the discerning Algerian customer!
          </p>
          
          {/* Quality Badge */}
          <div className="inline-flex items-center px-6 py-3 parfumerie-card rounded-full parfumerie-text text-sm font-medium mb-8">
            <span className="text-center">
              ✨ Authentic & Premium Quality Guaranteed: 
              <span className="parfumerie-orange-text mx-1 font-semibold">Only Original Products</span>
              with 
              <span className="parfumerie-orange-text mx-1 font-semibold">Expert Fragrance Advice</span>
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
              <h3 className="text-xl font-bold parfumerie-text mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Button */}
              <button 
                className="parfumerie-blue-button"
                onClick={() => window.open('/services', '_self')}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 