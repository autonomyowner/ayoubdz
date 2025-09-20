import Typewriter from './Typewriter'

const Hero = () => {
  const typewriterWords = [
    "Premium Websites",
    "E-commerce Stores", 
    "Business Portals",
    "Mobile Apps",
    "Digital Solutions"
  ]

  return (
    <section id="home" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            Premier Tech Solutions in Algeria
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold luxora-text mb-6 leading-tight">
            We Build
            <span className="block luxora-green-text">
              <Typewriter 
                words={typewriterWords}
                typeSpeed={150}
                deleteSpeed={75}
                pauseTime={2500}
                className="inline-block"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized in creating stunning websites for Algerian e-commerce businesses and businesses in general. 
            We transform your digital presence into a powerful business tool.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center luxora-card p-6">
              <div className="text-2xl md:text-3xl font-bold luxora-green-text mb-2">Fast Delivery</div>
              <div className="text-gray-600 text-sm md:text-base">Your website ready in just 5 days</div>
            </div>
            <div className="text-center luxora-card p-6">
              <div className="text-2xl md:text-3xl font-bold luxora-green-text mb-2">Modern Design</div>
              <div className="text-gray-600 text-sm md:text-base">Beautiful, responsive websites</div>
            </div>
            <div className="text-center luxora-card p-6">
              <div className="text-2xl md:text-3xl font-bold luxora-green-text mb-2">Local Support</div>
              <div className="text-gray-600 text-sm md:text-base">Algerian team, Arabic & French support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button"
              onClick={() => window.open('https://wa.me/+213797339451?text=مرحبا! أريد إنشاء موقع ويب لعملي', '_blank')}
            >
              Start My Project
            </button>
            <button 
              className="luxora-button"
              onClick={() => window.open('/pricing', '_self')}
            >
              View Pricing
            </button>
          </div>

          {/* Speed & Support Promises */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
              Delivered in 5 days
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              24/7 WhatsApp Support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 