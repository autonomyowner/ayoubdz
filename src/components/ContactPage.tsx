const ContactPage = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      value: "autonomy.owner@gmail.com",
      description: "Send us your project requirements",
      link: "mailto:autonomy.owner@gmail.com",
      color: "bg-blue-500/20 border-blue-500/30"
    },
    {
      icon: "📞",
      title: "Call Us",
      value: "0797339451",
      description: "Speak directly with our team",
      link: "tel:+213797339451",
      color: "bg-green-500/20 border-green-500/30"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "0797339451",
      description: "Quick chat about your project",
      link: "https://wa.me/+213797339451",
      color: "bg-green-500/20 border-green-500/30"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Algeria",
      description: "Serving clients nationwide",
      link: "#",
      color: "bg-purple-500/20 border-purple-500/30"
    }
  ]


  return (
    <section id="contact-page" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-blue-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">📞</span>
            Get In Touch - We're Here to Help
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Contact
            <span className="block premium-text">Our Agency</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to start your web development project? Get in touch with our agency. 
            We're here to discuss your needs and bring your vision to life.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300 ${method.color}`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                <div className="premium-text font-semibold">{method.value}</div>
              </a>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="premium-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select project type</option>
                    <option value="clinic">Clinic Website</option>
                    <option value="travel">Travel Agency Website</option>
                    <option value="real-estate">Real Estate Website</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="custom">Custom Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select budget range</option>
                    <option value="100k-200k">100,000 - 200,000 DA</option>
                    <option value="200k-400k">200,000 - 400,000 DA</option>
                    <option value="400k-600k">400,000 - 600,000 DA</option>
                    <option value="600k+">600,000+ DA</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Project Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-4"
                >
                  🚀 Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="premium-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-300 text-sm">
                        Algeria - Serving clients nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-300 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Services</h4>
                      <p className="text-gray-300 text-sm">
                        Custom websites, E-commerce, Booking systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Response Time</h4>
                      <p className="text-gray-300 text-sm">
                        Within 24 hours for all inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Our Agency?</h3>
                <ul className="space-y-3 text-slate-900">
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Expert team of professional developers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Modern, responsive design approach
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Complete project management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* Quick Contact Section */}
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Contact Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Project Inquiry" 
                className="premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm">Send us your project details</p>
              </a>
              
              <a 
                href="https://wa.me/+213797339451?text=Hi! I'm interested in your web development services. Can you tell me more?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm">Quick chat with us</p>
              </a>
              
              <a 
                href="tel:+213797339451" 
                className="premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm">Speak directly with us</p>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait to bring your vision to life. Contact us today and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Project Inquiry" 
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

export default ContactPage
