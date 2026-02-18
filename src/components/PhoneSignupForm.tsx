import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useLocation } from "react-router-dom";
import { analytics } from "../utils/analytics";
import "../styles/PhoneSignupForm.css";

interface PhoneSignupFormProps {
  customTitle?: string;
}

export default function PhoneSignupForm({ customTitle }: PhoneSignupFormProps = {}) {
  const { t } = useLanguage();
  const location = useLocation();
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signupSource, setSignupSource] = useState<string>('unknown');

  // Determine signup source on mount
  useEffect(() => {
    // Check if user came from QR code
    const qrSource = sessionStorage.getItem('signup_source');
    
    if (qrSource) {
      setSignupSource(qrSource);
    } else {
      // Determine source from current page
      const path = location.pathname;
      if (path === '/') {
        setSignupSource('homepage');
      } else if (path === '/anti-ghosting-campaign') {
        setSignupSource('anti-ghosting-campaign');
      } else if (path.includes('/smile')) {
        setSignupSource('smile-campaign');
      } else {
        setSignupSource('other-page');
      }
    }
  }, [location]);

  const phoneRegex = /^[+0-9\s()-]*$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || loading) return;

    if (!phoneRegex.test(phone)) {
      alert(t.hero.errorInvalidPhone);
      analytics.event('form_validation_error', {
        form_name: 'phone_signup',
        error_type: 'invalid_phone_format',
      });
      return;
    }

    analytics.buttonClick('submit_phone', 'signup_form');
    setLoading(true);
    try {
      await fetch("/api/savePhone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      setSubmitted(true);
      
      // Track phone submission with source and phone number
      analytics.event('phone_number_submitted', {
        source: signupSource,
        phone_number: phone,
        timestamp: new Date().toISOString(),
        page: location.pathname,
      });
      
      analytics.formSubmit('phone_signup', true);
      
      // Clear QR source after successful submission
      sessionStorage.removeItem('signup_source');
      sessionStorage.removeItem('signup_source_timestamp');
    } catch (err) {
      console.error("Error submitting phone:", err);
      alert(t.hero.errorSubmit);
      analytics.formSubmit('phone_signup', false);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneFocus = () => {
    analytics.inputFocus('phone_input', 'signup_form');
  };

  return (
    <section className="phone-signup-section">
      <div className="phone-signup-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="notify-form">
          <label htmlFor="phone" className="form-label">
            {customTitle || t.hero.formLabel}
          </label>

          <div className="form-row">
            <input
              type="tel"
              id="phone"
              placeholder={t.hero.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={handlePhoneFocus}
              required
              disabled={loading}
              inputMode="tel"
              pattern="^[+0-9\s()\-]*$"
              title={t.hero.phoneTitle}
            />

            <button type="submit" disabled={loading || !phone.trim()}>
              {loading ? t.hero.buttonLoading : t.hero.buttonSubmit}
            </button>
          </div>

          <small className="privacy-note">
            {t.hero.privacyNote}
          </small>
        </form>
      ) : (
        <p className="success-message">
          {t.hero.successMessage}
        </p>
      )}
      </div>
    </section>
  );
}
