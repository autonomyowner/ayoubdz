import { useEffect, useState } from 'react'
import { trackContact, trackViewContent, trackFormSubmission, trackSchedule, trackButtonClick } from '../utils/facebookPixel'

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
      
      // Submit directly to Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcTJsZzOps9jtqm-fcQS0sEIeofbTht101LwWYhGjtmorVt1a4tQpv-QmhEdHfLiVotg/exec'
      
      console.log('Sending request to:', GOOGLE_SCRIPT_URL)
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        })
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
  const contactMethods = [
    {
      title: "Email Us",
      value: "autonomy.owner@gmail.com",
      description: "Send us your project requirements",
      link: "mailto:autonomy.owner@gmail.com"
    },
    {
      title: "Call Us",
      value: "0797339451",
      description: "Speak directly with our team",
      link: "tel:+213797339451"
    },
    {
      title: "WhatsApp",
      value: "0797339451",
      description: "Quick chat about your project",
      link: "https://wa.me/+213797339451"
    },
    {
      title: "Location",
      value: "Algeria",
      description: "Serving clients nationwide",
      link: "#"
    }
  ]

  return (
    <section id="contact-page" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 luxora-card rounded-full luxora-text text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="text-center">Get In Touch - We're Here to Help</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold luxora-text mb-4 sm:mb-6 leading-tight">
            Contact
            <span className="block luxora-green-text">Our Agency</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to start your web development project? Get in touch with our agency. 
            We're here to discuss your needs and bring your vision to life.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="luxora-card p-4 sm:p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  trackContact({ method: method.title, value: method.value })
                  trackButtonClick(`Contact ${method.title}`, 'contact_methods_grid')
                }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold luxora-text mb-1 sm:mb-2">{method.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">{method.description}</p>
                <div className="luxora-green-text font-semibold text-sm sm:text-base">{method.value}</div>
              </a>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Contact Form */}
            <div className="luxora-card p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold luxora-text mb-4 sm:mb-6 text-center">Send Us a Message</h2>
              
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block luxora-text font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block luxora-text font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block luxora-text font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="clinic">Clinic Website</option>
                    <option value="travel">Travel Agency Website</option>
                    <option value="real-estate">Real Estate Website</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="custom">Custom Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Budget Range</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="100k-200k">100,000 - 200,000 DA</option>
                    <option value="200k-400k">200,000 - 400,000 DA</option>
                    <option value="400k-600k">400,000 - 600,000 DA</option>
                    <option value="600k+">600,000+ DA</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`luxora-green-button w-full text-base sm:text-lg py-3 sm:py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={(e) => {
                    console.log('Button clicked!')
                    console.log('Form data before submit:', formData)
                    trackButtonClick('Send Message', 'contact_form')
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      🚀 Send Message
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="luxora-card p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold luxora-text mb-4 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl font-bold">L</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Location</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Algeria - Serving clients nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Business Hours</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Services</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Custom websites, E-commerce, Booking systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 luxora-green-bg rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl font-bold">R</span>
                    </div>
                    <div>
                      <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Response Time</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Within 24 hours for all inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxora-green-bg p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Why Choose Our Agency?</h3>
                <ul className="space-y-2 sm:space-y-3 text-white text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Expert team of professional developers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Modern, responsive design approach
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Complete project management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">•</span>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold luxora-text text-center mb-8">Quick Contact Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Project Inquiry" 
                className="luxora-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 font-bold">E</div>
                <h3 className="text-lg md:text-xl font-bold luxora-text mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">Send us your project details</p>
              </a>
              
              <a 
                href="https://wa.me/+213797339451?text=Hi! I'm interested in your web development services. Can you tell me more?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="luxora-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 font-bold">W</div>
                <h3 className="text-lg md:text-xl font-bold luxora-text mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">Quick chat with us</p>
              </a>
              
              <a 
                href="tel:+213797339451" 
                className="luxora-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 font-bold">C</div>
                <h3 className="text-lg md:text-xl font-bold luxora-text mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">Speak directly with us</p>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold luxora-text mb-6">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Not sure yet? Get a free 30-minute consultation — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Free Consultation Request" 
                className="luxora-green-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Book Free Consultation', 'cta_section')
                }}
              >
                🚀 Book Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="luxora-button text-base px-8 py-3"
              >
                <span className="mr-2">G</span>
                Grow My Business
              </a>
            </div>
            <div className="mt-4 text-gray-600 text-sm">Delivered in 5 days · 24/7 WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
