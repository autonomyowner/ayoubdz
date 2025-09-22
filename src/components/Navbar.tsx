import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Moved to extreme left */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex-shrink-0">
              <img 
                src="/pics/templates/logo.jpg" 
                alt="Parfumerie Allouani Logo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
            </div>
            <div>
              <h1 className="parfumerie-text font-bold text-lg sm:text-xl">Parfumerie Allouani</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'parfumerie-orange-text' : 'parfumerie-text hover:parfumerie-orange-text'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${location.pathname === '/services' ? 'parfumerie-orange-text' : 'parfumerie-text hover:parfumerie-orange-text'}`}
            >
              Perfumes
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'parfumerie-orange-text' : 'parfumerie-text hover:parfumerie-orange-text'}`}
            >
              Contact
            </Link>
            <button 
              className="orange-button"
              onClick={() => window.open('/contact', '_self')}
            >
              SHOP NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden parfumerie-text hover:parfumerie-orange-text transition-colors text-lg font-bold"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'parfumerie-orange-text' : 'parfumerie-text hover:parfumerie-orange-text'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/services' ? 'parfumerie-orange-text' : 'parfumerie-text hover:parfumerie-orange-text'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Perfumes
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/contact' ? 'parfumerie-orange-text' : 'parfumerie-text hover:parfumerie-orange-text'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button 
                className="block mx-3 my-2 orange-button w-full text-center"
                onClick={() => {
                  window.open('/contact', '_self')
                  setIsMenuOpen(false)
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 