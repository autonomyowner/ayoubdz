const Footer = () => {
  return (
    <footer className="luxora-bg border-t border-amber-200">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold luxora-text mb-2">SITEDZ Store</h3>
            <p className="text-gray-600">Tech Solutions For Algerian Businesses</p>
          </div>
          <div className="text-center md:text-right">
            <p className="luxora-text mb-4">Monday to Friday 9am to 6pm</p>
            <button 
              className="maroon-button"
              onClick={() => window.open('/contact', '_self')}
            >
              GET QUOTE
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-amber-200 pt-8">
          <div className="flex justify-end">
            <div className="flex space-x-4">
              {/* Social Media Links */}
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