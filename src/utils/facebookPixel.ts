// Facebook Pixel utility functions
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
    _fbq: any;
  }
}

// Wait for pixel to be ready
const waitForPixel = (): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }
    
    const checkPixel = () => {
      if (typeof window.fbq === 'function' && window._fbq && window._fbq.loaded) {
        resolve();
      } else {
        setTimeout(checkPixel, 100);
      }
    };
    
    checkPixel();
  });
};

export const trackPageView = async (url?: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    await waitForPixel();
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      console.log('Facebook Pixel: PageView tracked', url ? `for ${url}` : '');
    }
  } catch (error) {
    console.warn('Facebook Pixel: Failed to track PageView', error);
  }
};

export const trackEvent = async (eventName: string, data?: any) => {
  if (typeof window === 'undefined') return;
  
  try {
    await waitForPixel();
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, data);
      console.log('Facebook Pixel: Event tracked', eventName, data);
    }
  } catch (error) {
    console.warn('Facebook Pixel: Failed to track event', eventName, error);
  }
};

// Common events for your business
export const trackLead = (data?: any) => {
  trackEvent('Lead', data);
};

export const trackContact = (data?: any) => {
  trackEvent('Contact', data);
};

export const trackPurchase = (value?: number, currency = 'USD') => {
  trackEvent('Purchase', {
    value: value,
    currency: currency
  });
};

export const trackViewContent = (contentName?: string) => {
  trackEvent('ViewContent', {
    content_name: contentName
  });
};
