import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { templates } from '../data/shoes'
import { useLanguage } from '../contexts/LanguageContext'

const Popular = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Create exactly 2 copies for perfect seamless loop
  const duplicatedTemplates = [...templates, ...templates]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let isScrolling = false
    let startX = 0
    let scrollLeft = 0
    let animationId: number
    let isUserInteractingRef = false

    // Function to handle seamless loop reset
    const handleSeamlessLoop = () => {
      if (!container) return
      
      const containerWidth = container.scrollWidth / 2 // Half because we have 2 copies
      const currentScroll = container.scrollLeft
      
      // If we've scrolled past the first set, reset to the beginning
      if (currentScroll >= containerWidth) {
        container.scrollLeft = currentScroll - containerWidth
      }
    }

    // Auto-scroll function
    const autoScroll = () => {
      if (!isUserInteractingRef && container) {
        container.scrollLeft += 0.5 // Smooth scroll speed
        handleSeamlessLoop()
        animationId = requestAnimationFrame(autoScroll)
      }
    }

    // Start auto-scroll
    const startAutoScroll = () => {
      if (!isUserInteractingRef) {
        autoScroll()
      }
    }

    // Stop auto-scroll
    const stopAutoScroll = () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      isScrolling = true
      isUserInteractingRef = true
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      stopAutoScroll()
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX) * 1.5 // Smooth scroll multiplier
      container.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
      isScrolling = false
      // Resume auto-scroll after a delay
      setTimeout(() => {
        isUserInteractingRef = false
        startAutoScroll()
      }, 3000)
    }

    // Mouse events for desktop
    const handleMouseDown = (e: MouseEvent) => {
      isScrolling = true
      isUserInteractingRef = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      container.style.cursor = 'grabbing'
      stopAutoScroll()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 1.5
      container.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
      isScrolling = false
      container.style.cursor = 'grab'
      setTimeout(() => {
        isUserInteractingRef = false
        startAutoScroll()
      }, 3000)
    }

    const handleMouseLeave = () => {
      isScrolling = false
      container.style.cursor = 'grab'
    }

    // Add event listeners
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Start auto-scroll
    startAutoScroll()

    return () => {
      stopAutoScroll()
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="popular" className="py-16 px-4 md:px-0 parfumerie-bg overflow-hidden">
      {/* Title section with container */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold parfumerie-text mb-6 title-mobile">
            {t('popular.title')}
          </h2>
          <p className="text-gray-400 text-sm md:hidden">
            {t('popular.mobileHint')}
          </p>
        </div>
      </div>

      {/* Desktop: Edge-to-edge cards section */}
      <div className="relative w-full hidden md:block">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide cursor-grab select-none"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {duplicatedTemplates.map((template, index) => (
            <div 
              key={`${template.id}-${index}`} 
              className="flex-shrink-0 mx-4 md:mx-6 group cursor-pointer"
              onClick={() => navigate(`/template/${template.id}`)}
            >
              {/* Image */}
              <div className="w-80 h-64 rounded-lg overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold parfumerie-orange-text text-center">
                {template.name}
              </h3>
              
              {/* Price Badge */}
              <div className="text-center mt-2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {template.price.toLocaleString()} DA
                </span>
                {template.discount && (
                  <div className="text-xs text-gray-600 mt-1">خصم {template.discount}%</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Stacked cards section */}
      <div className="md:hidden">
        <div className="product-grid-mobile">
          {templates.map((template, index) => (
            <div 
              key={`${template.id}-${index}`} 
              className="product-card-mobile group cursor-pointer"
              onClick={() => navigate(`/template/${template.id}`)}
            >
              {/* Image */}
              <div className="product-image-mobile overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold parfumerie-orange-text text-center mb-2">
                {template.name}
              </h3>
              
              {/* Price Badge */}
              <div className="text-center">
                <span className="badge-mobile">
                  {template.price.toLocaleString()} DA
                </span>
                {template.discount && (
                  <div className="text-xs text-gray-600 mt-1">خصم {template.discount}%</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular