const Footer = () => {
  return (
    <footer className="parfumerie-bg border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold parfumerie-text mb-2">Parfumerie Allouani</h3>
            <p className="text-gray-600">Premium Perfumes & Fragrances For Algerian Customers</p>
          </div>
          <div className="text-center md:text-right">
            <p className="parfumerie-text mb-4">Monday to Friday 9am to 6pm</p>
            <button 
              className="orange-button"
              onClick={() => window.open('/contact', '_self')}
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Website Services Note */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xs text-gray-500">
                Need a website? Contact <a href="tel:+213797339451" className="text-orange-500 hover:text-orange-600 transition-colors">0797339451</a>
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white text-xs font-bold">FB</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white text-xs font-bold">LI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 