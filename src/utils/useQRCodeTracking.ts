import { useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';
import { analytics } from './analytics';

// Storage keys (same as in ShortLinkRedirect)
const QR_TRACKING_CODE_KEY = 'qr_tracking_code';
const QR_TRACKING_TIMESTAMP_KEY = 'qr_tracking_timestamp';

/**
 * Hook to fire QR code tracking event after redirect
 * Call this in any page that can be a QR code destination
 * 
 * Ensures:
 * - Event only fires once (clears sessionStorage after)
 * - Event only fires if there's a pending tracking code
 * - Uses useRef to prevent double-firing in StrictMode
 */
export function useQRCodeTracking() {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Prevent double-fire in React StrictMode
    if (hasTracked.current) return;

    const code = sessionStorage.getItem(QR_TRACKING_CODE_KEY);
    const timestamp = sessionStorage.getItem(QR_TRACKING_TIMESTAMP_KEY);

    if (!code) return;

    // Mark as tracked immediately to prevent race conditions
    hasTracked.current = true;

    // Clear storage first to prevent any possibility of double-tracking
    sessionStorage.removeItem(QR_TRACKING_CODE_KEY);
    sessionStorage.removeItem(QR_TRACKING_TIMESTAMP_KEY);

    // Fire tracking events
    console.log('[QR Tracking] Firing qr_code_scan for code:', code);

    // Vercel Analytics (primary)
    track('qr_code_scan', {
      code: code,
      scanned_at: timestamp || new Date().toISOString(),
    });

    // Also send to other analytics providers via our utility
    analytics.event('qr_code_scan', {
      code: code,
      scanned_at: timestamp || new Date().toISOString(),
    });

  }, []);
}
