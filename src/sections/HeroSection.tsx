import { useState } from "react";
import heroVideo from "../assets/hero-video.mp4";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function HeroSection() {
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

  // Parse description to handle <u> tags
  const parseDescription = (text: string) => {
    const parts = text.split(/(<u>.*?<\/u>)/);
    return parts.map((part, index) => {
      if (part.startsWith('<u>') && part.endsWith('</u>')) {
        const content = part.replace(/<\/?u>/g, '');
        return <u key={index}>{content}</u>;
      }
      return <span key={index}>{part}</span>;
    });
  };




  return (
    <section className="hero">
      <div className="hero-logo">👀 gsehni</div>
      <LanguageSwitcher />
      <div className="hero-left">
        <h1>{t.hero.title}</h1>
        <p>
          {parseDescription(t.hero.description)}
        </p>

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

                <button type="submit" disabled={loading}>
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

      <div className="hero-right">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
      </div>
    </section>
  );
}
