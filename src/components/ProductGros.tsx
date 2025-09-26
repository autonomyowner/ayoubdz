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
    features: shoe.features,
    originalPrice: shoe.originalPrice,
    discount: shoe.discount
  }))

  const wholesaleBenefits = [
    {
      icon: '💰',
      title: 'Tarifs Préférentiels',
      description: 'Économisez jusqu\'à 30% sur nos prix de détail'
    },
    {
      icon: '🚚',
      title: 'Livraison Gratuite',
      description: 'Livraison gratuite pour toutes commandes supérieures à 50 000 DA'
    },
    {
      icon: '📦',
      title: 'Quantités Flexibles',
      description: 'Commandes à partir de 5 paires, sans limite maximale'
    },
    {
      icon: '🎯',
      title: 'Support Marketing',
      description: 'Matériel marketing et photos professionnelles inclus'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      minQuantity: '5-10 paires',
      discount: '10%',
      features: ['Prix préférentiel', 'Support client', 'Livraison standard'],
      color: 'blue'
    },
    {
      name: 'Professional',
      minQuantity: '11-25 paires',
      discount: '20%',
      features: ['Prix préférentiel', 'Support prioritaire', 'Livraison gratuite', 'Photos produits'],
      color: 'purple'
    },
    {
      name: 'Enterprise',
      minQuantity: '25+ paires',
      discount: '30%',
      features: ['Prix préférentiel', 'Support dédié', 'Livraison gratuite', 'Marketing pack', 'Consultation personnalisée'],
      color: 'gold'
    }
  ]

  return (
    <section id="product-gros" className="relative overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full text-white text-sm font-bold mb-8 shadow-2xl">
            <span className="mr-2 text-lg">🏪</span>
            {t('productGros.badge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            {t('productGros.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('productGros.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('productGros.cta.getPricing')}
            </button>
            
            <button 
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/30 hover:border-white/50"
              onClick={() => window.open('tel:+213671389113', '_self')}
            >
              {t('productGros.cta.callNow')}
            </button>
          </div>
        </div>
      </div>

      {/* Wholesale Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-sm font-bold mb-6 shadow-lg">
              <span className="mr-2">✨</span>
              {t('productGros.benefitsBadge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Avantages de la Vente en Gros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi nos partenaires nous font confiance pour développer leur business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wholesaleBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos Tarifs de Gros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le niveau qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                tier.color === 'gold' ? 'border-yellow-400 ring-4 ring-yellow-100' : 
                tier.color === 'purple' ? 'border-purple-400' : 'border-blue-400'
              }`}>
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                    tier.color === 'gold' ? 'bg-yellow-100 text-yellow-800' :
                    tier.color === 'purple' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {tier.name}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.minQuantity}</h3>
                  <div className="text-4xl font-black text-gray-800">{tier.discount}</div>
                  <p className="text-gray-600">de réduction</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  tier.color === 'gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg hover:shadow-xl' :
                  tier.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl' : 
                  'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl'
                }`}>
                  Choisir {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos Produits en Gros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection complète de chaussures disponibles en vente en gros
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wholesaleProducts.map((product, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.minOrder}
                  </div>
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-gray-800">{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()} DA
                      </div>
                    )}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Contact Button */}
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    {t('productGros.contactWholesale')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white text-lg font-bold mb-8 shadow-2xl">
            <span className="mr-3 text-2xl">💼</span>
            {t('productGros.cta.badge')}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            {t('productGros.cta.title')}
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('productGros.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 hover:bg-blue-50"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('productGros.cta.getPricing')}
            </button>
            
            <button 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
              onClick={() => window.open('tel:+213671389113', '_self')}
            >
              {t('productGros.cta.callNow')}
            </button>
          </div>
          
          <div className="mt-12 text-blue-200">
            <p className="text-lg">📞 Réponse garantie sous 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGros
