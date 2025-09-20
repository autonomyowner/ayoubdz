import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div>
              <h1 className="luxora-text font-bold text-lg sm:text-xl">SITEDZ Store</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${location.pathname === '/services' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${location.pathname === '/pricing' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              Contact
            </Link>
            <button className="maroon-button">
              GET QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden luxora-text hover:text-amber-600 transition-colors text-lg font-bold"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/services' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/pricing' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/contact' ? 'text-amber-600' : 'luxora-text hover:text-amber-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="block mx-3 my-2 maroon-button w-full text-center">
                GET QUOTE
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 