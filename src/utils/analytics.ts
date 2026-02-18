// Analytics utility for tracking events
// Works with Google Analytics, Plausible, Vercel Analytics, or custom analytics solutions

import { track } from '@vercel/analytics';

interface EventParams {
  [key: string]: string | number | boolean;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const analytics = {
  // Track page views
  pageView: (path: string, title?: string) => {
    try {
      // Google Analytics
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: path,
          page_title: title || document.title,
        });
      }
      
      // Plausible
      if (typeof window.plausible === 'function') {
        window.plausible('pageview');
      }

      // Console log for development
      console.log('[Analytics] Page View:', { path, title });
    } catch (error) {
      console.error('[Analytics] Error tracking page view:', error);
    }
  },

  // Track custom events
  event: (eventName: string, params?: EventParams) => {
    try {
      // Google Analytics
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      }
      
      // Plausible
      if (typeof window.plausible === 'function') {
        window.plausible(eventName, { props: params });
      }

      // Vercel Analytics
      track(eventName, params);

      // Console log for development
      console.log('[Analytics] Event:', eventName, params);
    } catch (error) {
      console.error('[Analytics] Error tracking event:', error);
    }
  },

  // Specific event helpers
  buttonClick: (buttonName: string, location?: string) => {
    analytics.event('button_click', {
      button_name: buttonName,
      location: location || 'unknown',
    });
  },

  inputFocus: (inputName: string, location?: string) => {
    analytics.event('input_focus', {
      input_name: inputName,
      location: location || 'unknown',
    });
  },

  formSubmit: (formName: string, success: boolean) => {
    analytics.event('form_submit', {
      form_name: formName,
      success: success,
    });
  },
};
