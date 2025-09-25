import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  
  return (
    <footer className="parfumerie-bg border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start mb-4">
              <img 
                src="/pics/replacementimages/99.webp" 
                alt="AyoubDz Logo" 
                className="h-16 w-auto mb-2"
              />
              <h3 className="text-3xl font-bold parfumerie-text">{t('footer.company')}</h3>
            </div>
            <p className="text-gray-600">{t('footer.description')}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="parfumerie-text mb-4">Lundi au Vendredi 9h à 18h - Médéa, Algérie</p>
            <button 
              className="orange-button"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('nav.shopNow')}
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Website Services Note */}
            <div className="text-center md:text-left mb-4 md:mb-0">
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