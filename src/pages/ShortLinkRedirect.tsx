import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { shortLinkMap, destinationPaths } from '../config/shortLinks';

// Storage keys for pending QR tracking
export const QR_TRACKING_CODE_KEY = 'qr_tracking_code';
export const QR_TRACKING_TIMESTAMP_KEY = 'qr_tracking_timestamp';

export default function ShortLinkRedirect() {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    if (!code) {
      navigate('/', { replace: true });
      return;
    }

    const linkConfig = shortLinkMap.get(code.toLowerCase());
    
    if (!linkConfig) {
      // Unknown code, redirect to homepage
      console.warn(`[ShortLink] Unknown code: ${code}`);
      navigate('/', { replace: true });
      return;
    }

    // Store tracking info - will be picked up by destination page
    sessionStorage.setItem(QR_TRACKING_CODE_KEY, code.toLowerCase());
    sessionStorage.setItem(QR_TRACKING_TIMESTAMP_KEY, new Date().toISOString());

    // Also store for signup attribution (existing system)
    const destination = linkConfig.destination;
    if (destination === 'smile-en') {
      sessionStorage.setItem('signup_source', `qr-code-en`);
    } else if (destination === 'smile-de') {
      sessionStorage.setItem('signup_source', `qr-code-de`);
    } else if (destination === 'smart') {
      sessionStorage.setItem('signup_source', `qr-code-smart`);
    } else {
      sessionStorage.setItem('signup_source', `qr-code-home`);
    }
    sessionStorage.setItem('signup_source_timestamp', new Date().toISOString());

    // Immediately redirect - tracking happens after redirect
    const destinationPath = destinationPaths[destination];
    navigate(destinationPath, { replace: true });
  }, [code, navigate]);

  // Brief loading state while redirecting
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'var(--color-roasarian, #fff)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.2rem',
      color: 'var(--color-purple-dark, #333)',
    }}>
      Loading...
    </div>
  );
}
