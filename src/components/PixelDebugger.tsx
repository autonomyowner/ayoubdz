import { useEffect, useState } from 'react';

const PixelDebugger = () => {
  const [pixelStatus, setPixelStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkPixel = () => {
      if (typeof window === 'undefined') {
        setPixelStatus('Server-side rendering');
        return;
      }

      if (typeof window.fbq !== 'function') {
        setPixelStatus('❌ fbq not found');
        return;
      }

      if (!window._fbq) {
        setPixelStatus('❌ _fbq not found');
        return;
      }

      if (!window._fbq.loaded) {
        setPixelStatus('⏳ Pixel loading...');
        setTimeout(checkPixel, 1000);
        return;
      }

      setPixelStatus('✅ Pixel loaded and ready');
    };

    checkPixel();
  }, []);

  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <div>Meta Pixel: {pixelStatus}</div>
      <div>fbq: {typeof window !== 'undefined' && typeof window.fbq === 'function' ? '✅' : '❌'}</div>
      <div>_fbq: {typeof window !== 'undefined' && window._fbq ? '✅' : '❌'}</div>
      <div>loaded: {typeof window !== 'undefined' && window._fbq?.loaded ? '✅' : '❌'}</div>
    </div>
  );
};

export default PixelDebugger;
