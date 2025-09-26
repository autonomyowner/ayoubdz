import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 navbar-smooth ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Company Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/pics/replacementimages/99.webp" 
              alt="AyoubDz Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/product-gros" 
              className={`transition-colors ${location.pathname === '/product-gros' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
            >
              {t('nav.productGros')}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
            >
              {t('nav.contact')}
            </Link>
            <button 
              className="orange-button"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('nav.shopNow')}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'ar' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                عربي
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors text-lg font-bold"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/product-gros" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/product-gros' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.productGros')}
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/contact' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <button 
                className="block mx-3 my-2 orange-button w-full text-center"
                onClick={() => {
                  window.open('/contact', '_self')
                  setIsMenuOpen(false)
                }}
              >
                {t('nav.shopNow')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-4 px-3 py-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'fr' 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'ar' 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  عربي
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 