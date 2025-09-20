const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Semi-circular background */}
      <div className="absolute inset-0 semi-circle-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="text-center md:text-left px-8 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Lets Chat
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Ready to transform your business with a professional website? 
              We'd love to discuss your project and help you establish a strong digital presence. 
              Get in touch with us today and let's start building your success story together.
            </p>
            <button 
              className="maroon-button"
              onClick={() => window.open('/contact', '_self')}
            >
              GET QUOTE
            </button>
          </div>

          {/* Right Content - Empty space for design balance */}
          <div className="hidden md:block">
            {/* This space is intentionally left empty to match the Luxora design */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 