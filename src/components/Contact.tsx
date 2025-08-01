const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/thehivespeakingclub/",
      icon: "📸",
      followers: "500K+",
      description: "Follow us for latest updates and community highlights"
    },
    {
      name: "Registration Form",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform",
      icon: "📝",
      followers: "Join Now",
      description: "Register for upcoming sessions and join our community"
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
            Ready to join The HIVE? Connect with us and start your English speaking journey today.
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
                    <h4 className="text-white font-semibold mb-1">Locations</h4>
                    <p className="text-gray-300 text-sm">
                      Algiers Centre & Tlemcen, Algeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Session Times</h4>
                    <p className="text-gray-300 text-sm">
                      Saturdays: 1:00 PM - 3:00 PM & 3:30 PM - 5:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pricing</h4>
                    <p className="text-gray-300 text-sm">
                      500 DA per session
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Requirements</h4>
                    <p className="text-gray-300 text-sm">
                      Age 17-35, Intermediate or Advanced English
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Join The HIVE?</h3>
              <ul className="space-y-3 text-slate-900">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Improve English speaking skills
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Build professional network
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Develop critical thinking
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Join 500K+ member community
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block premium-card p-6 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{social.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{social.name}</h3>
                      <p className="text-gray-300 text-sm">{social.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="premium-text font-bold text-lg">{social.followers}</div>
                    <div className="text-gray-400 text-sm">followers</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="premium-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Registration</h3>
              <p className="text-gray-300 mb-4">
                Ready to join? Fill out our registration form and we'll get back to you with all the details.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your English Skills?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join The HIVE Speaking Club today and become part of Algeria's premier English conversation community. 
            Don't miss out on this opportunity to develop your skills and network with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Join The HIVE Now
            </a>
            <a 
              href="https://www.instagram.com/thehivespeakingclub/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 