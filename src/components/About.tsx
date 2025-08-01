const About = () => {
  return (
    <section id="about" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="premium-text">The HIVE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're more than just an English speaking club - we're a community of passionate learners 
            dedicated to personal growth and cultural exchange.
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
                To create an inclusive environment where young Algerians can develop their English 
                speaking skills through meaningful conversations, debates, and cultural exchange.
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
                To become Algeria's leading platform for English language development, 
                fostering a community of confident speakers and global citizens.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose The HIVE?</h3>
              <ul className="space-y-3 text-slate-900">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Interactive debate sessions with real-world topics
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Networking opportunities with like-minded individuals
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Professional development and leadership skills
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Cultural exchange and global perspectives
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Supportive community of 500K+ members
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="premium-card p-6 text-center">
                <div className="text-3xl font-bold premium-text mb-2">17-35</div>
                <div className="text-gray-400 text-sm">Age Range</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="text-3xl font-bold premium-text mb-2">Intermediate+</div>
                <div className="text-gray-400 text-sm">English Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 