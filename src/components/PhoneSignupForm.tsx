import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { analytics } from "../utils/analytics";
import "../styles/PhoneSignupForm.css";

export default function PhoneSignupForm() {
  const { t } = useLanguage();
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      analytics.formSubmit('phone_signup', true);
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
            {t.hero.formLabel}
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
              pattern="^[+0-9\s()-]*$"
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
