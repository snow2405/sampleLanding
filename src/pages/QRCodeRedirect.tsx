import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { analytics } from '../utils/analytics';
import { track } from '@vercel/analytics';

export default function QRCodeRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract language from pathname
  const lang = location.pathname === '/en' ? 'en' : location.pathname === '/de' ? 'de' : null;

  useEffect(() => {
    const trackAndRedirect = async () => {
      if (!lang) {
        navigate('/smile-campaign', { replace: true });
        return;
      }

      // Track QR code scan event
      const eventName = `qr_code_scan_${lang}`;
      
      // Send to both custom analytics and Vercel Analytics
      analytics.event('qr_code_scan', {
        language: lang,
        scan_type: 'unique',
        timestamp: new Date().toISOString(),
      });
      
      // Vercel Analytics tracking
      track('QR Code Scan', {
        language: lang,
        event: eventName,
      });

      console.log('[QR Code] Tracked scan:', eventName);

      // Store source in sessionStorage for later tracking
      sessionStorage.setItem('signup_source', `qr-code-${lang}`);
      sessionStorage.setItem('signup_source_timestamp', new Date().toISOString());

      // Wait a bit to ensure analytics events are sent
      await new Promise(resolve => setTimeout(resolve, 300));

      // Redirect to shareable smile campaign URL (not /de or /en)
      navigate(`/s/${lang}`, { replace: true });
    };

    trackAndRedirect();
  }, [lang, navigate]);

  // Show a brief loading message while redirecting
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'var(--color-roasarian)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.2rem',
      color: 'var(--color-purple-dark)',
    }}>
      Loading...
    </div>
  );
}
