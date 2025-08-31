const Services = () => {
  const services = [
    {
      icon: "🏥",
      title: "Clinic Websites",
      description: "Professional medical websites with integrated booking systems, patient portals, and appointment management.",
      features: [
        "Online appointment booking",
        "Patient registration forms",
        "Doctor profiles and schedules",
        "Medical service listings",
        "Secure patient portal",
        "Mobile-responsive design"
      ]
    },
    {
      icon: "✈️",
      title: "Travel Agency Websites",
      description: "Dynamic travel websites with booking engines, tour packages, and customer management systems.",
      features: [
        "Tour package listings",
        "Online booking system",
        "Customer reviews and ratings",
        "Payment integration",
        "Travel blog integration",
        "Multi-language support"
      ]
    },
    {
      icon: "🏠",
      title: "Real Estate Websites",
      description: "Comprehensive property websites with listing management, search filters, and lead generation tools.",
      features: [
        "Property listings with search",
        "Advanced filtering options",
        "Virtual tour integration",
        "Lead capture forms",
        "Agent profiles",
        "Property comparison tools"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce Websites",
      description: "Full-featured online stores with payment processing, inventory management, and customer accounts.",
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Shopping cart functionality",
        "Order tracking system",
        "Customer account management",
        "Inventory management"
      ]
    }
  ]

  return (
    <section id="services" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-x-[-1] rotate-45"
        >
          <source src="/pics/fliphero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-yellow-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">💼</span>
            Our Premium Services
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Web Development
            <span className="block premium-text">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating custom websites for various business sectors. 
            Each project is crafted with attention to detail and modern web standards.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="premium-card p-8 text-left">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">📋</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Discovery</h4>
                <p className="text-gray-300 text-sm">Understanding your business needs and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🎨</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Design</h4>
                <p className="text-gray-300 text-sm">Creating stunning, user-friendly designs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">💻</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Development</h4>
                <p className="text-gray-300 text-sm">Building your website with modern technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🚀</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Launch</h4>
                <p className="text-gray-300 text-sm">Deploying and maintaining your website</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Technologies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• React.js & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django</li>
                  <li>• Database Design</li>
                  <li>• API Development</li>
                </ul>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Git & GitHub</li>
                  <li>• Docker</li>
                  <li>• AWS & Vercel</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your website needs and create something amazing together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                🚀 Start Your Project
              </a>
              <a 
                href="/pricing" 
                className="btn-secondary text-lg px-8 py-4"
              >
                <span className="mr-2">💰</span>
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 