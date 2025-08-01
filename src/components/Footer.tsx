const Footer = () => {
  return (
    <footer className="glass-effect border-t border-yellow-500/30">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 premium-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">The HIVE</h3>
                <p className="premium-text text-sm">Speaking Club</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Algeria's premier English speaking club, fostering a community of confident speakers 
              and global citizens through interactive debates and networking.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/thehivespeakingclub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-text hover:text-yellow-300 transition-colors"
              >
                <span className="text-2xl">📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-300 hover:text-yellow-400 transition-colors">Locations</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Algiers & Tlemcen
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                Saturdays
              </li>
              <li className="flex items-center">
                <span className="mr-2">💰</span>
                500 DA/session
              </li>
              <li className="flex items-center">
                <span className="mr-2">📸</span>
                500K+ followers
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 The HIVE Speaking Club. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="premium-text hover:text-yellow-300 transition-colors text-sm"
            >
              Register Now
            </a>
            <a 
              href="https://www.instagram.com/thehivespeakingclub/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="premium-text hover:text-yellow-300 transition-colors text-sm"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 