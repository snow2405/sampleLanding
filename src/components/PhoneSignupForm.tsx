import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
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
      return;
    }

    setLoading(true);
    try {
      await fetch("/api/savePhone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting phone:", err);
      alert(t.hero.errorSubmit);
    } finally {
      setLoading(false);
    }
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
