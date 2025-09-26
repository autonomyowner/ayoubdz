const Footer = () => {
  
  const quickLinks = [
    { name: "سياسة التوصيل", url: "/contact" },
    { name: "سياسة الخصوصية", url: "/contact" },
    { name: "سياسة الاسترجاع والاستبدال", url: "/contact" },
    { name: "شروط وأحكام استخدام المتجر", url: "/contact" },
    { name: "اتصل بنا", url: "/contact" }
  ]

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com", icon: "📘" },
    { name: "Instagram", url: "https://www.instagram.com", icon: "📷" }
  ]
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Lundi au Vendredi 9h à 18h</p>
            <p className="text-gray-300">Médéa, Algérie</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Moyens de paiement</h4>
            <div className="flex justify-center space-x-4 text-2xl">
              <span>💳</span>
              <span>💰</span>
              <span>🏦</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025, <span className="font-bold">AyoubDz</span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">
                Website by <a href="https://www.sitedz.store" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors">www.sitedz.store</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 