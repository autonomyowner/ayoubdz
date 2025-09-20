const ContactPage = () => {
  const contactMethods = [
    {
      title: "Email Us",
      value: "autonomy.owner@gmail.com",
      description: "Send us your project requirements",
      link: "mailto:autonomy.owner@gmail.com"
    },
    {
      title: "Call Us",
      value: "0797339451",
      description: "Speak directly with our team",
      link: "tel:+213797339451"
    },
    {
      title: "WhatsApp",
      value: "0797339451",
      description: "Quick chat about your project",
      link: "https://wa.me/+213797339451"
    },
    {
      title: "Location",
      value: "Algeria",
      description: "Serving clients nationwide",
      link: "#"
    }
  ]

  return (
    <section id="contact-page" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 luxora-card rounded-full luxora-text text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="text-center">Get In Touch - We're Here to Help</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold luxora-text mb-4 sm:mb-6 leading-tight">
            Contact
            <span className="block luxora-green-text">Our Agency</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to start your web development project? Get in touch with our agency. 
            We're here to discuss your needs and bring your vision to life.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="luxora-card p-4 sm:p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold luxora-text mb-1 sm:mb-2">{method.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">{method.description}</p>
                <div className="luxora-green-text font-semibold text-sm sm:text-base">{method.value}</div>
              </a>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Contact Form */}
            <div className="luxora-card p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold luxora-text mb-4 sm:mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block luxora-text font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block luxora-text font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block luxora-text font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400">
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
                  <label className="block luxora-text font-semibold mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400">
                    <option value="">Select budget range</option>
                    <option value="100k-200k">100,000 - 200,000 DA</option>
                    <option value="200k-400k">200,000 - 400,000 DA</option>
                    <option value="400k-600k">400,000 - 600,000 DA</option>
                    <option value="600k+">600,000+ DA</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Project Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="luxora-green-button w-full text-base sm:text-lg py-3 sm:py-4"
                >
                  🚀 Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="luxora-card p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold luxora-text mb-4 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl font-bold">L</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Location</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Algeria - Serving clients nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Business Hours</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Services</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Custom websites, E-commerce, Booking systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl font-bold">R</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Response Time</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Within 24 hours for all inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxora-green-bg p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Why Choose Our Agency?</h3>
                <ul className="space-y-2 sm:space-y-3 text-white text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Expert team of professional developers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Modern, responsive design approach
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Complete project management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold luxora-text text-center mb-8">Quick Contact Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Project Inquiry" 
                className="luxora-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 font-bold">E</div>
                <h3 className="text-lg md:text-xl font-bold luxora-text mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">Send us your project details</p>
              </a>
              
              <a 
                href="https://wa.me/+213797339451?text=Hi! I'm interested in your web development services. Can you tell me more?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="luxora-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 font-bold">W</div>
                <h3 className="text-lg md:text-xl font-bold luxora-text mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">Quick chat with us</p>
              </a>
              
              <a 
                href="tel:+213797339451" 
                className="luxora-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 font-bold">C</div>
                <h3 className="text-lg md:text-xl font-bold luxora-text mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">Speak directly with us</p>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold luxora-text mb-6">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Not sure yet? Get a free 30-minute consultation — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Free Consultation Request" 
                className="luxora-green-button text-base px-8 py-3"
              >
                🚀 Book Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="luxora-button text-base px-8 py-3"
              >
                <span className="mr-2">G</span>
                Grow My Business
              </a>
            </div>
            <div className="mt-4 text-gray-600 text-sm">Delivered in 5 days · 24/7 WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
