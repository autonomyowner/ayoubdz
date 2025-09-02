const Footer = () => {
  return (
    <footer className="glass-effect border-t border-yellow-500/30">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 premium-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">SITEDZ</h3>
                <p className="premium-text text-sm">Web Development Agency</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premier web development agency in Algeria, specializing in creating stunning websites 
              for clinics, travel agencies, real estate, and e-commerce businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:autonomy.owner@gmail.com" 
                className="premium-text hover:text-yellow-300 transition-colors"
              >
                <span className="text-2xl">📧</span>
              </a>
              <a 
                href="https://wa.me/+213797339451" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-text hover:text-yellow-300 transition-colors"
              >
                <span className="text-2xl">💬</span>
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
                Algeria
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                autonomy.owner@gmail.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                0797339451
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SITEDZ Web Development Agency. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="mailto:autonomy.owner@gmail.com" 
              className="premium-text hover:text-yellow-300 transition-colors text-sm"
            >
              Get Free Quote
            </a>
            <a 
              href="https://wa.me/+213797339451" 
              target="_blank" 
              rel="noopener noreferrer"
              className="premium-text hover:text-yellow-300 transition-colors text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 