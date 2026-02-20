import { useRef, useEffect } from "react";
import heroVideo from "../assets/hero-video.mp4";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PhoneSignupForm from "../components/PhoneSignupForm";

export default function SmartCampaignHeroSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Programmatically play video for iOS Safari compatibility
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented
        });
      }
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-logo">Hi Smart Cookie :)</div>
      <LanguageSwitcher />
      <div className="hero-left">
        <h1>{t.smartCampaign.hero.title}</h1>
        <p>{t.smartCampaign.hero.description}</p>
        <PhoneSignupForm customTitle={t.smartCampaign.hero.formLabel} />
      </div>

      <div className="hero-right">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="hero-video"
        />
      </div>
    </section>
  );
}
