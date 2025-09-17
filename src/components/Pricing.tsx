import PayPalCheckout from './PayPalCheckout'
const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "15,000",
      currency: "DA",
      period: "one-time",
      description: "For new businesses testing the waters",
      features: [
        "Modern, responsive design that builds trust",
        "Up to 5 pages",
        "Let customers contact you easily",
        "Be discoverable on Google locally",
        "Mobile-friendly on all devices",
        "Basic analytics to see who's visiting",
        "1 month of support"
      ],
      popular: false,
      cta: "Launch My Website",
      color: "border-blue-500"
    },
    {
      name: "Professional",
      price: "35,000",
      currency: "DA",
      period: "one-time",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Everything in Starter",
        "Up to 10 pages",
        "Let clients book you 24/7 and never miss a sale",
        "Get found on Google & attract more customers",
        "Bring traffic from Facebook & Instagram",
        "Track what's working with Google Analytics",
        "Lightning-fast performance to reduce bounce",
        "Update content yourself with an easy CMS",
        "3 months of support"
      ],
      popular: true,
      cta: "Grow My Business",
      color: "border-yellow-500"
    },
    {
      name: "Enterprise",
      price: "75,000",
      currency: "DA",
      period: "one-time",
      description: "Complete solution for large businesses",
      features: [
        "Everything in Professional",
        "Unlimited pages",
        "Sell online and accept payments securely",
        "Custom booking system for complex schedules",
        "Serve customers in multiple languages",
        "Advanced security to protect customer data",
        "Custom integrations with your tools",
        "Performance monitoring & optimization",
        "Automatic backups & maintenance",
        "Priority support — get help fast",
        "6 months of support"
      ],
      popular: false,
      cta: "Dominate My Market",
      color: "border-purple-500"
    }
  ]

  const addons = [
    {
      name: "SEO Package",
      price: "5,000",
      description: "Get found on Google and attract more customers",
      features: ["Keyword research", "On-page SEO", "Technical SEO audit", "3 months monitoring"]
    },
    {
      name: "E-commerce Setup",
      price: "20,000",
      description: "Start selling online with secure payment processing",
      features: ["Product catalog", "Payment integration", "Order management", "Inventory system"]
    },
    {
      name: "Booking System",
      price: "10,000",
      description: "Let clients book you 24/7 and reduce no-shows",
      features: ["Online booking", "Calendar integration", "Email notifications", "Admin dashboard"]
    },
    {
      name: "Maintenance Plan",
      price: "2,500",
      description: "Keep your site fast, secure, and up-to-date",
      features: ["Security updates", "Performance monitoring", "Backup management", "24/7 support"]
    }
  ]

  return (
    <section id="pricing" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 glass-effect border border-yellow-500/30 rounded-full premium-text text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="mr-2">💰</span>
            <span className="text-center">Transparent Pricing - No Hidden Fees</span>
          </div>

          {/* Free First Design Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 glass-effect border border-green-400/30 rounded-full text-green-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="mr-2">🎨</span>
            <span className="text-center">First design is free — start risk-free</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Choose Your
            <span className="block premium-text">Perfect Plan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Transparent pricing with everything you need to succeed online. 
            All plans include hosting, domain, and ongoing support.
          </p>

          {/* Pricing Plans */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`premium-card p-4 sm:p-6 md:p-8 relative ${plan.popular ? 'ring-2 ring-yellow-500 md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      🏆 Best Value
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
                  
                  <div className="mb-2 sm:mb-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold premium-text">{plan.price}</span>
                    <span className="text-gray-300 text-base sm:text-lg ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">{plan.period}</p>
                  {plan.name === 'Professional' && (
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-400/30 text-xs font-medium">
                      <span className="mr-1">💸</span>
                      Save 40,000 DA vs Enterprise
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-1 gap-1">
                    <div className="text-green-300 text-xs sm:text-sm">⏱ Delivered in 5 days</div>
                    <div className="text-green-300 text-xs sm:text-sm">💬 24/7 WhatsApp Support</div>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start sm:items-center text-gray-300 text-sm sm:text-base">
                      <span className="text-green-400 mr-2 sm:mr-3 flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`mailto:autonomy.owner@gmail.com?subject=Interested in Pricing Plan - ${plan.name}`}
                  className={`btn-primary w-full text-center ${plan.popular ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                >
                  {plan.cta}
                </a>
                {/* PayPal checkout for Starter only */}
                {plan.name === 'Starter' && (
                  <div className="mt-3">
                    <div className="text-gray-300 text-xs mb-2">Pay Starter now with PayPal (35 USD):</div>
                    <PayPalCheckout
                      amount={"35.00"}
                      currency="USD"
                      description={`Starter plan - full payment`}
                      className="flex justify-center"
                    />
                  </div>
                )}
                <div className="mt-3">
                  <a 
                    href="/contact" 
                    className="btn-secondary w-full text-center text-xs sm:text-sm"
                  >
                    Book a Free Demo
                  </a>
                </div>

                <div className="mt-4 text-gray-400 text-xs sm:text-sm">
                  <div>Pay once. Lifetime ownership. No hidden fees.</div>
                  <div>Not sure? Get a free 30-minute consultation before committing.</div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Additional Services</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base">
              Enhance your website with these powerful add-ons. Perfect for businesses that need extra functionality.
            </p>
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 glass-effect border border-orange-400/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium">
                <span className="mr-2">⏳</span>
                Lock 2025 rates — prices increase in 2026
              </div>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="premium-card p-4 sm:p-6 text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{addon.name}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{addon.description}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold premium-text">{addon.price}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">DA</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`mailto:autonomy.owner@gmail.com?subject=Interested in Add-on - ${addon.name}`}
                    className="btn-secondary w-full text-center text-xs sm:text-sm"
                  >
                    Lock In 2025 Rate
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Why Choose Our Pricing?</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">💎</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Premium Quality</h4>
                <p className="text-gray-300 text-xs sm:text-sm">All websites built with modern technologies and best practices</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">🛡️</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">No Hidden Costs</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Transparent pricing with everything included upfront</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <span className="text-slate-900 text-lg sm:text-xl md:text-2xl">🎯</span>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Results Driven</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Websites designed to convert visitors into customers</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Frequently Asked Questions</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">How long does it take to build my website?</h4>
                  <p className="text-gray-300 text-sm">Typically 2-4 weeks depending on the complexity and plan chosen.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you provide hosting and domain?</h4>
                  <p className="text-gray-300 text-sm">Yes! All plans include 1 year of hosting and domain registration.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Can I make changes after launch?</h4>
                  <p className="text-gray-300 text-sm">Absolutely! We provide support and can make updates as needed.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-300 text-sm">We accept bank transfers, cash payments, and mobile money.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you provide training?</h4>
                  <p className="text-gray-300 text-sm">Yes! We provide training on how to manage your website content.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Is there a maintenance fee?</h4>
                  <p className="text-gray-300 text-sm">Basic maintenance is included. Premium maintenance is available as an add-on.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a free consultation and custom quote tailored to your specific needs. 
              No obligation, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Free Consultation Request" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                🚀 Get Free Consultation
              </a>
              <a 
                href="https://wa.me/+213797339451?text=Hi! I'm interested in your web development services. Can you tell me more about your pricing?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <span className="mr-2">💬</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
