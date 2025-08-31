const Contact = () => {
  const contactInfo = [
    {
      name: "Email",
      value: "autonomy.owner@gmail.com",
      icon: "📧",
      link: "mailto:autonomy.owner@gmail.com",
      description: "Send us your project requirements"
    },
    {
      name: "Phone",
      value: "0797339451",
      icon: "📞",
      link: "tel:+213797339451",
      description: "Call us for immediate consultation"
    },
    {
      name: "WhatsApp",
      value: "0797339451",
      icon: "💬",
      link: "https://wa.me/+213797339451",
      description: "Quick chat about your project"
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="premium-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your web development project? Contact our team and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300 text-sm">
                      Algeria - Serving clients nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-300 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">💼</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Services</h4>
                    <p className="text-gray-300 text-sm">
                      Custom websites, E-commerce, Booking systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">🎯</span>
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
                  Expert team of 4 professional developers
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

          {/* Contact Links */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? "_blank" : undefined}
                rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block premium-card p-6 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{contact.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{contact.name}</h3>
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="premium-text font-bold text-lg">{contact.value}</div>
                    <div className="text-gray-400 text-sm">contact</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="premium-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Start Your Project</h3>
              <p className="text-gray-300 mb-4">
                Ready to build your website? Contact us for a free consultation and quote.
              </p>
              <a 
                href="mailto:autonomy.owner@gmail.com" 
                className="btn-primary w-full text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business Online?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team create a stunning website that will elevate your business and drive results. 
            Contact us today to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:autonomy.owner@gmail.com" 
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Project
            </a>
            <a 
              href="https://wa.me/+213797339451" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              <span className="mr-2">💬</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 