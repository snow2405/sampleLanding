import { useState } from "react";
import heroVideo from "../assets/hero-video.mp4";

export default function HeroSection() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="hero">
      <div className="hero-logo">👀 gsehni</div>
      <div className="hero-left">
        <h1>Die Eifachi, Sicheri und Seriösi Dating App.</h1>
        <p>
          Gang uf spannendi <u>offline</u> Dates anstatt dini Ziit mit endlosem Swipe
          und Chatte z'verschwende.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="notify-form">
            <label htmlFor="phone" className="form-label">
              ✨ Wötsch Nummere ustüschle? ✨
            </label>

            <div className="form-row">
              <input
                type="tel"
                id="phone"
                placeholder="+41 79 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit">Apply for Invite</button>
            </div>

            <small className="privacy-note">
              (Mir teiled dini date mit niemertem, mir bruched sie nume zum di informiere, wenn du döffsch d'App usprobiere)
            </small>
          </form>
        ) : (
          <p className="success-message">
            💌 Merci! Mir melded eus, sobald du chasch loslegä.
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
