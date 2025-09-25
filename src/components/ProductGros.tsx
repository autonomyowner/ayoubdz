import { useLanguage } from '../contexts/LanguageContext'
import { shoes } from '../data/shoes'

const ProductGros = () => {
  const { t } = useLanguage()
  
  const wholesaleProducts = shoes.map(shoe => ({
    title: `${shoe.name} - Gros`,
    description: shoe.description,
    image: shoe.image,
    price: `À partir de ${shoe.price.toLocaleString()} DA`,
    minOrder: `Commande minimum 5 paires`,
    features: shoe.features
  }))


  return (
    <section id="product-gros" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-semibold mb-6 shadow-lg">
            <span className="mr-2">🏪</span>
            {t('productGros.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('productGros.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            {t('productGros.subtitle')}
          </p>
          
          {/* Wholesale Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-amber-500 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
            <span className="text-center">
              {t('productGros.benefitsBadge')}
            </span>
          </div>
        </div>

        {/* Wholesale Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {wholesaleProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-200">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.minOrder}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="text-amber-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Contact for Wholesale Button */}
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() => window.open('/contact', '_self')}
                >
                  {t('productGros.contactWholesale')}
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Wholesale Contact CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
              <span className="text-center">{t('productGros.cta.badge')}</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('productGros.cta.title')}
            </h3>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('productGros.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="bg-white text-amber-600 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:bg-amber-50"
                onClick={() => window.open('/contact', '_self')}
              >
                {t('productGros.cta.getPricing')}
              </button>
              
              <button 
                className="bg-amber-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:bg-amber-700"
                onClick={() => window.open('tel:+213671389113', '_self')}
              >
                {t('productGros.cta.callNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGros
