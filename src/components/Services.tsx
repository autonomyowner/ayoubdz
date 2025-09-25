const Services = () => {
  const perfumeCollections = [
    {
      title: "3 Luxury Perfumes",
      description: "Premium designer fragrances from top brands like Tom Ford, Armani, and Dior. Authentic products with guaranteed quality and elegant presentation.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=300&fit=crop",
      price: "From 25,000 DA",
      features: ["Authentic designer brands", "Premium quality", "Elegant packaging", "Worldwide shipping"]
    },
    {
      title: "Niche Fragrances",
      description: "Exclusive and rare perfumes from artisanal houses like Initio, Xerjoff, and Maison Francis Kurkdjian. Unique scents for discerning customers.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=300&fit=crop",
      price: "From 35,000 DA",
      features: ["Artisanal craftsmanship", "Limited editions", "Unique compositions", "Expert curation"]
    },
    {
      title: "Signature Collections",
      description: "Curated collections of seasonal and themed fragrances. From warm winter scents to fresh summer perfumes, we have the perfect scent for every occasion.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=300&fit=crop",
      price: "From 20,000 DA",
      features: ["Seasonal collections", "Themed fragrances", "Perfect for any occasion", "Expert recommendations"]
    },
    {
      title: "Men's Luxury Collection",
      description: "Sophisticated fragrances for the modern gentleman. From classic colognes to bold, contemporary scents that define masculinity.",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede05432?w=500&h=300&fit=crop",
      price: "From 22,000 DA",
      features: ["Masculine elegance", "Modern classics", "Bold contemporary scents", "Professional appeal"]
    },
    {
      title: "Women's Essence",
      description: "Feminine and sophisticated fragrances that capture the essence of modern womanhood. From delicate florals to powerful orientals.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=300&fit=crop",
      price: "From 24,000 DA",
      features: ["Feminine sophistication", "Floral compositions", "Oriental elegance", "Timeless appeal"]
    },
    {
      title: "Unisex Masterpieces",
      description: "Gender-neutral fragrances that transcend boundaries. Perfect for those who appreciate complexity and sophistication in their scent choices.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=300&fit=crop",
      price: "From 28,000 DA",
      features: ["Gender-neutral appeal", "Complex compositions", "Modern sophistication", "Versatile wear"]
    },
    {
      title: "Vintage Classics",
      description: "Timeless fragrances from the golden age of perfumery. Rediscover the elegance and sophistication of classic perfume houses.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=300&fit=crop",
      price: "From 30,000 DA",
      features: ["Timeless elegance", "Classic compositions", "Vintage appeal", "Collector's items"]
    },
    {
      title: "Oriental Treasures",
      description: "Rich, warm, and exotic fragrances inspired by the East. Experience the mystery and allure of oriental perfumery.",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede05432?w=500&h=300&fit=crop",
      price: "From 32,000 DA",
      features: ["Exotic compositions", "Warm oriental notes", "Mysterious allure", "Rich complexity"]
    },
    {
      title: "Fresh & Aquatic",
      description: "Clean, refreshing fragrances that capture the essence of ocean breezes and mountain air. Perfect for everyday elegance.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=300&fit=crop",
      price: "From 18,000 DA",
      features: ["Fresh compositions", "Aquatic notes", "Everyday elegance", "Clean sophistication"]
    },
    {
      title: "Gourmand Delights",
      description: "Sweet, edible-inspired fragrances that tantalize the senses. From vanilla dreams to chocolate fantasies.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=300&fit=crop",
      price: "From 26,000 DA",
      features: ["Sweet compositions", "Edible inspirations", "Sensual appeal", "Comforting warmth"]
    }
  ]

  return (
    <section id="services" className="py-16 px-4 relative overflow-hidden" style={{
      backgroundImage: "url('/pics/replacementimages/albert-hyseni-wAEDRX8KsKo-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-90 rounded-full text-gray-800 text-sm font-semibold mb-6 shadow-lg">
            <span className="mr-2">🌸</span>
            Premium Perfume Collections
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our <span className="text-amber-400">Luxury</span> Collections
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Discover our curated selection of premium fragrances from the world's most prestigious perfume houses. 
            Each collection is carefully selected for quality, authenticity, and exceptional olfactory experiences.
          </p>
        </div>

        {/* Perfume Collections Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {perfumeCollections.map((collection, index) => (
            <div key={index} className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-100">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {collection.price}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{collection.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{collection.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {collection.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <span className="text-amber-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Shop Now Button */}
                <button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() => window.open('/contact', '_self')}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose AyoubDz?</h3>
            <p className="text-gray-600 text-lg">We guarantee authenticity, quality, and exceptional service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">100% Authentic</h4>
              <p className="text-gray-600">All our perfumes are guaranteed authentic with original packaging and certificates.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Nationwide Delivery</h4>
              <p className="text-gray-600">Fast and secure delivery to all 58 wilayas of Algeria with tracking.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Expert Consultation</h4>
              <p className="text-gray-600">Personal fragrance consultation to help you find your perfect signature scent.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services