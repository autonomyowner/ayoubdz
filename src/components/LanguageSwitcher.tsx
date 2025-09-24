import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-orange-500 transition-colors duration-200 bg-white hover:bg-orange-50"
    >
      <span className="text-sm font-medium text-gray-700">
        {language === 'en' ? '🇺🇸 EN' : '🇫🇷 FR'}
      </span>
      <svg 
        className="w-4 h-4 text-gray-500" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 5h12M9 3v2m0 14v2m0-8h12" 
        />
      </svg>
    </button>
  )
}

export default LanguageSwitcher

