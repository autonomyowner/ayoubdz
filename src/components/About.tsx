const About = () => {
  return (
    <section id="about" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="premium-text">Our Agency</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate developers dedicated to creating premium websites that drive business growth 
            and deliver exceptional user experiences for our clients across Algeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower Algerian businesses with cutting-edge web solutions that enhance their digital presence, 
                drive customer engagement, and accelerate business growth through innovative technology.
              </p>
            </div>

            <div className="premium-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become Algeria's leading web development agency, known for delivering premium quality websites 
                that set new standards in design, functionality, and user experience.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Our Agency?</h3>
              <ul className="space-y-3 text-slate-900">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Expert team of professional developers
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Specialized in multiple business sectors
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Modern, responsive design approach
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Complete project management and support
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Competitive pricing with premium quality
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="premium-card p-6 text-center">
                <div className="text-3xl font-bold premium-text mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About 