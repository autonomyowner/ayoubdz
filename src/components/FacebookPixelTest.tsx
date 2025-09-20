import { useEffect, useState } from 'react'
import { 
  trackPageView, 
  trackEvent, 
  trackLead, 
  trackContact, 
  trackPurchase, 
  trackViewContent,
  trackInitiateCheckout,
  trackAddToCart,
  trackCompleteRegistration,
  trackSchedule,
  trackSearch,
  trackFormSubmission,
  trackButtonClick
} from '../utils/facebookPixel'

const FacebookPixelTest = () => {
  const [pixelStatus, setPixelStatus] = useState<string>('Checking...')
  const [testResults, setTestResults] = useState<string[]>([])

  useEffect(() => {
    const checkPixel = () => {
      if (typeof window === 'undefined') {
        setPixelStatus('Server-side rendering')
        return
      }

      if (typeof window.fbq !== 'function') {
        setPixelStatus('❌ fbq not found')
        return
      }

      if (!window._fbq) {
        setPixelStatus('❌ _fbq not found')
        return
      }

      if (!window._fbq.loaded) {
        setPixelStatus('⏳ Pixel loading...')
        setTimeout(checkPixel, 1000)
        return
      }

      setPixelStatus('✅ Pixel loaded and ready')
    }

    checkPixel()
  }, [])

  const addTestResult = (test: string, success: boolean) => {
    const result = `${success ? '✅' : '❌'} ${test}`
    setTestResults(prev => [...prev, result])
  }

  const runAllTests = async () => {
    setTestResults([])
    
    try {
      // Test PageView
      await trackPageView('/test')
      addTestResult('PageView tracking', true)
    } catch (error) {
      addTestResult('PageView tracking', false)
    }

    try {
      // Test ViewContent
      await trackViewContent('Test Content', 'test')
      addTestResult('ViewContent tracking', true)
    } catch (error) {
      addTestResult('ViewContent tracking', false)
    }

    try {
      // Test Lead
      await trackLead({ test: true })
      addTestResult('Lead tracking', true)
    } catch (error) {
      addTestResult('Lead tracking', false)
    }

    try {
      // Test Contact
      await trackContact({ method: 'test' })
      addTestResult('Contact tracking', true)
    } catch (error) {
      addTestResult('Contact tracking', false)
    }

    try {
      // Test Purchase
      await trackPurchase(100, 'USD', 'Test Product')
      addTestResult('Purchase tracking', true)
    } catch (error) {
      addTestResult('Purchase tracking', false)
    }

    try {
      // Test AddToCart
      await trackAddToCart('Test Product', 50, 'USD')
      addTestResult('AddToCart tracking', true)
    } catch (error) {
      addTestResult('AddToCart tracking', false)
    }

    try {
      // Test InitiateCheckout
      await trackInitiateCheckout('Test Product', 100, 'USD')
      addTestResult('InitiateCheckout tracking', true)
    } catch (error) {
      addTestResult('InitiateCheckout tracking', false)
    }

    try {
      // Test Schedule
      await trackSchedule('Test Consultation')
      addTestResult('Schedule tracking', true)
    } catch (error) {
      addTestResult('Schedule tracking', false)
    }

    try {
      // Test Form Submission
      await trackFormSubmission('Test Form', { test: true })
      addTestResult('Form submission tracking', true)
    } catch (error) {
      addTestResult('Form submission tracking', false)
    }

    try {
      // Test Button Click
      await trackButtonClick('Test Button', 'test_location')
      addTestResult('Button click tracking', true)
    } catch (error) {
      addTestResult('Button click tracking', false)
    }
  }

  // Only show in development
  if (import.meta.env.PROD) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px',
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        🎯 Facebook Pixel Test Panel
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <div>Status: {pixelStatus}</div>
        <div>fbq: {typeof window !== 'undefined' && typeof window.fbq === 'function' ? '✅' : '❌'}</div>
        <div>_fbq: {typeof window !== 'undefined' && window._fbq ? '✅' : '❌'}</div>
        <div>loaded: {typeof window !== 'undefined' && window._fbq?.loaded ? '✅' : '❌'}</div>
      </div>

      <button
        onClick={runAllTests}
        style={{
          background: '#1877f2',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '11px',
          marginBottom: '10px',
          width: '100%'
        }}
      >
        🧪 Run All Tests
      </button>

      {testResults.length > 0 && (
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Test Results:</div>
          {testResults.map((result, index) => (
            <div key={index} style={{ fontSize: '10px', marginBottom: '2px' }}>
              {result}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '10px', fontSize: '10px', color: '#ccc' }}>
        💡 Check browser console for detailed logs
      </div>
    </div>
  )
}

export default FacebookPixelTest
