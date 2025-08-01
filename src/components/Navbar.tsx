import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-yellow-500/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/pics/logo1.png" 
                alt="The HIVE Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">The HIVE</h1>
              <p className="premium-text text-xs">Speaking Club</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/offer-for-you" 
              className={`transition-colors ${location.pathname === '/offer-for-you' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
            >
              Offer for You
            </Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-yellow-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/offer-for-you" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/offer-for-you' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Offer for You
              </Link>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 btn-primary text-center"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 