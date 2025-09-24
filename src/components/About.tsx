import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold parfumerie-text mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <button 
              className="parfumerie-blue-button"
              onClick={() => window.open('/services', '_self')}
            >
              {t('about.shopButton')}
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/pics/templates/armani you intensli.jpg"
                alt="Premium luxury perfumes"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 