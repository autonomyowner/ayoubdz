const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
              Modern technology meets business excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in creating cutting-edge websites and digital solutions for Algerian businesses. 
              Our team combines modern technology with deep understanding of local market needs to deliver 
              websites that drive growth, enhance customer experience, and establish your digital presence.
            </p>
            <button className="luxora-green-button">
              CONTACT US
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center"
                alt="Modern business technology"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 