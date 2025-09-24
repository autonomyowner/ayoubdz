import { useLanguage } from '../contexts/LanguageContext'

const ProductGros = () => {
  const { t } = useLanguage()
  
  const wholesaleProducts = [
    {
      title: "Luxury Perfumes - Wholesale",
      description: "Premium designer fragrances in bulk quantities. Perfect for retailers, boutiques, and luxury stores looking to offer authentic high-end perfumes.",
      image: "/pics/templates/tom ford tobaco vanila.jpg",
      price: "From 15,000 DA per unit",
      minOrder: "Minimum 10 units",
      features: ["Authentic designer brands", "Bulk pricing available", "Original packaging", "Wholesale certificates", "Fast delivery"]
    },
    {
      title: "Niche Fragrances - Bulk",
      description: "Exclusive artisanal perfumes in wholesale quantities. Ideal for specialty stores and fragrance boutiques seeking unique, rare scents.",
      image: "/pics/templates/initio.jpg",
      price: "From 18,000 DA per unit",
      minOrder: "Minimum 5 units",
      features: ["Artisanal craftsmanship", "Limited editions", "Unique compositions", "Bulk discounts", "Expert consultation"]
    },
    {
      title: "Signature Collections - Wholesale",
      description: "Curated seasonal and themed fragrance collections in bulk. Perfect for stores wanting to offer diverse, seasonal perfume selections.",
      image: "/pics/templates/by the fireplace.jpg",
      price: "From 12,000 DA per unit",
      minOrder: "Minimum 15 units",
      features: ["Seasonal collections", "Themed fragrances", "Bulk packaging", "Marketing support", "Display materials"]
    },
    {
      title: "Men's Luxury Collection - Bulk",
      description: "Sophisticated men's fragrances in wholesale quantities. Ideal for men's boutiques, barbershops, and luxury retailers.",
      image: "/pics/templates/oud aud.jpg",
      price: "From 14,000 DA per unit",
      minOrder: "Minimum 8 units",
      features: ["Masculine elegance", "Modern classics", "Bulk pricing", "Retail support", "Marketing materials"]
    },
    {
      title: "Women's Essence - Wholesale",
      description: "Feminine and sophisticated fragrances in bulk quantities. Perfect for women's boutiques, beauty stores, and luxury retailers.",
      image: "/pics/templates/armani you intensli.jpg",
      price: "From 16,000 DA per unit",
      minOrder: "Minimum 8 units",
      features: ["Feminine sophistication", "Floral compositions", "Bulk discounts", "Display support", "Training materials"]
    },
    {
      title: "Unisex Masterpieces - Bulk",
      description: "Gender-neutral fragrances in wholesale quantities. Great for modern retailers and contemporary boutiques.",
      image: "/pics/templates/ganymede.jpg",
      price: "From 17,000 DA per unit",
      minOrder: "Minimum 6 units",
      features: ["Gender-neutral appeal", "Modern sophistication", "Bulk packaging", "Marketing support", "Expert training"]
    },
    {
      title: "Vintage Classics - Wholesale",
      description: "Timeless vintage fragrances in bulk quantities. Perfect for antique stores, vintage boutiques, and collectors.",
      image: "/pics/templates/santal royal.jpg",
      price: "From 20,000 DA per unit",
      minOrder: "Minimum 5 units",
      features: ["Timeless elegance", "Classic compositions", "Collector's items", "Bulk certificates", "Historical documentation"]
    },
    {
      title: "Oriental Treasures - Bulk",
      description: "Rich, exotic oriental fragrances in wholesale quantities. Ideal for specialty stores and cultural boutiques.",
      image: "/pics/templates/naxos.jpg",
      price: "From 19,000 DA per unit",
      minOrder: "Minimum 6 units",
      features: ["Exotic compositions", "Oriental notes", "Cultural authenticity", "Bulk packaging", "Cultural guides"]
    },
    {
      title: "Fresh & Aquatic - Wholesale",
      description: "Clean, refreshing fragrances in bulk quantities. Perfect for everyday retailers and casual boutiques.",
      image: "/pics/templates/hacivat.jpg",
      price: "From 11,000 DA per unit",
      minOrder: "Minimum 20 units",
      features: ["Fresh compositions", "Aquatic notes", "Bulk pricing", "Retail support", "Marketing materials"]
    },
    {
      title: "Gourmand Delights - Bulk",
      description: "Sweet, edible-inspired fragrances in wholesale quantities. Great for specialty stores and gourmet boutiques.",
      image: "/pics/templates/devotion 2.jpg",
      price: "From 13,000 DA per unit",
      minOrder: "Minimum 12 units",
      features: ["Sweet compositions", "Edible inspirations", "Bulk discounts", "Display support", "Sensory marketing"]
    }
  ]


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
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
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
