import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Storage keys for QR tracking (same as ShortLinkRedirect)
const QR_TRACKING_CODE_KEY = 'qr_tracking_code';
const QR_TRACKING_TIMESTAMP_KEY = 'qr_tracking_timestamp';

export default function QRCodeRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract language from pathname (/smile/de or /smile/en)
  const lang = location.pathname === '/smile/en' ? 'en' : 
               location.pathname === '/smile/de' ? 'de' : null;

  useEffect(() => {
    if (!lang) {
      navigate('/smile-campaign', { replace: true });
      return;
    }

    // Use legacy code format for existing QR codes
    const trackingCode = `smile-${lang}`;
    
    // Store tracking info - will be picked up by destination page
    sessionStorage.setItem(QR_TRACKING_CODE_KEY, trackingCode);
    sessionStorage.setItem(QR_TRACKING_TIMESTAMP_KEY, new Date().toISOString());

    // Store source for signup attribution (existing system)
    sessionStorage.setItem('signup_source', `qr-code-${lang}`);
    sessionStorage.setItem('signup_source_timestamp', new Date().toISOString());

    // Redirect to shareable smile campaign URL - tracking fires after redirect
    navigate(`/s/${lang}`, { replace: true });
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
