import { useEffect, useState } from 'react'
import { trackViewContent, trackFormSubmission, trackSchedule, trackButtonClick } from '../utils/facebookPixel'
import DeliveryPriceSelector from './DeliveryPriceSelector'
import { API_CONFIG } from '../config/api'
import { deliveryPricingData } from '../data/deliveryPricing'
import { useLanguage } from '../contexts/LanguageContext'

const ContactPage = () => {
  const { t } = useLanguage()
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
    <section id="contact-page" className="py-16 px-4 relative overflow-hidden section-mobile" style={{
      backgroundImage: "url('/pics/templates/background image.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      filter: 'brightness(0.8) contrast(1.1)'
    }}>
      {/* Gradient Overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-amber-900/40"></div>
      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white bg-opacity-90 rounded-full text-gray-800 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg badge-mobile">
            <span className="text-center">{t('contactPage.badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg title-mobile">
            {t('contactPage.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-md subtitle-mobile">
            {t('contactPage.subtitle')}
          </p>


          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Contact Form */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm p-4 sm:p-6 md:p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-xs font-semibold mb-3">
                  <span className="mr-1">🛒</span>
                  {t('contactPage.form.badge')}
                </div>
                  <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-3">{t('contactPage.form.title')}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                  {t('contactPage.form.subtitle')}
                  </p>
              </div>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-green-600 text-xl mr-2">✅</span>
                    <div>
                      <strong>{t('contactPage.form.success.title')}</strong>
                      <p className="text-sm mt-1">{t('contactPage.form.success.message')}</p>
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
                      <strong>{t('contactPage.form.error.title')}</strong>
                      <p className="text-sm mt-1">{t('contactPage.form.error.message')}</p>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-4 form-mobile" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.firstName')}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
                      placeholder={t('contactPage.form.firstNamePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.lastName')}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
                      placeholder={t('contactPage.form.lastNamePlaceholder')}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
                    placeholder={t('contactPage.form.phonePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.product')}</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
                    placeholder={t('contactPage.form.productPlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.quantity')}</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
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
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.searchWilaya')}</label>
                  <input
                    type="text"
                    value={wilayaSearch}
                    onChange={(e) => setWilayaSearch(e.target.value)}
                    placeholder={t('contactPage.form.searchWilayaPlaceholder')}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">{t('contactPage.form.chooseWilaya')}</label>
                  <select
                    value={selectedWilaya}
                    onChange={(e) => setSelectedWilaya(e.target.value)}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 mobile-input"
                    required
                  >
                    <option value="">{t('contactPage.form.chooseWilayaPlaceholder')}</option>
                    {deliveryPricingData
                      .filter(item => item.wilaya.toLowerCase().includes(wilayaSearch.toLowerCase()))
                      .map(item => (
                        <option key={item.wilayaCode} value={item.wilaya}>{item.wilaya}</option>
                      ))}
                  </select>
                  {selectedWilayaData && (
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-semibold text-amber-600">
                        {t('contactPage.form.deliveryPrice').replace('{price}', selectedWilayaData.price === 0 ? 'FREE' : `${selectedWilayaData.price.toLocaleString()} DA`)}
                      </div>
                      <div>{t('contactPage.form.deliveryTime').replace('{time}', selectedWilayaData.deliveryTime)}</div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mobile-button ${isSubmitting ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'}`}
                  onClick={() => {
                    console.log('Button clicked!')
                    console.log('Form data before submit:', { ...formData, wilaya: selectedWilaya, deliveryPrice: selectedWilayaData?.price })
                    trackButtonClick('Send Message', 'contact_form')
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      {t('contactPage.form.sendingOrder')}
                    </>
                  ) : (
                    <>
                      {t('contactPage.form.placeOrder')}
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

            {/* Why Choose Allouani Perfum */}
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">{t('contactPage.whyChoose.title')}</h3>
                  <ul className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg md:text-xl">
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      {t('contactPage.whyChoose.expert')}
                    </li>
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      {t('contactPage.whyChoose.authentic')}
                    </li>
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      {t('contactPage.whyChoose.personal')}
                    </li>
                    <li className="flex items-center">
                      <span className="mr-4 text-2xl">•</span>
                      {t('contactPage.whyChoose.delivery')}
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">{t('contactPage.cta.title')}</h3>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              {t('contactPage.cta.description')}
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
                {t('contactPage.cta.bookConsultation')}
              </a>
              <a 
                href="/services" 
                className="luxora-button text-base px-8 py-3"
              >
                <span className="mr-2">🌸</span>
                {t('contactPage.cta.viewPerfumes')}
              </a>
            </div>
            <div className="mt-4 text-white text-sm drop-shadow-md">{t('contactPage.cta.support')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
