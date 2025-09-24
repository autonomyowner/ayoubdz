import Typewriter from './Typewriter'

const Hero = () => {
  const backgroundImagePath = "/pics/templates/background image.jpg"
  
  const typewriterWords = [
    "Premium Perfumes",
    "Luxury Fragrances", 
    "Exotic Scents",
    "Designer Brands",
    "Signature Collections"
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden hero-section-mobile">
      {/* Enhanced Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url("${backgroundImagePath}")`,
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      />
      {/* Gradient Overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-amber-900/40"></div>
      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400/90 to-orange-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 shadow-xl border border-white/20 badge-mobile">
            ✨ Premium Perfumes & Fragrances in Algeria
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl hero-mobile" style={{marginBottom: '0.5rem'}}>
            Discover
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
              <Typewriter 
                words={typewriterWords}
                typeSpeed={150}
                deleteSpeed={75}
                pauseTime={2500}
                className="inline-block"
              />
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg subtitle-mobile">
            Specialized in premium perfumes and luxury fragrances for discerning customers in Algeria. 
            We bring you the finest scents from around the world to enhance your personal style.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-[#03045e]/30 mobile-button"
              style={{
                background: 'linear-gradient(to right, #03045e, #023e8a)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #023e8a, #0077b6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #03045e, #023e8a)';
              }}
              onClick={() => window.open('/services', '_self')}
            >
              Shop Perfumes
            </button>
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-[#03045e]/30 mobile-button"
              style={{
                background: 'linear-gradient(to right, #03045e, #023e8a)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #023e8a, #0077b6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #03045e, #023e8a)';
              }}
              onClick={() => window.open('/services', '_self')}
            >
              View Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 