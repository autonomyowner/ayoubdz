// Facebook Pixel utility functions
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

export const trackPageView = (url?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
    console.log('Facebook Pixel: PageView tracked', url ? `for ${url}` : '');
  }
};

export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
    console.log('Facebook Pixel: Event tracked', eventName, data);
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
