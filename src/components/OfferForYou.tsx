const Services = () => {
  const services = [
    {
      icon: "🏥",
      title: "Clinic Websites",
      description: "Attract more patients and reduce phone calls with online booking and clear service pages.",
      features: [
        "Let patients book appointments 24/7",
        "Streamline intake with online registration forms",
        "Showcase doctors with profiles and schedules",
        "Present services clearly to build trust",
        "Secure portal to protect patient data",
        "Mobile-first experience for every visitor"
      ]
    },
    {
      icon: "✈️",
      title: "Travel Agency Websites",
      description: "Convert browsers into bookings with irresistible packages and easy online checkout.",
      features: [
        "Convert more with engaging tour package pages",
        "Accept bookings online — reduce phone calls",
        "Build trust with real customer reviews",
        "Collect payments securely",
        "Drive SEO with a travel blog",
        "Serve travelers in multiple languages"
      ]
    },
    {
      icon: "🏠",
      title: "Real Estate Websites",
      description: "Generate qualified leads with powerful search, filters, and compelling property pages.",
      features: [
        "Help buyers find homes faster with powerful search",
        "Guide prospects with intuitive filters",
        "Increase engagement with virtual tours",
        "Capture more leads with smart forms",
        "Build credibility with agent profiles",
        "Boost decisions with side-by-side comparisons"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce Websites",
      description: "Increase sales with a fast, trustworthy store and frictionless checkout.",
      features: [
        "Showcase products to boost conversions",
        "Accept secure payments with ease",
        "Reduce abandonment with a smooth checkout",
        "Let customers track orders easily",
        "Increase repeat purchases with accounts",
        "Stay organized with inventory tracking"
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
          className="w-full h-full object-cover"
        >
          <source src="/hero1.mp4" type="video/mp4" />
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
          <div className="inline-flex items-center px-3 sm:px-4 py-2 glass-effect border border-yellow-500/30 rounded-full premium-text text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="mr-2">💼</span>
            Our Premium Services
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Web Development
            <span className="block premium-text">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We specialize in creating custom websites for various business sectors. 
            Each project is crafted with attention to detail and modern web standards.
          </p>

          {/* Our Work Portfolio */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Our Work</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base text-center">
              Explore our portfolio of premium websites we've created for clients across different industries.
            </p>
            
            {/* Featured Project - Elghella */}
            <div className="mb-8">
              <div className="premium-card p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:scale-105 transition-all duration-300">
                <div className="text-center sm:text-left flex-1">
                  <div className="text-6xl mb-4">🌾</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">الغلة</h3>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-300 mb-4">Elghella</h4>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 max-w-2xl">
                    منتجات طبيعية خدمات زراعية و استشارية
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-6">
                    أستكشف موقعنا الغلة - Natural products, agricultural services and consulting
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium">
                    <span className="mr-2">🏆</span>
                    Featured Project
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href="https://www.elghella.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <span className="text-slate-900 text-2xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Elite Dental Clinic */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🦷</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">ELITE DENTAL CLINIC</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Cabinet dentaire d'exception offrant des soins de luxe dans un cadre raffiné à Alger.</p>
                  <p className="text-yellow-300 text-xs font-medium mt-1">L'Excellence Dentaire à l'Algérienne</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://eliteclinicouledfayet.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Golden Dental Clinic */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Your Perfect Golden Smile</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Dr. Yasser Khenniche provides comprehensive dental care with modern techniques and personalized treatment.</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://golden-dental-clinic-algiers.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Cinou Dental Clinic */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏥</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Cinou Dental Clinic H24</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Your smile is our priority. Professional dental care available 24/7 for all your dental needs.</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://24clinic.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Fix & Flex Elite */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💪</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Elite Fitness Coach</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Transform Your Life with Sylvester Mkali. 500+ Transformations achieved through personalized coaching.</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://fixandflex.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Spea Cup */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">☕</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Learn English Over Coffee</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Join our cozy English conversation sessions in Algiers. Practice real-life English in a relaxed café atmosphere.</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://spea-cup.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Perfect Events */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">❤️</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Perfect Events ❤️</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Décoration événementielle à Tlemcen. Transformez vos événements en moments inoubliables avec nos services de décoration personnalisés.</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://perfe-dun.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Gran Turismo */}
              <div className="premium-card p-4 sm:p-6 h-64 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🚗</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">GRAN TURISMO</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Service premium de chauffeur privé sur la Côte d'Azur et l'Italie du Nord. Discrétion absolue. Confort suprême.</p>
                </div>
                <div className="mt-auto">
                  <a 
                    href="https://granturismo.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-slate-900 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {services.map((service, index) => (
              <div key={index} className="premium-card p-4 sm:p-6 md:p-8 text-left">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-0 sm:mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start sm:items-center text-gray-300 text-sm sm:text-base">
                      <span className="text-green-400 mr-2 sm:mr-3 flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Our Development Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">📋</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Discovery</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Understanding your business needs and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">🎨</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Design</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Creating stunning, user-friendly designs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">💻</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Development</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Building your website with modern technologies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">🚀</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Launch</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Deploying and maintaining your website</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Technologies We Use</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="premium-card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Frontend</h3>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>• React.js & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div className="premium-card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Backend</h3>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django</li>
                  <li>• Database Design</li>
                  <li>• API Development</li>
                </ul>
              </div>
              <div className="premium-card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Tools</h3>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a 
                href="/contact" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                🚀 Launch My Website
              </a>
              <a 
                href="/pricing" 
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <span className="mr-2">📈</span>
                Grow My Business
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="/contact" 
                className="inline-block text-yellow-300 text-sm underline"
              >
                Book a Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 