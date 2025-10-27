import { useState } from "react";
import heroVideo from "../assets/hero-video.mp4";

export default function HeroSection() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


const phoneRegex = /^[+0-9\s()-]*$/;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!phone.trim() || loading) return;

  if (!phoneRegex.test(phone)) {
    alert("Bitte gib e gältigi Telefonnummer ih (nur Ziffere und +).");
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
    alert("Etwas isch schief gloffe — probier’s nomol!");
  } finally {
    setLoading(false);
  }
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
                disabled={loading}
                inputMode="tel"
                pattern="^[+0-9\s()-]*$"
                title="Bitte gib nur Ziffern und das + Zeichen ein."
              />

                <button type="submit" disabled={loading}>
                  {loading ? "Wird gschickt..." : "Apply for Invite"}
                </button>
              </div>

              <small className="privacy-note">
                (Mir teiled dini Date mit niemertem – mir bruched sie nume zum di informiere, wenn du döffsch d'App usprobiere)
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
