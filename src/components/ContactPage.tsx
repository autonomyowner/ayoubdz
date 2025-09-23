import { useEffect, useState } from 'react'
import { trackViewContent, trackFormSubmission, trackSchedule, trackButtonClick } from '../utils/facebookPixel'
import DeliveryPriceSelector from './DeliveryPriceSelector'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  })

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
      email: !!formData.email,
      phone: !!formData.phone,
      projectType: !!formData.projectType,
      budget: !!formData.budget
    })
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Track form submission
      trackFormSubmission('Contact Form', {
        project_type: formData.projectType,
        budget_range: formData.budget,
        has_description: formData.description.length > 0
      })
      
      // Track lead generation
      trackFormSubmission('Lead Generation', {
        lead_source: 'contact_form',
        project_type: formData.projectType,
        budget_range: formData.budget
      })
      
      // Submit directly to Google Apps Script using form data (avoids CORS)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcTJsZzOps9jtqm-fcQS0sEIeofbTht101LwWYhGjtmorVt1a4tQpv-QmhEdHfLiVotg/exec'
      
      console.log('Sending request to:', GOOGLE_SCRIPT_URL)
      
      // Create form data to avoid CORS issues
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('projectType', formData.projectType)
      formDataToSend.append('budget', formData.budget)
      formDataToSend.append('description', formData.description)
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
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          description: ''
        })
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
                  <span className="mr-2">🌸</span>
                  Personal Fragrance Consultation
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Scent</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  Tell us about your preferences and let our experts help you discover the ideal fragrance that matches your personality and style.
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
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
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
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Fragrance Preference</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    required
                  >
                    <option value="">Choose your preferred fragrance type</option>
                    <option value="fresh">🌸 Fresh & Citrus</option>
                    <option value="woody">🌲 Woody & Oriental</option>
                    <option value="floral">🌹 Floral & Romantic</option>
                    <option value="spicy">🌶️ Spicy & Warm</option>
                    <option value="aquatic">🌊 Aquatic & Marine</option>
                    <option value="gourmand">🍰 Gourmand & Sweet</option>
                    <option value="consultation">💫 Need Personal Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Budget Range</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
                    required
                  >
                    <option value="">Select your budget range</option>
                    <option value="5k-15k">💰 5,000 - 15,000 DA</option>
                    <option value="15k-30k">💎 15,000 - 30,000 DA</option>
                    <option value="30k-100k">👑 30,000 - 100,000 DA</option>
                    <option value="100k+">✨ 100,000+ DA</option>
                    <option value="discuss">💬 Let's discuss options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">Fragrance Consultation Details</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200 resize-none"
                    placeholder="Tell us about your fragrance preferences, occasions you wear perfume for, and any specific scents you love or want to avoid..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'}`}
                  onClick={() => {
                    console.log('Button clicked!')
                    console.log('Form data before submit:', formData)
                    trackButtonClick('Send Message', 'contact_form')
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending Your Request...
                    </>
                  ) : (
                    <>
                      🌸 Get My Perfect Fragrance Consultation
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
                          email: 'test@example.com',
                          phone: '1234567890',
                          projectType: 'clinic',
                          budget: '200k-400k',
                          description: 'Test submission'
                        })
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
                href="mailto:autonomy.owner@gmail.com?subject=Free Fragrance Consultation Request" 
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
