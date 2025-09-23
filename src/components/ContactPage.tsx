import { useEffect, useState } from 'react'
import { trackViewContent, trackFormSubmission, trackSchedule, trackButtonClick } from '../utils/facebookPixel'
import DeliveryPriceSelector from './DeliveryPriceSelector'
import { API_CONFIG } from '../config/api'
import { deliveryPricingData } from '../data/deliveryPricing'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    product: '',
    quantity: '1'
  })

  const [wilayaSearch, setWilayaSearch] = useState('')
  const [selectedWilaya, setSelectedWilaya] = useState('')
  const selectedWilayaData = deliveryPricingData.find(item => item.wilaya === selectedWilaya)

  useEffect(() => {
    // Track that user viewed the contact page
    trackViewContent('Contact Page', 'contact_page')
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('=== FORM SUBMISSION STARTED ===')
    console.log('Form data:', formData)
    console.log('All required fields filled:', {
      firstName: !!formData.firstName,
      lastName: !!formData.lastName,
      phone: !!formData.phone,
      product: !!formData.product,
      wilaya: !!selectedWilaya,
      quantity: !!formData.quantity
    })
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Track form submission
      trackFormSubmission('Quick Order', {
        product: formData.product,
        wilaya: selectedWilaya,
        delivery_price: selectedWilayaData ? selectedWilayaData.price : undefined,
        quantity: formData.quantity
      })
      
      // Submit directly to Google Apps Script using form data (avoids CORS)
      const GOOGLE_SCRIPT_URL = API_CONFIG.GOOGLE_APPS_SCRIPT_URL
      
      console.log('Sending request to:', GOOGLE_SCRIPT_URL)
      
      // Create form data to avoid CORS issues
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('product', formData.product)
      formDataToSend.append('quantity', formData.quantity)
      formDataToSend.append('wilaya', selectedWilaya)
      if (selectedWilayaData) formDataToSend.append('deliveryPrice', String(selectedWilayaData.price))
      formDataToSend.append('timestamp', new Date().toISOString())
      formDataToSend.append('source', 'website_contact_form')
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      if (response.ok) {
        console.log('Form submitted successfully!')
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          product: '',
          quantity: '1'
        })
        setSelectedWilaya('')
        setWilayaSearch('')
      } else {
        console.log('Form submission failed with status:', response.status)
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-page" className="py-16 px-4 relative overflow-hidden" style={{
      backgroundImage: "url('/pics/templates/bg contact.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white bg-opacity-90 rounded-full text-gray-800 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg">
            <span className="text-center">✨ Premium Perfumes & Luxury Fragrances</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Contact
            <span className="block text-amber-400">Allouna Perfum</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-md">
            Ready to discover your perfect signature scent? Get in touch with us to explore our premium collection of luxury fragrances. 
            We're here to help you find the ideal perfume that matches your personality and style.
          </p>


          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Contact Form */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
                  <span className="mr-2">🛒</span>
                  Quick Order Form
                </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Order Your Perfume</h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  Enter your details, choose your wilaya, and see delivery price instantly.
                  </p>
              </div>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-green-600 text-xl mr-2">✅</span>
                    <div>
                      <strong>Message sent successfully!</strong>
                      <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-red-600 text-xl mr-2">❌</span>
                    <div>
                      <strong>Failed to send message</strong>
                      <p className="text-sm mt-1">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    placeholder="+213 559 94 82 46"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Product</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    placeholder="Product name or link"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Quantity</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                {/* Wilaya + Delivery Price */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Search Wilaya</label>
                  <input
                    type="text"
                    value={wilayaSearch}
                    onChange={(e) => setWilayaSearch(e.target.value)}
                    placeholder="Type wilaya name..."
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Choose Your Wilaya</label>
                  <select
                    value={selectedWilaya}
                    onChange={(e) => setSelectedWilaya(e.target.value)}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    required
                  >
                    <option value="">Select your wilaya</option>
                    {deliveryPricingData
                      .filter(item => item.wilaya.toLowerCase().includes(wilayaSearch.toLowerCase()))
                      .map(item => (
                        <option key={item.wilayaCode} value={item.wilaya}>{item.wilaya}</option>
                      ))}
                  </select>
                  {selectedWilayaData && (
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-semibold text-amber-600">
                        Delivery Price: {selectedWilayaData.price === 0 ? 'FREE' : `${selectedWilayaData.price.toLocaleString()} DA`}
                      </div>
                      <div>Estimated delivery: <span className="font-medium">{selectedWilayaData.deliveryTime}</span></div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'}`}
                  onClick={() => {
                    console.log('Button clicked!')
                    console.log('Form data before submit:', { ...formData, wilaya: selectedWilaya, deliveryPrice: selectedWilayaData?.price })
                    trackButtonClick('Send Message', 'contact_form')
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending Your Order...
                    </>
                  ) : (
                    <>
                      🛒 Place Order
                    </>
                  )}
                </button>
                
                {/* Debug buttons - remove in production */}
                {import.meta.env.DEV && (
                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        console.log('Debug: Form data:', formData)
                        console.log('Debug: Is submitting:', isSubmitting)
                        console.log('Debug: Submit status:', submitStatus)
                      }}
                      className="w-full bg-gray-500 text-white py-2 px-4 rounded text-sm"
                    >
                      🔍 Debug Info (Dev Only)
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        console.log('=== TEST SUBMISSION ===')
                        // Fill form with test data
                        setFormData({
                          firstName: 'Test',
                          lastName: 'User',
                          phone: '1234567890',
                          product: 'Test Product',
                          quantity: '1'
                        })
                        setSelectedWilaya('Alger')
                        setWilayaSearch('Alger')
                        console.log('Form filled with test data')
                      }}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded text-sm"
                    >
                      📝 Fill Test Data
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Why Choose Allouna Perfum */}
            <div className="space-y-8">
              <div 
                className="relative p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden min-h-[500px] md:min-h-[600px]"
                style={{
                  backgroundImage: "url('/pics/templates/guy.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Why Choose Allouna Perfum?</h3>
                  <ul className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg md:text-xl">
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      Expert fragrance consultants with years of experience
                    </li>
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      Authentic premium perfumes from top brands
                    </li>
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      Personal scent matching and consultation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      Nationwide delivery with care and expertise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Price Selector */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <DeliveryPriceSelector />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">Ready to Find Your Signature Scent?</h3>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Not sure which fragrance suits you? Get a free 30-minute fragrance consultation — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:allouaniparfumerie9@gmail.com?subject=Free Fragrance Consultation Request" 
                className="luxora-green-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Book Free Consultation', 'cta_section')
                }}
              >
                🌸 Book Free Fragrance Consultation
              </a>
              <a 
                href="/services" 
                className="luxora-button text-base px-8 py-3"
              >
                <span className="mr-2">🌸</span>
                View Perfumes
              </a>
            </div>
            <div className="mt-4 text-white text-sm drop-shadow-md">Premium fragrances delivered nationwide · 24/7 WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
