const Popular = () => {
  const templates = [
    {
      image: "/pics/templates/template 1.jpg",
      title: "E-commerce Template"
    },
    {
      image: "/pics/templates/teplate 2.jpg",
      title: "Business Template"
    },
    {
      image: "/pics/templates/perfum store template clean.jpg",
      title: "Perfume Store Template"
    },
    {
      image: "/pics/templates/clininc template.png",
      title: "Clinic Template"
    }
  ]

  // Duplicate templates for seamless loop
  const duplicatedTemplates = [...templates, ...templates]

  return (
    <section id="popular" className="py-16 px-4 luxora-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            Our most popular
          </h2>
        </div>

        {/* Moving Templates Animation */}
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedTemplates.map((template, index) => (
              <div key={index} className="flex-shrink-0 mx-4 group cursor-pointer">
                {/* Image */}
                <div className="w-80 h-64 rounded-lg overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold luxora-green-text text-center">
                  {template.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular
