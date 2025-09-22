import { useEffect } from 'react'
import PayPalCheckout from './PayPalCheckout'
import { trackViewContent, trackAddToCart, trackInitiateCheckout, trackButtonClick, trackSchedule } from '../utils/facebookPixel'

const Pricing = () => {
  useEffect(() => {
    // Track that user viewed the pricing page
    trackViewContent('Pricing Page', 'pricing_page')
  }, [])

  const handlePlanClick = (planName: string, planPrice: string) => {
    const priceValue = parseFloat(planPrice.replace(',', ''))
    trackAddToCart(planName, priceValue, 'DZD')
    trackButtonClick(`Select ${planName} Plan`, 'pricing_plans')
  }

  const handlePayPalClick = (planName: string, amount: string) => {
    trackInitiateCheckout(planName, parseFloat(amount), 'USD')
    trackButtonClick(`PayPal Checkout ${planName}`, 'pricing_plans')
  }
  const plans = [
    {
      name: "Starter Collection",
      price: "8,500",
      currency: "DA",
      period: "per bottle",
      description: "Perfect for discovering luxury fragrances",
      features: [
        "Premium designer perfumes from top brands",
        "Authentic and original products only",
        "Beautiful gift packaging included",
        "Expert fragrance recommendations",
        "Fast and secure delivery",
        "30-day satisfaction guarantee",
        "Personalized fragrance consultation"
      ],
      popular: false,
      cta: "Shop Starter Collection",
      color: "border-blue-500"
    },
    {
      name: "Premium Collection",
      price: "15,000",
      currency: "DA",
      period: "per bottle",
      description: "For fragrance enthusiasts and collectors",
      features: [
        "Everything in Starter Collection",
        "Exclusive niche fragrances",
        "Limited edition and rare scents",
        "Premium presentation boxes",
        "Complimentary sample vials",
        "VIP customer service",
        "Access to exclusive launches",
        "Fragrance layering consultations",
        "Priority restocking notifications"
      ],
      popular: true,
      cta: "Shop Premium Collection",
      color: "border-orange-500"
    },
    {
      name: "Luxury Collection",
      price: "25,000",
      currency: "DA",
      period: "per bottle",
      description: "Ultimate luxury for connoisseurs",
      features: [
        "Everything in Premium Collection",
        "Ultra-rare and discontinued fragrances",
        "Custom fragrance blending service",
        "Luxury crystal bottles and presentation",
        "Personal fragrance advisor",
        "Exclusive access to private collections",
        "White-glove delivery service",
        "Lifetime fragrance consultation",
        "VIP events and launches",
        "Custom engraving and personalization",
        "Priority access to new arrivals"
      ],
      popular: false,
      cta: "Shop Luxury Collection",
      color: "border-purple-500"
    }
  ]

  const addons = [
    {
      name: "Fragrance Consultation",
      price: "2,000",
      description: "Personalized fragrance advice and recommendations",
      features: ["30-minute consultation", "Scent profiling", "Custom recommendations", "Follow-up support"]
    },
    {
      name: "Gift Packaging",
      price: "1,500",
      description: "Luxury gift wrapping and presentation",
      features: ["Premium gift boxes", "Ribbon and bow", "Gift message card", "Luxury shopping bag"]
    },
    {
      name: "Sample Discovery Set",
      price: "3,000",
      description: "Try multiple fragrances before buying full size",
      features: ["5 premium samples", "Detailed scent notes", "Recommendation guide", "Full-size discount"]
    },
    {
      name: "VIP Membership",
      price: "5,000",
      description: "Exclusive benefits and early access to new arrivals",
      features: ["Early access to launches", "Exclusive discounts", "Priority customer service", "Special events"]
    }
  ]

  return (
    <section id="pricing" className="py-16 px-4 parfumerie-bg pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 parfumerie-card rounded-full parfumerie-text text-sm font-medium mb-8">
            <span className="mr-2">💰</span>
            Transparent Pricing - No Hidden Fees
          </div>

          {/* Free Consultation Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-8">
            <span className="mr-2">🎨</span>
            Free fragrance consultation — discover your perfect scent
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold parfumerie-text mb-6 leading-tight">
            Choose Your
            <span className="block parfumerie-orange-text">Perfect Fragrance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transparent pricing with authentic luxury perfumes. 
            All fragrances come with expert advice and satisfaction guarantee.
          </p>

          {/* Pricing Plans */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`parfumerie-card p-6 md:p-8 relative ${plan.popular ? 'ring-2 ring-orange-500 md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🏆 Best Value
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold parfumerie-text mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 md:mb-6">{plan.description}</p>
                  
                  <div className="mb-2 md:mb-4">
                    <span className="text-3xl md:text-4xl font-bold parfumerie-orange-text">{plan.price}</span>
                    <span className="text-gray-600 text-lg ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.period}</p>
                  {plan.name === 'Premium Collection' && (
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                      <span className="mr-1">💸</span>
                      Best Value for Quality
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-1 gap-1">
                    <div className="text-orange-600 text-xs sm:text-sm">⏱ Fast Delivery Available</div>
                    <div className="text-orange-600 text-xs sm:text-sm">24/7 Customer Support</div>
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 text-sm md:text-base">
                      <span className="text-orange-600 mr-3 flex-shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`parfumerie-blue-button w-full text-center ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
                  onClick={() => {
                    handlePlanClick(plan.name, plan.price)
                    window.open('/contact', '_self')
                  }}
                >
                  {plan.cta}
                </button>
                {/* PayPal checkout - fixed USD per plan */}
                <div className="mt-3">
                  {(() => {
                    const amountMap = { Starter: '1.00', Professional: '3.00', Enterprise: '7.00' } as const
                    const amount = amountMap[plan.name as keyof typeof amountMap]
                    if (!amount) return null
                    return (
                      <>
                        <div className="text-gray-600 text-xs mb-2">Pay {plan.name} with PayPal ({amount} USD):</div>
                        <PayPalCheckout
                          amount={amount}
                          currency="USD"
                          description={`${plan.name} plan - full payment`}
                          className="flex justify-center"
                          onSuccess={() => handlePayPalClick(plan.name, amount)}
                        />
                      </>
                    )
                  })()}
                </div>
                <div className="mt-3">
                  <button 
                    className="parfumerie-button w-full text-center text-sm"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    Book a Free Consultation
                  </button>
                </div>

                <div className="mt-4 text-gray-500 text-xs sm:text-sm">
                  <div>Pay once. Lifetime ownership. No hidden fees.</div>
                  <div>Not sure? Get a free 30-minute consultation before committing.</div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="parfumerie-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold parfumerie-text text-center mb-8">Additional Services</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-base">
              Enhance your fragrance experience with these premium add-ons. Perfect for fragrance enthusiasts and collectors.
            </p>
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <span className="mr-2">⏳</span>
                Lock 2025 rates — prices increase in 2026
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="parfumerie-card p-6 text-left">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl font-bold parfumerie-text mb-2">{addon.name}</h3>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-2xl font-bold parfumerie-orange-text">{addon.price}</div>
                      <div className="text-gray-500 text-sm">DA</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="text-orange-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="parfumerie-button w-full text-center text-sm"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    Book Service
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="parfumerie-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold parfumerie-text text-center mb-8">Why Choose Our Perfumes?</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">💎</span>
                </div>
                <h4 className="parfumerie-text font-semibold mb-2 text-base">Authentic Quality</h4>
                <p className="text-gray-600 text-sm">Only genuine, original fragrances from verified suppliers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🛡️</span>
                </div>
                <h4 className="parfumerie-text font-semibold mb-2 text-base">Expert Advice</h4>
                <p className="text-gray-600 text-sm">Professional fragrance consultations and personalized recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">✨</span>
                </div>
                <h4 className="parfumerie-text font-semibold mb-2 text-base">Premium Experience</h4>
                <p className="text-gray-600 text-sm">Luxury presentation and exceptional customer service</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="parfumerie-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold parfumerie-text text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h4 className="parfumerie-text font-semibold mb-2">How can I be sure the perfumes are authentic?</h4>
                  <p className="text-gray-600 text-sm">All our perfumes come with certificates of authenticity and are sourced directly from authorized distributors.</p>
                </div>
                <div>
                  <h4 className="parfumerie-text font-semibold mb-2">Do you offer fragrance consultations?</h4>
                  <p className="text-gray-600 text-sm">Yes! We provide personalized fragrance consultations to help you find your perfect scent.</p>
                </div>
                <div>
                  <h4 className="parfumerie-text font-semibold mb-2">What if I don't like the fragrance?</h4>
                  <p className="text-gray-600 text-sm">We offer a 30-day satisfaction guarantee. If you're not happy, we'll help you find a better match.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="parfumerie-text font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-600 text-sm">We accept bank transfers, cash payments, PayPal, and mobile money.</p>
                </div>
                <div>
                  <h4 className="parfumerie-text font-semibold mb-2">Do you provide gift wrapping?</h4>
                  <p className="text-gray-600 text-sm">Yes! We offer luxury gift packaging and personalized gift messages for special occasions.</p>
                </div>
                <div>
                  <h4 className="parfumerie-text font-semibold mb-2">How long does delivery take?</h4>
                  <p className="text-gray-600 text-sm">We offer fast delivery within 2-5 business days, with same-day delivery available in major cities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold parfumerie-text mb-6">Ready to Find Your Perfect Scent?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Get a free fragrance consultation and personalized recommendations. 
              No obligation, just expert advice to help you discover your signature scent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="parfumerie-blue-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Get Free Consultation', 'pricing_cta')
                  window.open('/contact', '_self')
                }}
              >
                🚀 Get Free Consultation
              </button>
              <a 
                href="https://wa.me/+213797339451?text=Hi! I'm interested in your premium perfumes. Can you help me find my perfect fragrance?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="parfumerie-button text-base px-8 py-3"
              >
                <span className="mr-2">W</span>
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
